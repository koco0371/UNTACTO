import { createAction, handleActions } from 'redux-actions';

// action type
const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

// action creator
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// initial state
const initialState = {
  title: '',
  description: '',
  video: '',
  selectedKiosk: null,
  kiosks: [
    {
      kioskId: 1,
      location: '역삼',
    },
    {
      kioskId: 2,
      location: '강남',
    },
    {
      kioskId: 3,
      location: '홍대',
    },
    {
      kioskId: 4,
      location: '신촌',
    },
    {
      kioskId: 5,
      location: '종로',
    },
  ],
};

// reducer
const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
);

export default write;
