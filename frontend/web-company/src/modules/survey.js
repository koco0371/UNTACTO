import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as surveysAPI from '../lib/api/surveys';
import { takeLatest } from 'redux-saga/effects';

// action type
const READ_SURVEY = 'survey/READ_SURVEY';
const READ_SURVEY_SUCCESS = 'survey/READ_SURVEY_SUCCESS';
const READ_SURVEY_FAILURE = 'survey/READ_SURVEY_FAILURE';
const UNLOAD_SURVEY = 'survey/UNLOAD_SURVEY';

// action creator
export const readSurvey = createAction(READ_SURVEY, (id) => id);
export const unloadSurvey = createAction(UNLOAD_SURVEY);

// saga
const readSurveySaga = createRequestSaga(READ_SURVEY, surveysAPI.readSurvey);
export function* surveySaga() {
  yield takeLatest(READ_SURVEY, readSurveySaga);
}

// initial state
const initialState = {
  survey: null,
  error: null,
};

// reducer
const survey = handleActions(
  {
    [READ_SURVEY_SUCCESS]: (state, { payload: survey }) => ({
      ...state,
      survey,
    }),
    [READ_SURVEY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_SURVEY]: () => initialState,
  },
  initialState,
);

export default survey;
