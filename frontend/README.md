## 프론트엔드

### 개요

> 프론트엔드 프로젝트 기능 및 구조 개요

#### 기능 개요

- 웹에서 회사가 생성한 설문을 백엔드로 전송하여 저장
- 키오스크에서 생성된 설문 응답들을 차트로 시각화하여 제공
- 키오스크에서 설문 응답 후 포인트를 적립
- 설문, 회사, 설문응답자, 키오스크에 대한 관리자 페이지

#### 프로젝트 구조

```
frontend
└── web-company
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── .prettierrc
    ├── public
    │   ├── favicon.ico
    │   ├── imgs
    │   └── index.html
    └── src
        ├── App.js
        ├── index.css
        ├── index.js
        ├── components
        │   ├── admin
        │   ├── auth
        │   ├── charts
        │   ├── common
        │   ├── customer
        │   ├── etc
        │   ├── survey
        │   ├── surveys
        │   └── write
        ├── containers
        │   ├── admin
        │   ├── auth
        │   ├── common
        │   ├── customer
        │   ├── survey
        │   ├── surveys
        │   └── write
        ├── libs
        │   ├── api
        │   ├── styles
        │   └── createRequestSaga.js
        ├── modules
        └── pages
            ├── AdminCustomerListPage.js
            ├── AdminHomePage.js
            ├── AdminKioskListPage.js
            ├── AdminSurveyListPage.js
            ├── AdminUserListPage.js
            ├── CustomerInfoPage.js
            ├── CustomerLoginPage.js
            ├── DashboardPage.js
            ├── HelpPage.js
            ├── LoginPage.js
            ├── MemberPage.js
            ├── SignupPage.js
            ├── SurveyListPage.js
            ├── SurveyPage.js
            └── WritePage.js
```

### Tools

> 프론트엔드 개발에 사용한 프레인워크 및 패키지들

#### Framework

| Name  | Version   |
| :---- | :-------- |
| React | v.16.13.1 |

#### Packages

