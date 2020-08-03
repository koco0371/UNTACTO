import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnalysisViewer from '../../components/survey/AnalysisViewer';
import {
  readSurveyAnswer,
  unloadSurveyAnswer,
} from '../../modules/surveyAnswer';
import { withRouter } from 'react-router-dom';

const SurveyAnalysisViewer = ({ match }) => {
  const { surveyId } = match.params;
  const dispatch = useDispatch();
  const { surveyAnswer, error, loading } = useSelector(
    ({ surveyAnswer, loading }) => ({
      surveyAnswer: surveyAnswer.surveyAnswer,
      error: surveyAnswer.error,
      loading: loading['surveyAnswer/READ_SURVEY_ANSWER'],
    }),
  );
  useEffect(() => {
    dispatch(readSurveyAnswer(surveyId));
    return () => {
      dispatch(unloadSurveyAnswer());
    };
  }, [dispatch, surveyId]);
  return (
    <AnalysisViewer
      more
      surveyAnswer={surveyAnswer}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(SurveyAnalysisViewer);
