import { createAction, handleActions } from 'redux-actions';

// action type
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// action creator
// requestType을 받아서 그대로 payload로 설정
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

// initial state
const initialState = {};

// reducer
// START_LOADING 일 경우, payload로 넘겨받은 request type에 대한 loading을 true로
// FINISH_LOADING일 경우, 반대
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
