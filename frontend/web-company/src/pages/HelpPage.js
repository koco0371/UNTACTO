import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import Main from '../components/common/Main';
import Sidebar from '../components/common/Sidebar';

const HelpPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <Main>Help</Main>
    </>
  );
};

export default HelpPage;
