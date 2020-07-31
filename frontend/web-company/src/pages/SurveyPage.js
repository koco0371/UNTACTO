import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import SurveyViewerContainer from '../containers/survey/SurveyViewerContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const SurveyPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <SurveyViewerContainer />
    </>
  );
};

export default SurveyPage;
