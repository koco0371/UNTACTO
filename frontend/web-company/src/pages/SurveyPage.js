import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import SurveyViewerContainer from '../containers/survey/SurveyViewerContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import { Helmet } from 'react-helmet-async';

const SurveyPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | SURVEY</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <SurveyViewerContainer />
    </>
  );
};

export default SurveyPage;
