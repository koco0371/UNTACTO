import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import SurveyListContainer from '../containers/surveys/SurveyListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import { Helmet } from 'react-helmet-async';

const SurveyListPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | SURVEYLIST</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <SurveyListContainer />
    </>
  );
};

export default SurveyListPage;