| Name                                                                               | Purpose                  |
| :--------------------------------------------------------------------------------- | :----------------------- |
| [axios](https://github.com/axios/axios)                                            | Fetching data            |
| [bootstrap](https://www.npmjs.com/package/bootstrap)                               | UI design                |
| [immer](https://www.npmjs.com/package/immer)                                       | Changing store easily    |
| [qs](https://www.npmjs.com/package/qs)                                             | Handling query-string    |
| [react-billboardjs](https://www.npmjs.com/package/react-billboardjs)               | Data visualization       |
| [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)                   | UI design                |
| [react-calendar](https://www.npmjs.com/package/react-calendar)                     | In-app calendar          |
| [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)             | Handling titles of pages |
| [react-player](https://www.npmjs.com/package/react-player)                         | In-app video player      |
| [react-redux](https://react-redux.js.org/)                                         | Using redux with react   |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)                 | Routing                  |
| [react-simple-keyboard](https://www.npmjs.com/package/react-simple-keyboard)       | Kiosk Keyboard           |
| [redux](https://redux.js.org/)                                                     | Managing state           |
| [redux-actions](https://www.npmjs.com/package/redux-actions)                       | Handling redux action    |
| [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) | Dev tools for redux      |
| [redux-saga](https://www.npmjs.com/package/redux-saga)                             | Redux middleware         |
| [styled-components](https://styled-components.com/docs)                            | Styling components       |

### APIs

> axios 사용
>
> 백엔드 서버와의 커뮤니케이션 API
>
> `client.js` 에서 axios 인스턴스를 생성 및 export한 후, 각 파일에서 import 하여 사용

#### Admin

> 웹 어플리케이션 관리자 페이지에서 사용하는 API

**1. Surveys**

- 전체 설문 목록

  ```
  GET  /api/admin/surveys
  ```

- 설문 삭제

  ```
  DELETE /api/admin/surveys/:surveyId
  ```

**2. Users**

- 전체 회사 목록

  ```
  GET /api/admin/users
  ```

- 회사 삭제

  ```
  DELETE /api/admin/users/:userId
  ```

**3. Customers**

- 전체 설문응답자 목록

  ```
  GET /api/admin/customers
  ```

- 설문응답자 삭제

  ```
  DELETE /api/admin/customers/:customerId
  ```

**4. Kiosks**

- 전체 키오스크 목록

  ```
  GET /api/admin/kiosks
  ```

#### Auth

> 회사 계정과 관련된 API

- 회원가입

  ```
  POST /api/auth/login	{ email, password}
  ```

- 로그인

  ```
  POST /api/auth/signup	{ email, companyName, password}
  ```

- 로그인 상태 확인

  ```
  GET /api/auth/check
  ```

- 로그아웃

  ```
  POST /api/auth/logout
  ```

#### Customers

> 설문 응답자 계정과 관련된 API

- 회원가입/ 로그인

  ```
  POST /api/customer/login	{ phoneNumber, gender, age }
  ```

  - 이때 회원가입과 로그인 모두 같은 화면과 API를 사용하고, 백엔드에서 이미 존재하는 계정인지에 따라 분기하여 처리

- 로그인 상태 확인

  ```
  GET /api/customer/check
  ```

- 로그아웃

  ```
  /api/customer/logout
  ```

#### Surveys

> 설문과 관련된 API

- 설문 생성

  ```
  POST /api/surveys	formData
  ```

  - FormData 인스턴스 안에 title, description, video, beginsAt, duration, selectedKiosk 입력값을 담아서 요청
  - 영상 파일 전송을 위해 일반 객체가 아닌, FormData 인스턴스를 생성하여 내용을 담고 요청

- 설문 리스트

  ```
  GET /api/surveys?companyId=${companyId}
  ```

  - query를 통해 companyId를 전달하여 해당 회사의 설문들만을 가져와서 사용

- 설문 디테일

  ```
  GET /api/surveys/:surveyId
  ```

#### SurveyAnswers

> 설문 응답과 관련된 API

- 개별 설문에 대한 응답

  ```
  GET /api/answers/:surveyId
  ```

- 회사별 전체 설문에 대한 응답

  ```
  GET /api/answers?companyId=${companyId}
  ```

  - query를 통해 companyId를 전달

### Middleware

> redux-saga 사용
>
> API 요청과 응답을 중간에서 조작하기 위한 소프트웨어

- createRequestSaga()
  - API request 시, redux store에서 해당 request에 대한 loading 을 변경
  - action type과 action을 params로 받아 request를 보냄
  - request의 결과에 따라 payload에 `response.data` 혹은 `error` 를 담아서 reducer로 넘김
  - module 내 각 파일에서 import 하여 생성
- [takeLatest()](https://redux-saga.js.org/docs/api/)
  - 같은 type의 요청에 대해서 가장 마지막 task만을 수행
- [JavaScript generator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)
  - 비동기 요청 미들웨어 정의에 사용
  - [yield](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield)
    - generator 함수에서 반환할 값을 정의
- createSagaMiddleware()
  - createSagaMiddleware()를 통해 sagaMiddleware를 생성한 후, store 생성 시에 applyMiddleware를 통해 적용
  - 모든 Saga 를 모은 rootSaga 를 sagaMiddleware 를 통해 run

### State Management

> redux 사용
>
> modules 폴더 내에 사용별로 정리

- App에 적용

  - index.js에서 App 컴포넌트를 Provider 컴포넌트로 감싸고, props로 store를 넘겨줘서 적용

    ```jsx
    import React from "react";
    import { Provider } from "react-redux";
    import App from "./App";

    // ...

    const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    // ...

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
    ```

  - 앱의 store에 대한 접근과 변경은 모두 **useSelector**와 **useDispatch**를 통해서

- state 접근

  - [useSelector()](https://react-redux.js.org/api/hooks#useselector) hooks 사용

  - useSelector를 통해 redux store에 접근

  - 예시 (`adminCustomers`)

    ```jsx
    import React from "react";
    import { useSelector } from "react-redux";

    const { adminCustomers, error, loading } = useSelector(
      ({ adminCustomers, loading }) => ({
        adminCustomers: adminCustomers.adminCustomers,
        error: adminCustomers.error,
        loading: loading["adminCustomers/LIST_ADMIN_CUSTOMERS"],
      })
    );
    ```

- state 변경

  - [useDispatch()](https://react-redux.js.org/api/hooks#usedispatch) hooks 사용

  - useDispatch를 통해 module에 정의된 action 생성 함수를 실행

  - 해당 reducer가 생성된 action에 따라 다르게 동작

  - 예시 (`listAdminCustomers`)

    ```jsx
    import React, { useEffect } from "react";
    import { listAdminCustomers } from "../../modules/adminCustomers";
    import { useDispatch } from "react-redux";

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listAdminCustomers());
    }, [dispatch]);
    ```

### Routing

> react-router-dom 사용
>
> 웹 SPA routing

- routing

  - 경로마다 다른 component를 render

- Router

  - [BrowserRouter](https://reactrouter.com/web/api/BrowserRouter)
    - HTML5 history API를 사용
  - [HashRouter](https://reactrouter.com/web/api/HashRouter)
    - URL hash 를 사용
    - 경로 중간에 `#` 가 삽입되는 형태

- Link

  - 보통 `a` 태그와 달리, 페이지 전환을 방지하는 기능 내장
  - 페이지 전환 시, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML history API를 사용해 페이지의 주소만 변경

- withRouter

  - HoC로, 컴포넌트를 withRouter로 감싸주면 Route에 연결된 컴포넌트가 아니어도 history, match 등을 사용할 수 있다

  - 예시

    ```jsx
    import React, { useEffect } from "react";
    import { withRouter } from "react-router-dom";

    const AdminUsersListContainer = ({ history }) => {
      const onRemove = async (userId) => {
        try {
          await adminDeleteUser(userId);
          history.push("/admin/user");
        } catch (e) {
          console.log(e);
        }
      };

      return (
        <AdminUsersList
          loading={loading}
          error={error}
          adminUsers={adminUsers}
          onRemove={onRemove}
        />
      );
    };

    export default withRouter(AdminUsersListContainer);
    ```

### UI/UX

#### 데이터 시각화

> react-billboardjs 사용

- [billboardjs](https://naver.github.io/billboard.js/)
- [react-billboardjs](https://naver.github.io/billboard.js/)
- 데이터 종류에 따라 차트를 선택하여 시각화
  - 대시보드에는 일별 응답 수를 AreaRange 차트로, 나이대별 응답 비율을 Donut 차트로, 일별 남녀 응답 수를 Bar 차트로 시각화
  - 개별 설문화면에서는 Line 차트를 사용
    - 전체 응답자 평균, 남자 응답자 평균, 여자 응답자 평균, 20대 이하 응답자 평균, 30대 이상 응답자 평균에 해당하는 데이터를 시각화
- 그래프 시각화 패키지인 `billboardjs`에 react 환경에서의 rendering을 보완한 `react-billboardjs` 를 사용
  - `BillboardChart` 컴포넌트를 import 해, 데이터, 크기, 타입 등의 정보를 props로 넘겨서 사용

#### 반응형 웹

> media queries 및 useState 사용

- [CSS media queries](https://developer.mozilla.org/ko/docs/Web/CSS/@media)
- [useState](https://ko.reactjs.org/docs/hooks-state.html)
- 웹 페이지 크기 및 모바일 화면에 대한 반응형 화면 구현
- media query를 사용한 `Main` 컴포넌트를 정의한 후, 모든 Viewer 컴포넌트에서 상속받아서 사용
  - `max-width` 값에 따라 `width` 변경
  - grid 를 사용하는 Viewer의 경우, `max-width` 값에 따라 `grid-template` 변경

#### 인앱 가상 키보드

> react-simple-keyboard 사용

- [react-simple-keyboard](https://www.npmjs.com/package/react-simple-keyboard)
- `CustomerAuthForm` 아래에 `Keyboard` 컴포넌트를 import한 후 적용
  - `onChange`, `onKeyPress` 이벤트에 대한 handler를 정의한 후 props로 전달
  - 이때, 상단의 번호 입력 input 은 `readOnly` 로 설정해 입력 방법을 `Keyboard` 컴포넌트로 제한

#### 인앱 영상 재생

> react-player 사용

- [react-player](https://www.npmjs.com/package/react-player)
- 영상을 받는 API를 따로 구축하고, 개별 설문 화면에 들어갈 때 GET 요청
- redux store에 저장된 `videoPath`를 `ReactPlayer`컴포넌트의 url props로 넘겨서 구현

#### 드래그 앤 드랍

> [참고 | Create a drag-and-drop component with react-dropzone](https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/)

- [HTML Drag and Drop API](<[https://developer.mozilla.org/ko/docs/Web/API/HTML_%EB%93%9C%EB%9E%98%EA%B7%B8_%EC%95%A4_%EB%93%9C%EB%A1%AD_API](https://developer.mozilla.org/ko/docs/Web/API/HTML_드래그_앤_드롭_API)>)
- Events about drag & drop
  - onDragOver
  - onDragEnter
  - onDragLeave
  - onDrop
- [dataTransfer](https://developer.mozilla.org/ko/docs/Web/API/DataTransfer)
  - drag & drop 이 발생하는 동안, drag 된 데이터를 잡아두는 객체
  - 구현에서는 `e.dataTransfer.files`를 통해 drag 된 파일에 접근

#### 페이지별 제목

> react-helmet-async 사용

- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- App 컴포넌트를 `HelmetProvider` 로 감싼 후, 각 페이지에서 `Helmet` 컴포넌트 안에 header 내 변경할 요소를 작성

### 어려웠던 구현

#### Rendering before data fetched

- 문제상황

  - Dashboard 페이지와 SurveyDetail 페이지에서 설문 응답 데이터들을 시각화할 때, 데이터가 완전히 불러와지기 전에 rendering 이 시작되어 error 발생

- 해결

  - return with `&&`
    - `&&` 논리연산의 경우 앞에 오는 값이 false 라면 뒤의 값을 판단하지 않고 false 를 return 하기 때문에, error 가 발생하지 않는다
  - [Optional chaining](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    - 참조하는 대상이 null 혹은 undfined 인 경우, error 를 발생시키지 않고 undefined를 return

  ```jsx
  return (
    <DashboardViewerBlock>
      <h2>설문 현황</h2>
      <DashboardItem>
        {!loading && surveysAnswers?.bySurvey && (
          <AreaRangeChart data={bySurveyData} />
        )}
      </DashboardItem>
    </DashboardViewerBlock>
  );
  ```

#### Data unload

- 문제상황

  - Dashboard 페이지에서 로그아웃한 후 다른 계정으로 로그인하는 경우, 데이터 요청에 대한 응답이 완료되기 전까지 이전 회사의 차트가 노출되는 문제 발생

- 해결

  - [useEffect](https://ko.reactjs.org/docs/hooks-effect.html)

    - useEffect의 return문에 data unloading 로직을 넣어 해결

    - useEffect의 return문은, Class 컴포넌트의 componentWillUnmount 와 동일한 역할을 수행
    - data unloading 로직은, state를 initial state로 돌리는 action을 추가해 작성

    ```jsx
    const DashboardViewerContainer = ({ history }) => {
      const dispatch = useDispatch();
      useEffect(() => {
        // ...
       	return () => {
          dispatch(unloadSurveysAnswers());
        };
      }, [history, dispatch]);
    	// ...
    ```

#### POST request with file data

- 문제상황

  - 설문생성 과정에서 기존의 방식으로 객체를 사용하여 POST 요청을 보내는 경우, file data가 백엔드로 전송되지 않는 문제 발생

- 해결

  - [FormData](https://developer.mozilla.org/ko/docs/Web/API/FormData)

    - [multer](https://www.npmjs.com/package/multer)
    - multer를 통해 미디어 파일 전송 가능
    - 이때 multer는 FormData 인스턴스를 통한 POST 요청으로만 정상 커뮤니케이션 가능
    - 기존의 객체 형식이 아닌, FormData 인스턴스를 통한 POST 요청

    ```jsx
    export const writeSurvey = ({
      title,
      description,
      video,
      beginsAt,
      duration,
      selectedKiosk,
    }) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("video", video);
      formData.append("beginsAt", beginsAt);
      formData.append("duration", duration);
      formData.append("selectedKiosk", selectedKiosk);
      return client.post("/api/surveys", formData);
    };
    ```
