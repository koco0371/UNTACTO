import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

// root reducer
const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

// root saga
export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
