// AuthForm 을 사용해서 만든 실제로 데이터가 사용되는 컨테이너

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomerAuthForm from '../../components/customer/CustomerAuthForm';
import {
  initializeForm,
  changeField,
  customerLogin,
} from '../../modules/customerAuth';
import { customerCheck } from '../../modules/customer';

const CustomerLoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, customerAuth, customerAuthError, customer } = useSelector(
    ({ customerAuth, customer }) => ({
      form: customerAuth.customerLogin,
      customerAuth: customerAuth.customerAuth,
      customerAuthError: customerAuth.customerAuthError,
      customer: customer.customer,
    }),
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'customerLogin',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber, gender, age } = form;
    if ([phoneNumber, gender, age].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    dispatch(customerLogin({ phoneNumber, gender, age }));
  };

  useEffect(() => {
    dispatch(initializeForm('customerLogin'));
  }, [dispatch]);

  useEffect(() => {
    if (customerAuthError) {
      console.log('오류 발생');
      console.log(customerAuthError);
      setError('로그인 실패');
      return;
    }
    if (customerAuth) {
      console.log('로그인 성공');
      dispatch(customerCheck());
    }
  }, [customerAuth, customerAuthError, dispatch]);

  useEffect(() => {
    if (customer) {
      history.push(`/customer/${customer.customerId}`);
      try {
        localStorage.setItem('customer', JSON.stringify(customer));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, customer]);

  return (
    <CustomerAuthForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(CustomerLoginForm);
