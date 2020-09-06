import React from 'react';
import AdminListTemplate from '../components/admin/AdminListTemplate';
import AdminUsersListContainer from '../containers/admin/AdminUsersListContainer';
import AdminHeader from '../components/admin/AdminHeader';
import { Helmet } from 'react-helmet-async';

const AdminUserListPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | ADMIN</title>
      </Helmet>
      <AdminHeader />
      <AdminListTemplate>
        <h1>회사 목록</h1>
        <AdminUsersListContainer />
      </AdminListTemplate>
    </>
  );
};

export default AdminUserListPage;
