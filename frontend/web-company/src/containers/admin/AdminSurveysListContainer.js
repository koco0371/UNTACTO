import React, { useEffect } from 'react';
import AdminSurveysList from '../../components/admin/AdminSurveysList';
import { useDispatch, useSelector } from 'react-redux';
import { listAdminSurveys } from '../../modules/adminSurveys';
import { adminDeleteSurvey } from '../../lib/api/admin';
import { withRouter } from 'react-router-dom';

const AdminSurveysListContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { adminSurveys, error, loading } = useSelector(
    ({ adminSurveys, loading }) => ({
      adminSurveys: adminSurveys.adminSurveys,
      error: adminSurveys.error,
      loading: loading['adminSurveys/LIST_ADMIN_SURVEYS'],
    }),
  );
  useEffect(() => {
    dispatch(listAdminSurveys());
  }, [dispatch]);

  const onRemove = async (surveyId) => {
    try {
      await adminDeleteSurvey(surveyId);
      history.push('/admin/survey');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminSurveysList
      loading={loading}
      error={error}
      adminSurveys={adminSurveys}
      onRemove={onRemove}
    />
  );
};

export default withRouter(AdminSurveysListContainer);
