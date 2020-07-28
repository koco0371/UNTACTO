import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtons from '../components/write/WriteActionButtons';
import KioskBoxContainer from '../containers/write/KioskBoxContainer';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <EditorContainer />
      <KioskBoxContainer />
      <WriteActionButtons />
    </>
  );
};

export default WritePage;
