import React from 'react';
import AdminListTemplate from '../components/admin/AdminListTemplate';
import AdminSurveysListContainer from '../containers/admin/AdminSurveysListContainer';
import AdminHeader from '../components/admin/AdminHeader';
import { Helmet } from 'react-helmet-async';

const AdminSurveyListPage = () => {
  return (
    <>
      <Helmet>
        <title>UNTACTO | ADMIN</title>
      </Helmet>
      <AdminHeader />
      <AdminListTemplate>
        <h1>설문 목록</h1>
        <AdminSurveysListContainer />
      </AdminListTemplate>
    </>
  );
};

export default AdminSurveyListPage;
