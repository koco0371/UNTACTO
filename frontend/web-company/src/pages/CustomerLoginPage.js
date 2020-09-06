import React from 'react';
import MobileHeader from '../components/common/MobileHeader';
import CustomerLoginForm from '../containers/customer/CustomerLoginForm';
import { Helmet } from 'react-helmet-async';

const CustomerLoginPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | CUSTOMER</title>
      </Helmet>
      <MobileHeader />
      <CustomerLoginForm />
    </>
  );
};

export default CustomerLoginPage;
