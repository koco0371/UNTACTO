import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <EditorContainer />
      <WriteActionButtonsContainer />
    </>
  );
};

export default WritePage;
