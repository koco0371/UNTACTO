import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import survey, { surveySaga } from './survey';
import surveys, { surveysSaga } from './surveys';

// root reducer
const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  survey,
  surveys,
});

// root saga
export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), surveySaga(), surveysSaga()]);
}

export default rootReducer;
