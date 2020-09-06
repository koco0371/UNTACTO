import React from 'react';
import AdminListTemplate from '../components/admin/AdminListTemplate';
import AdminHeader from '../components/admin/AdminHeader';
import AdminHomeViewer from '../components/admin/AdminHomeViewer';
import { Helmet } from 'react-helmet-async';

const AdminHomePage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | ADMIN</title>
      </Helmet>
      <AdminHeader />
      <AdminListTemplate>
        <h1>관리자 홈페이지</h1>
        <AdminHomeViewer />
      </AdminListTemplate>
    </>
  );
};

export default AdminHomePage;
