// auth reducer module
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action type
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

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

// initial state
const initialState = {
  signup: {
    companyName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    companyName: '',
    password: '',
  },
};

// reducer
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
