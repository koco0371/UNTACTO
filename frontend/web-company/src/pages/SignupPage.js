import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../containers/auth/SignupForm';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import { Helmet } from 'react-helmet-async';

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | SIGNUP</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <AuthTemplate>
        <SignupForm />
      </AuthTemplate>
    </>
  );
};

export default SignupPage;
