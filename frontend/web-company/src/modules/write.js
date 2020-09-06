import { createAction, handleActions } from 'redux-actions';
import * as surveysAPI from '../lib/api/surveys';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';

// action type
const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const WRITE_SURVEY = 'write/WRITE_SURVEY';
const WRITE_SURVEY_SUCCESS = 'write/WRITE_SURVEY_SUCCESS';
const WRITE_SURVEY_FAILURE = 'write/WRITE_SURVEY_FAILURE';

// action creator
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeSurvey = createAction(
  WRITE_SURVEY,
  ({ title, description, video, beginsAt, duration, selectedKiosk }) => ({
    title,
    description,
    video,
    beginsAt,
    duration,
    selectedKiosk,
  }),
);

// redux saga
const writeSurveySaga = createRequestSaga(WRITE_SURVEY, surveysAPI.writeSurvey);
export function* writeSaga() {
  yield takeLatest(WRITE_SURVEY, writeSurveySaga);
}

// initial state
const initialState = {
  title: '',
  description: '',
  video: '',
  beginsAt: new Date(),
  duration: '',
  selectedKiosk: '1',
  kiosks: [
    {
      kioskId: 1,
      location: '역삼',
    },
    {
      kioskId: 2,
      location: '강남',
    },
    {
      kioskId: 3,
      location: '홍대',
    },
    {
      kioskId: 4,
      location: '신촌',
    },
    {
      kioskId: 5,
      location: '종로',
    },
  ],
  survey: null,
  surveyError: null,
};

// reducer
const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_SURVEY]: (state) => ({
      ...state,
      survey: null,
      surveyError: null,
    }),
    [WRITE_SURVEY_SUCCESS]: (state, { payload: survey }) => ({
      ...state,
      survey,
    }),
    [WRITE_SURVEY_FAILURE]: (state, { payload: surveyError }) => ({
      ...state,
      surveyError,
    }),
  },
  initialState,
);

export default write;
