// Customer 의 상태를 담는 redux module
import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as customerAPI from '../lib/api/customer';
import createRequestSaga from '../lib/createRequestSaga';

// action type
// check 전 임시 로그인 처리
const TEMP_SET_CUSTOMER = 'customer/TEMP_SET_CUSTOMER';

const CUSTOMER_CHECK = 'customer/CUSTOMER_CHECK';
const CUSTOMER_CHECK_SUCCESS = 'customer/CUSTOMER_CHECK_SUCCESS';
const CUSTOMER_CHECK_FAILURE = 'customer/CUSTOMER_CHECK_FAILURE';

const CUSTOMER_LOGOUT = 'customer/CUSTOMER_LOGOUT';

// action creator
export const tempSetCustomer = createAction(
  TEMP_SET_CUSTOMER,
  (customer) => customer,
);
export const customerCheck = createAction(CUSTOMER_CHECK);
export const customerLogout = createAction(CUSTOMER_LOGOUT);

// 로그인 검증 saga
const customerCheckSaga = createRequestSaga(
  CUSTOMER_CHECK,
  customerAPI.customerCheck,
);

// 로그인 검증 실패 시 local storage 초기화하는 saga
function customerCheckFailureSaga() {
  try {
    localStorage.removeItem('customer');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

// 로그아웃 saga
function* customerLogoutSaga() {
  try {
    yield call(customerAPI.customerLogout);
    localStorage.removeItem('customer');
  } catch (e) {
    console.log(e);
  }
}

export function* customerSaga() {
  yield takeLatest(CUSTOMER_CHECK, customerCheckSaga);
  yield takeLatest(CUSTOMER_CHECK_FAILURE, customerCheckFailureSaga);
  yield takeLatest(CUSTOMER_LOGOUT, customerLogoutSaga);
}

// initial state
const initialState = {
  customer: null,
  customerCheckError: null,
};

// reducer
export default handleActions(
  {
    [TEMP_SET_CUSTOMER]: (state, { payload: customer }) => ({
      ...state,
      customer,
    }),
    [CUSTOMER_CHECK_SUCCESS]: (state, { payload: customer }) => ({
      ...state,
      customer,
      customerCheckError: null,
    }),
    [CUSTOMER_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      customer: null,
      customerCheckError: error,
    }),
    [CUSTOMER_LOGOUT]: (state) => ({
      ...state,
      customer: null,
    }),
  },
  initialState,
);
