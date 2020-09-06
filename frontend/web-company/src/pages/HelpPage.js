import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import HelpPageViewer from '../components/etc/HelpPageViewer';
import Sidebar from '../components/common/Sidebar';
import { Helmet } from 'react-helmet-async';

const HelpPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | HELP</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <HelpPageViewer />
    </>
  );
};

export default HelpPage;
