import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../containers/auth/SignupForm';
import HeaderContainer from '../containers/common/HeaderContainer';

const SignupPage = () => {
  return (
    <>
      <HeaderContainer />
      <AuthTemplate>
        <SignupForm />
      </AuthTemplate>
    </>
  );
};

export default SignupPage;
