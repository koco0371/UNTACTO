import React from 'react';
import MobileHeader from '../components/common/MobileHeader';
import CustomerInfoViewerContainer from '../containers/customer/CustomerInfoViewerContainer';
import { Helmet } from 'react-helmet-async';

const CustomerInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | CUSTOMER</title>
      </Helmet>
      <MobileHeader />
      <CustomerInfoViewerContainer />
    </>
  );
};

export default CustomerInfoPage;
