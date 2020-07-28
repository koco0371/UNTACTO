import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Main from '../components/common/Main';
import HeaderContainer from '../containers/common/HeaderContainer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <Main>Hi</Main>
    </>
  );
};

export default DashboardPage;
