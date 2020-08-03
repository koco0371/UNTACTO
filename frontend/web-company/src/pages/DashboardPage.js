import React from 'react';
import Sidebar from '../components/common/Sidebar';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import DashboardViewerContainer from '../containers/surveys/DashboardViewerContainer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <DashboardViewerContainer />
    </>
  );
};

export default DashboardPage;
