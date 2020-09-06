import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as videoPathAPI from '../lib/api/videoPath';
import { takeLatest } from 'redux-saga/effects';

// action type
const READ_VIDEOPATH = 'videoPath/READ_VIDEOPATH';
const READ_VIDEOPATH_SUCCESS = 'videoPath/READ_VIDEOPATH_SUCCESS';
const READ_VIDEOPATH_FAILURE = 'videoPath/READ_VIDEOPATH_FAILURE';
const UNLOAD_VIDEOPATH = 'videoPath/UNLOAD_VIDEOPATH';

// action creator
export const readVideoPath = createAction(
  READ_VIDEOPATH,
  (surveyId) => surveyId,
);
export const unloadVideoPath = createAction(UNLOAD_VIDEOPATH);

// saga
const readVideoPathSaga = createRequestSaga(
  READ_VIDEOPATH,
  videoPathAPI.readVideoPath,
);
export function* videoPathSaga() {
  yield takeLatest(READ_VIDEOPATH, readVideoPathSaga);
}

// initial state
const initialState = {
  videoPath: null,
  error: null,
};

// reducer
const videoPath = handleActions(
  {
    [READ_VIDEOPATH_SUCCESS]: (state, { payload: videoPath }) => ({
      ...state,
      videoPath,
    }),
    [READ_VIDEOPATH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_VIDEOPATH]: () => initialState,
  },
  initialState,
);

export default videoPath;
