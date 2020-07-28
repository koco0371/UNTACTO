// 사용자의 상태를 담는 redux module
import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from '../lib/createRequestSaga';

// action type
// check 전 임시 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';

const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';

const LOGOUT = 'user/LOGOUT';

// action creator
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// 로그인 검증 saga
const checkSaga = createRequestSaga(CHECK, authAPI.check);

// 로그인 검증 실패 시 local storage 초기화하는 saga
function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

// 로그아웃 saga
function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

// initial state
const initialState = {
  user: null,
  checkError: null,
};

// reducer
export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
