import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as surveysAPI from '../lib/api/surveys';
import { takeLatest } from 'redux-saga/effects';

// action type
const LIST_SURVEYS = 'surveys/LIST_SURVEYS';
const LIST_SURVEYS_SUCCESS = 'surveys/LIST_SURVEYS_SUCCESS';
const LIST_SURVEYS_FAILURE = 'surveys/LIST_SURVEYS_FAILURE';

// action creator
export const listSurveys = createAction(LIST_SURVEYS, ({ companyId }) => ({
  companyId,
}));

// saga
const listSurveysSaga = createRequestSaga(LIST_SURVEYS, surveysAPI.listSurveys);
export function* surveysSaga() {
  yield takeLatest(LIST_SURVEYS, listSurveysSaga);
}

// initial state
const initialState = {
  surveys: null,
  error: null,
};

// reducer
const surveys = handleActions(
  {
    [LIST_SURVEYS_SUCCESS]: (state, { payload: surveys }) => ({
      ...state,
      surveys,
    }),
    [LIST_SURVEYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default surveys;
