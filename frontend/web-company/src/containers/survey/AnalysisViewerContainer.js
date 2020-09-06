import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnalysisViewer from '../../components/survey/AnalysisViewer';
import {
  readSurveyAnswer,
  unloadSurveyAnswer,
} from '../../modules/surveyAnswer';
import { withRouter } from 'react-router-dom';

const SurveyAnalysisViewer = ({ match, history }) => {
  const { surveyId } = match.params;
  const dispatch = useDispatch();
  const { surveyAnswer, error, loading, user } = useSelector(
    ({ surveyAnswer, loading, user }) => ({
      surveyAnswer: surveyAnswer.surveyAnswer,
      error: surveyAnswer.error,
      loading: loading['surveyAnswer/READ_SURVEY_ANSWER'],
      user: user.user,
    }),
  );
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
    return;
  }, [history, user]);
  useEffect(() => {
    dispatch(readSurveyAnswer(surveyId));
    return () => {
      dispatch(unloadSurveyAnswer());
    };
  }, [dispatch, surveyId]);

  if (user) {
    return (
      <AnalysisViewer
        more
        surveyAnswer={surveyAnswer}
        error={error}
        loading={loading}
      />
    );
  } else {
    return <h1>hi</h1>;
  }
};

export default withRouter(SurveyAnalysisViewer);
