import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Main from '../components/common/Main';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <Main>hello</Main>
    </>
  );
};

export default DashboardPage;
