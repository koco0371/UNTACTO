// AuthForm 을 사용해서 만든 실제로 데이터가 사용되는 컨테이너

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// auth 관련 action 생성 함수들
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  // store 데이터 변경을 위함
  const dispatch = useDispatch();
  // state.auth.login에 접근
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  // input 변경 이벤트에 대한 핸들러
  const onChange = (e) => {
    // 이벤트가 발생한 요소의 value와 name 속성을 가져옴
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 처음 render될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
