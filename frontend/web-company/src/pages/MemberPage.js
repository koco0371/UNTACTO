import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import Main from '../components/common/Main';
import Sidebar from '../components/common/Sidebar';

const MemberPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <Main>Member</Main>
    </>
  );
};

export default MemberPage;
