import React from 'react';
import AdminListTemplate from '../components/admin/AdminListTemplate';
import AdminCustomersListContainer from '../containers/admin/AdminCustomersListContainer';
import AdminHeader from '../components/admin/AdminHeader';
import { Helmet } from 'react-helmet-async';

const AdminCustomerListPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | ADMIN</title>
      </Helmet>
      <AdminHeader />
      <AdminListTemplate>
        <h1>설문응답자 목록</h1>
        <AdminCustomersListContainer />
      </AdminListTemplate>
    </>
  );
};

export default AdminCustomerListPage;
