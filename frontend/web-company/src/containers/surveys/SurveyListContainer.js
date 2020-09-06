import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SurveyList from '../../components/surveys/SurveyList';
import { listSurveys } from '../../modules/surveys';

const SurveyListContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { surveys, error, loading, user } = useSelector(
    ({ surveys, loading, user }) => ({
      surveys: surveys.surveys,
      error: surveys.error,
      loading: loading['surveys/LIST_SURVEYS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    if (!user) {
      history.push('/login');
    } else {
      const { companyId } = user;
      dispatch(listSurveys({ companyId }));
    }
  }, [history, user, dispatch]);

  return <SurveyList loading={loading} error={error} surveys={surveys} />;
};

export default withRouter(SurveyListContainer);
