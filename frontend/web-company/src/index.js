import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// BrowerRouter를 이용한 routing
import { BrowserRouter as Router } from 'react-router-dom';
// store 및 reducer, saga 사용
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules/index';
// store 적용에 사용
import { Provider } from 'react-redux';
import { tempSetUser, check } from './modules/user';
// page별 제목
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleware();
// root reducer에 대한 store 생성
// 이때 redux devtools extension 적용을 위한 설정
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// 페이지 새로고침 시 local storage에 user가 있는지 탐색하는 함수
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    // 있으면 store에도 저장
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

// root saga 적용
sagaMiddleware.run(rootSaga);

// saga 적용 후 loadUser 호출
loadUser();

// Provider를 통해 프로젝트에 redux를 적용
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
