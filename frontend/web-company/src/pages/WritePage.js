import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import Editor from '../components/write/Editor';
import KioskBox from '../components/write/KioskBox';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <Editor />
      <KioskBox />
    </>
  );
};

export default WritePage;
