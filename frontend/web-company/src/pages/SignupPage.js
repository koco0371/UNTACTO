import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../containers/auth/SignupForm';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const SignupPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <AuthTemplate>
        <SignupForm />
      </AuthTemplate>
    </>
  );
};

export default SignupPage;
