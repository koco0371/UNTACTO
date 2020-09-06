import React from 'react';
import Sidebar from '../components/common/Sidebar';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import DashboardViewerContainer from '../containers/surveys/DashboardViewerContainer';
import { Helmet } from 'react-helmet-async';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | DASHBOARD</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <DashboardViewerContainer />
    </>
  );
};

export default DashboardPage;
