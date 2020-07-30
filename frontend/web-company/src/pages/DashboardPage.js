import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Main from '../components/common/Main';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import AnalysisViewer from '../components/survey/AnalysisViewer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <AnalysisViewer />
    </>
  );
};

export default DashboardPage;
