import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as answersAPI from '../lib/api/surveysAnswers';
import { takeLatest } from 'redux-saga/effects';

// action type
const READ_SURVEYS_ANSWERS = 'surveysAnswers/READ_SURVEYS_ANSWERS';
const READ_SURVEYS_ANSWERS_SUCCESS =
  'surveysAnswers/READ_SURVEYS_ANSWERS_SUCCESS';
const READ_SURVEYS_ANSWERS_FAILURE =
  'surveysAnswers/READ_SURVEYS_ANSWERS_FAILURE';

// action creator
export const readSurveysAnswers = createAction(
  READ_SURVEYS_ANSWERS,
  ({ companyId }) => ({
    companyId,
  }),
);

// saga
const readSurveysAnswersSaga = createRequestSaga(
  READ_SURVEYS_ANSWERS,
  answersAPI.readSurveysAnswers,
);
export function* surveysAnswersSaga() {
  yield takeLatest(READ_SURVEYS_ANSWERS, readSurveysAnswersSaga);
}

// initial state
const initialState = {
  surveysAnswers: null,
  error: null,
};

// reducer
const surveysAnswers = handleActions(
  {
    [READ_SURVEYS_ANSWERS_SUCCESS]: (state, { payload: surveysAnswers }) => ({
      ...state,
      surveysAnswers,
    }),
    [READ_SURVEYS_ANSWERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default surveysAnswers;
