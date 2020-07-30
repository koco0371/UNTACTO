import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readSurvey, unloadSurvey } from '../../modules/survey';
import SurveyViewer from '../../components/survey/SurveyViewer';

const SurveyViewerContainer = ({ match }) => {
  const { surveyId } = match.params;
  const dispatch = useDispatch();
  const { survey, error, loading } = useSelector(({ survey, loading }) => ({
    survey: survey.survey,
    error: survey.error,
    loading: loading['survey/READ_SURVEY'],
  }));

  useEffect(() => {
    dispatch(readSurvey(surveyId));
    return () => {
      dispatch(unloadSurvey());
    };
  }, [dispatch, surveyId]);
  return <SurveyViewer survey={survey} loading={loading} error={error} />;
};

export default withRouter(SurveyViewerContainer);
