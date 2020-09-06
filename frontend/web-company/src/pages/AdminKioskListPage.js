import React from 'react';
import AdminListTemplate from '../components/admin/AdminListTemplate';
import AdminKiosksListContainer from '../containers/admin/AdminKiosksListContainer';
import AdminHeader from '../components/admin/AdminHeader';
import { Helmet } from 'react-helmet-async';

const AdminKioskListPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | ADMIN</title>
      </Helmet>
      <AdminHeader />
      <AdminListTemplate>
        <h1>키오스크 목록</h1>
        <AdminKiosksListContainer />
      </AdminListTemplate>
    </>
  );
};

export default AdminKioskListPage;
