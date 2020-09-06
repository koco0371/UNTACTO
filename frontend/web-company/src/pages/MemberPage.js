import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import MemberPageViewer from '../components/etc/MemberPageViewer';
import Sidebar from '../components/common/Sidebar';
import { Helmet } from 'react-helmet-async';

const MemberPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | MEMBER</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <MemberPageViewer />
    </>
  );
};

export default MemberPage;
