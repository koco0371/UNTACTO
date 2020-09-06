import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardViewer from '../../components/surveys/DashboardViewer';
import {
  readSurveysAnswers,
  unloadSurveysAnswers,
} from '../../modules/surveysAnswers';
import { withRouter } from 'react-router-dom';

const DashboardViewerContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { surveysAnswers, error, loading, user } = useSelector(
    ({ surveysAnswers, loading, user }) => ({
      surveysAnswers: surveysAnswers.surveysAnswers,
      error: surveysAnswers.error,
      loading: loading['surveysAnswers/READ_SURVEYS_ANSWERS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    if (!user) {
      history.push('/login');
    } else {
      const { companyId } = user;
      dispatch(readSurveysAnswers({ companyId }));
    }
    return () => {
      dispatch(unloadSurveysAnswers());
    };
  }, [history, user, dispatch]);

  if (user) {
    return (
      <DashboardViewer
        surveysAnswers={surveysAnswers}
        error={error}
        loading={loading}
      />
    );
  } else {
    return <h1>hi</h1>;
  }
};

export default withRouter(DashboardViewerContainer);
