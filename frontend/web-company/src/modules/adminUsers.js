import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';
import { takeLatest } from 'redux-saga/effects';

// action type
const LIST_ADMIN_USERS = 'adminUsers/LIST_ADMIN_USERS';
const LIST_ADMIN_USERS_SUCCESS = 'adminUsers/LIST_ADMIN_USERS_SUCCESS';
const LIST_ADMIN_USERS_FAILURE = 'adminUsers/LIST_ADMIN_USERS_FAILURE';

// action creator
export const listAdminUsers = createAction(LIST_ADMIN_USERS);

// saga
const listAdminUsersSaga = createRequestSaga(
  LIST_ADMIN_USERS,
  adminAPI.adminListUsers,
);
export function* adminUsersSaga() {
  yield takeLatest(LIST_ADMIN_USERS, listAdminUsersSaga);
}

// initial state
const initialState = {
  adminUsers: null,
  error: null,
};

// reducer
const adminUsers = handleActions(
  {
    [LIST_ADMIN_USERS_SUCCESS]: (state, { payload: adminUsers }) => ({
      ...state,
      adminUsers,
    }),
    [LIST_ADMIN_USERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default adminUsers;
