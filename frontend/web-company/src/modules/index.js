import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write from './write';

// root reducer
const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
});

// root saga
export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
