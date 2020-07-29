import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import SurveyListContainer from '../containers/surveys/SurveyListContainer';

const SurveyListPage = () => {
  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <SurveyListContainer />
    </>
  );
};

export default SurveyListPage;
