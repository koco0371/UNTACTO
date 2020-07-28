// 비동기 api 요청을 위한 middleware
// 요청을 보내는 하나의 action에 대해, API 요청 대상에 대한 컨트롤과 동시에 loading에 대한 컨트롤도 수행
// 또한 요청에 대한 응답에 따라, 다른 동작을 수행
import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // generator 문법을 활용
  return function* (action) {
    // 1. 해당 요청에 대한 loading을 true로 변경
    yield put(startLoading(type));

    // 2. 요청
    try {
      // 1) action.payload를 args로 request 함수를 호출
      const response = yield call(request, action.payload);

      // 2) 성공 시
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
      // 3) 실패 시
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    // 3. 해당 요청에 대한 loading을 false로 변경
    yield put(finishLoading(type));
  };
}
