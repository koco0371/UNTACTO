import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import EditorContainer from '../containers/write/EditorContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | CREATE</title>
      </Helmet>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <EditorContainer />
    </>
  );
};

export default WritePage;
