// customerAuth reducer module
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as customerAPI from '../lib/api/customer';

// action type
const CHANGE_FIELD = 'customerAuth/CHANGE_FIELD';

const INITIALIZE_FORM = 'customerAuth/INITIALIZE_FORM';

const CUSTOMER_LOGIN = 'customerAuth/CUSTOMER_LOGIN';
const CUSTOMER_LOGIN_SUCCESS = 'customerAuth/CUSTOMER_LOGIN_SUCCESS';
const CUSTOMER_LOGIN_FAILURE = 'customerAuth/CUSTOMER_LOGIN_FAILURE';

// action creator
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    // form, key, value를 받아와 payload에 담아서 action 생성
    form, // form 종류 (signup/login)
    key, // form 내부 input (companyName, email, password)
    value, // 실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const customerLogin = createAction(
  CUSTOMER_LOGIN,
  ({ phoneNumber, gender, age }) => ({
    phoneNumber,
    gender,
    age,
  }),
);

// saga 생성
const customerLoginSaga = createRequestSaga(
  CUSTOMER_LOGIN,
  customerAPI.customerLogin,
);
export function* customerAuthSaga() {
  yield takeLatest(CUSTOMER_LOGIN, customerLoginSaga);
}

// initial state
const initialState = {
  customerLogin: {
    phoneNumber: '',
    gender: '',
    age: '',
  },
  customerAuth: null,
  customerAuthError: null,
};

// reducer
const customerAuth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      customerAuthError: null,
    }),
    [CUSTOMER_LOGIN_SUCCESS]: (state, { payload: customerAuth }) => ({
      ...state,
      customerAuthError: null,
      customerAuth,
    }),
    [CUSTOMER_LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      customerAuthError: error,
    }),
  },
  initialState,
);

export default customerAuth;
