import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomerInfoViewer from '../../components/customer/CustomerInfoViewer';
import customerLogout from '../../modules/customer';

const CustomerInfoViewerContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { customer } = useSelector(({ customer }) => ({
    customer: customer.customer,
  }));
  useEffect(() => {
    if (!customer) {
      history.push('/customerlogin');
    }
  }, [history, customer]);
  useEffect(() => {
    return () => {
      dispatch(customerLogout());
    };
  }, [dispatch]);
  return <CustomerInfoViewer customer={customer} />;
};

export default withRouter(CustomerInfoViewerContainer);
