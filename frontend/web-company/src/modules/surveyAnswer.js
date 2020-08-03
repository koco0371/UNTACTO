import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as answersAPI from '../lib/api/surveysAnswers';
import { takeLatest } from 'redux-saga/effects';

// action type
const READ_SURVEY_ANSWER = 'surveyAnswer/READ_SURVEY_ANSWER';
const READ_SURVEY_ANSWER_SUCCESS = 'surveyAnswer/READ_SURVEY_ANSWER_SUCCESS';
const READ_SURVEY_ANSWER_FAILURE = 'surveyAnswer/READ_SURVEY_ANSWER_FAILURE';
const UNLOAD_SURVEY_ANSWER = 'surveyAnswer/UNLOAD_SURVEY_ANSWER';

// action creator
export const readSurveyAnswer = createAction(READ_SURVEY_ANSWER, (id) => id);
export const unloadSurveyAnswer = createAction(UNLOAD_SURVEY_ANSWER);

// saga
const readSurveyAnswerSaga = createRequestSaga(
  READ_SURVEY_ANSWER,
  answersAPI.readSurveyAnswer,
);
export function* surveyAnswerSaga() {
  yield takeLatest(READ_SURVEY_ANSWER, readSurveyAnswerSaga);
}

// initial state
const initialState = {
  surveyAnswer: null,
  error: null,
};

// reducer
const surveyAnswer = handleActions(
  {
    [READ_SURVEY_ANSWER_SUCCESS]: (state, { payload: surveyAnswer }) => ({
      ...state,
      surveyAnswer,
    }),
    [READ_SURVEY_ANSWER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_SURVEY_ANSWER]: () => initialState,
  },
  initialState,
);

export default surveyAnswer;
