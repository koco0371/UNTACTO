// AuthForm 을 사용해서 만든 실제로 데이터가 사용되는 컨테이너
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// auth 관련 action 생성 함수들
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

const SignupForm = ({ history }) => {
  const [error, setError] = useState(null);
  // store 데이터 변경을 위함
  const dispatch = useDispatch();
  // state.auth.signup에 접근
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // input 변경 이벤트에 대한 핸들러
  const onChange = (e) => {
    // 이벤트가 발생한 요소의 value와 name 속성을 가져옴
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, companyName, password, passwordConfirm } = form;
    if ([email, companyName, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'signup', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'signup', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(signup({ email, companyName, password }));
  };

  // 처음 render될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 가입한 이메일입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(SignupForm);
