import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardViewer from '../../components/surveys/DashboardViewer';
import { readSurveysAnswers } from '../../modules/surveysAnswers';

const DashboardViewerContainer = () => {
  const dispatch = useDispatch();
  const { surveysAnswers, error, loading, companyId } = useSelector(
    ({ surveysAnswers, loading, user }) => ({
      surveysAnswers: surveysAnswers.surveysAnswers,
      error: surveysAnswers.error,
      loading: loading['surveysAnswers/READ_SURVEYS_ANSWERS'],
      user: user.user,
      companyId: user.user.companyId,
    }),
  );
  useEffect(() => {
    dispatch(readSurveysAnswers({ companyId }));
  }, [dispatch, companyId]);
  return (
    <DashboardViewer
      surveysAnswers={surveysAnswers}
      error={error}
      loading={loading}
    />
  );
};

export default DashboardViewerContainer;
