import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// BrowerRouter를 이용한 routing
import { BrowserRouter as Router } from 'react-router-dom';
// store 생성에 사용
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/index';
// store 적용에 사용
import { Provider } from 'react-redux';

// root reducer에 대한 store 생성
// 이때 redux devtools extension 적용을 위한 설정
const store = createStore(rootReducer, composeWithDevTools());

// Provider를 통해 프로젝트에 redux를 적용
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
