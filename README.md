# UNTACTO

## 프로젝트 개요

### 서비스 개요

> 카메라가 탐재된 키오스크를 통해, 광고 영상 시청 중의 사용자 표정 및 감정 데이터를 분석하여 회사에 제공하는 광고 설문 종합 플랫폼

### 개발 동기

> "포스트 코로나 시대", 세상은 코로나로 인해 많은 부분이 변화하게 되었습니다. 되도록이면 서로의 접촉을 피하고, 심지어는 업무조차도 재택으로 하는 직장들이 아주 많아졌습니다. 이런 상황에서 자연스레 길거리에서 하는 설문조사는 기피의 대상이 되었습니다. 아는 사람도 피하는 상황에서 모르는 사람의 접근은 다들 달가워하지 않기 때문입니다.  
> 이런 상황에서, 저희는 서로 대면하지 않으면서, 설문조사를 시행할 수 있는 방법은 없을까? 하는 생각으로 이번 프로젝트를 기획하게 되었습니다. 길거리에 흔하게 보이는 키오스크를 활용하여, 접촉 없이 얼굴 표정만으로 설문조사를 진행하면 좋을 것 같다는 생각으로, 얼굴 표정 인식 API를 활용하여 표정을 분석하고, 성별/나이 등 여러 기준으로 설문자를 나누어 해당 설문 결과를 차트를 통해 편하게 분석할 수 있도록 제공하였습니다. 거기에서 더 나아가, 길거리에서 흔하게 볼 수 있는 키오스크라는 장점을 살려, 광고의 기능을 더해 광고와 설문조사를 겸하는 플랫폼으로서 프로젝트를 개발하였습니다.

### Built With

- [React](https://react-cn.github.io/react/docs/getting-started.html) - The web framework used
- [Node](https://nodejs.org/ko/about/) - The Backend
- [Raspbian](https://www.raspberrypi.org/) - Used to generate RaspberryPi OS

### Authors

:man: [박성우](https://github.com/koco0371)
:boy: [송재훈](https://github.com/samsong94)
:man: [이승진](https://github.com/lsjboy93)
:person_with_blond_hair: [차영부](https://github.com/kennycha)
:woman: [하승민](https://github.com/Seung-minnn)

### Pull & Push Test

- [x] 박성우
- [x] 송재훈
- [x] 이승진
- [x] 차영부
- [x] 하승민

### ERD

[ER Diagram](https://www.erdcloud.com/d/RrMLB7pLCpuBAQxEv)

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

> 차영부 팀원

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

## 백엔드

### 개요

> 백엔드 프로젝트 기능 및 구조 개요

#### 기능 개요

- AWS에 Maria DB와 express.js를 설치하여 백엔드를 구동한다.
- Maria DB를 이용하여 회원정보, 설문정보 등을 DB에 저장할 수 있도록 한다.
- 또한 키오스크와 서버간 설문 광고 및 설문 결과를 송/수신을 할 수 있도록한다.
- 백엔드는 node.js의 Express를 이용하여 서버를 개발하고 pm2를 이용하여 배포한다.
- 프론트엔드를 배포하기 위해 Nginx를 이용한다.

#### SW

|  Name   |          Version           |
| :-----: | :------------------------: |
| Node.js |          v12.18.2          |
| MariaDB | v10.3.22-MariaDB-0+deb10u1 |
|  Nginx  |      v1.14.0(ubuntu)       |
|   pm2   |           v4.4.0           |

#### Packages

| Name         | Purpose             |
| :----------- | :------------------ |
| jsonwebtoken | JSON Web Token(JWT) |
| mime         | Get File type       |
| moment       | Format dates        |
| multer       | Upload files        |
| uuid/v4      | Change file name    |
| bcrypt       | hash passwords      |

#### Installation

1. Clone the repo

```sh
git clone 
```

2. Install npm packages

```sh
$ cd backend/backend-test/
$ npm install
$ npm install moment moment-timezone
$ npm install -g pm2@latest
$ sudo npm install bcrypt
```

3. Input a port

```js
//backend/backend-test/servers/server.js
const port = process.env.PORT || [port number];
```

4. Run

```
start express
$ npm start
- http://localhost:8080
```

```
start pm2
$ pm2 start servers/ecosystem.config.js
- http://localhost:8080

If you want to scale up processes
-  pm2 scale untacto +[size]
```

```
run nginx
$ sudo systemctl start nginx
$ sudo systemctl restart nginx
```

#### Directory

```
.
└── backend
    └── backend_test
        ├── routes
        │   ├── before*.js
        │   ├── adminAddKiosk.js
        │   ├── adminDeleteCustomer.js
        │   ├── adminDeleteSurvey.js
        │   ├── adminDeleteUser.js
        │   ├── adminListCustomer.js
        │   ├── adminListKiosk.js
        │   ├── adminListSurvey.js
        │   ├── adminListUser.js
        │   ├── adminReadSurvey.js
        │   ├── check.js
        │   ├── createSurvey.js
        │   ├── customerCheck.js
        │   ├── customerLogin.js
        │   ├── customerLogout.js
        │   ├── dashboardAnswer.js
        │   ├── index.js
        │   ├── login.js
        │   ├── logout.js
        │   ├── main.js
        │   ├── mysql-db.js
        │   ├── showSurveyList.js
        │   ├── signUp.js
        │   ├── surveyDetail.js
        │   ├── surveyDetailAnswer.js
        │   └── tokenAuth.js
        └── servers
            └── server.js
```

### Routes

#### Admin

> 관리자 페이지에서 사용하는 기능들

**1. adminAddKiosk.js**

```
POST /api/admin/kiosks
- admin 계정에서만 사용 가능한 기능으로, kiosk를 원하는 위치에 추가하는 기능입니다.
```

**2. adminDeleteCustomer.js**

```
DELETE /api/admin/customers/:id
- admin 계정에서만 사용 가능한 기능으로, customer(설문자)를 삭제하는 기능입니다.
id를 url을 통해 넘겨받아 해당 아이디인 customer를 삭제하는 기능입니다.

```

**3. adminDeleteSurvey.js**

```
DELETE /api/admin/surveys/:surveyId
- admin 계정에서만 사용 가능한 기능으로, surveyId를 넘겨받아, 해당 아이디에 해당하는 survey를 삭제하는 기능입니다.
```

**4. adminDeleteUser.js**

```
DELETE /api/admin/users/:id
- admin 계정에서만 사용 가능한 기능으로, userId를 넘겨받아, 해당 아이디에 해당하는 user(회사)를 삭제하는 기능입니다.
```

**5. adminListCustomer.js**

```
GET /api/admin/users
- admin 계정에서만 사용 가능한 기능으로, 현재 customer(설문자)들의 리스트를 확인할 수 있는 기능입니다.
```

**6. adminListKiosk.js**

```
GET /api/admin/kiosks
- admin 계정에서만 사용 가능한 기능으로, 현재 키오스크들이 어떤 위치에 있는지를 확인 가능한 기능입니다.
```

**7. adminListSurvey.js**

```
GET /api/admin/surveys?
- admin에서만 사용 가능한 기능으로, 현재 사이트에서 관리중인 설문조사들의 리스트를 확인할 수 있습니다.
```

**8. adminListUser.js**

```
GET /api/admin/users
- admin에서만 사용 가능한 기능으로, 현재 user(회사)들의 리스트를 확인할 수 있는 기능입니다.
```

#### Auth

> 회사의 홈페이지 이용과 관련된 기능들

**1. signUp.js**

```
POST /api/auth/signup
- user(회사)가 회원가입하는 기능으로, 회사 이름, 이메일 주소, 비밀번호를 입력받아 회원가입을 진행합니다.
회원가입 완료 시, jwt토큰을 발급하여 바로 로그인이 가능하도록 합니다.
```

**2. login.js**

```
GET /api/auth/login
- user(회사)가 로그인 하는 기능으로, jwt(json web token)를 생성하여 쿠키에 담아 프론트로 보내는 기능입니다.
```

**3. logout.js**

```
GET /api/auth/logout
- user(회사)가 로그아웃 하는 기능으로, jwt(json web token)를 파기하는 기능입니다.
```

**4. check.js**

```
GET /api/auth/check
- user(회사)가 로그인 시, 토큰이 유효한지 여부를 확인하는 기능입니다.
```

**5. tokenAuth.js**

```
- 수신한 토큰이 유효한지를 판단하는 함수를 포함하고 있습니다.
```

#### Customer

> 설문 응답자 계정의 홈페이지 이용과 관련된 기능들

**1. customerCheck.js**

```
GET /api/customer/check
- customer(설문자)가 로그인 시, 토큰이 유효한지 여부를 확인하는 기능입니다.
```

**2. customerLogin.js**

```
GET /api/customer/login
- customer(설문자)가 로그인 하는 기능으로, jwt(json web token)를 생성하여 쿠키에 담아 프론트로 보내는 기능입니다.
만약, 입력된 정보가 없는 정보일 시 signUp으로 계정을 생성해줍니다.
설문자가 로그인 하며, 이전에 실시했던 설문조사 응답에 설문자 아이디를 입력하며, 설문자의 포인트를 100포인트 증가합니다.
```

**3. customerLogout.js**

```
GET /api/customer/logout
- customer(설문자)가 로그아웃 하는 기능으로, 토큰을 파기하는 기능입니다.
```

#### Surveys

> 설문을 생성하고 리스트를 확인하는 기능들

**1. createSurvey.js**

```
POST /api/surveys
- 일반 user(회사)가 사용 가능한 기능으로, 설문조사 제목, 광고 영상, 설문조사 설명, 설문조사 시작 기간, 진행 기간, 키오스크 위치를 선택하여 설문조사를 생성할 수 있는 기능입니다. (영상 업로드를 위해 multer 모듈 활용)
```

**2. showSurveyList.js**

```
GET /api/surveys/companyId=${companyId}
- 일반 user(회사)가 사용 가능한 기능으로, user가 추가한 설문조사들의 제목, 설문조사 설명, 작성 시간, 진행 기간, 광고 영상에 대한 내용을 리스트로 확인할 수 있는 기능입니다.

```

**3. surveyDetail.js**

```
GET /api/surveys/:id
- user(회사)가 현재 진행중인 설문조사의 정보를 확인하는 기능으로, 제목, 설문조사 설명, 키오스크 위치, 시작 날짜, 생성 날짜, 종료 날짜를 확인할 수 있습니다.
```

**4. dashboardAnswer.js**

```
GET /api/answers?companyId=${companyId}
- user(회사)의 진행중인 설문조사 전체의 응답을 확인하는 기능으로, 각 설문에 대한 응답 수, 나이대 별 응답 수, 성별에 대한 응답 수를 차트로 확인할 수 있습니다.
```

**5. surveyDetailAnswer.js**

```
GET /api/answers/:id
- user(회사)가 진행중인 설문조사의 응답을 확인하는 기능으로, 여러 기준(성별, 나이)으로 응답을 분류하여 분석 결과를 차트로 보여줍니다.
```

#### etc

**1. downloadFile.js**

```
GET /api/download/:id
- 파일을 다운로드 받을 수 있게 합니다.
```

**2. streamFile.js**

```
GET /api/stream/:id
- 현재 survey에 맞는 동영상을 다운 받을 수 있도록 링크를 제공합니다.
```

### DB

#### user

> user(회사)에 대한 정보를 담고 있는 테이블

| ATTRIBUTE |   TYPE   | primary key | remarks |
| :-------: | :------: | :---------: | ------- |
|  userId   |   INT    |             |         |
| userName  | VARCHAR  |             |         |
| password  | VARCHAR  |             |         |
|   email   | VARCHAR  |      V      |         |
| createdAt | DATETIME |             |         |

#### customer

> customer(설문자)에 대한 정보를 담고 있는 테이블

| ATTRIBUTE  |   TYPE   | primary key | remarks |
| :--------: | :------: | :---------: | ------- |
| customerId |   INT    |      V      |         |
|   point    |   INT    |             |         |
|    age     |   INT    |             |         |
|   gender   | VARCHAR  |             |         |
|  phoneNum  | VARCHAR  |             |         |
| createdAt  | DATETIME |             |         |

#### kiosk

> kiosk에 대한 정보를 담고 있는 테이블

| ATTRIBUTE |  TYPE   | primary key | remarks |
| :-------: | :-----: | :---------: | ------- |
|  kioskId  |   INT   |      V      |         |
| location  | VARCHAR |             |         |

#### survey

> 설문에 대한 테이블

|     ATTRIBUTE      |   TYPE   | primary key | remarks |
| :----------------: | :------: | :---------: | ------- |
|      surveyId      |   INT    |      V      |         |
|       userId       |   INT    |      V      |         |
|      kioskId       |   INT    |             |         |
|       title        | VARCHAR  |             |         |
|       video        | LONGTEXT |             |         |
|     videoPath      | LONGTEXT |             |         |
| description_survey | VARCHAR  |             |         |
|  additionalSurvey  | LONGTEXT |             |         |
|     createdAt      | DATETIME |             |         |
|      beginsAt      | DATETIME |             |         |
|     expiresAt      | DATETIME |             |         |
|     isDownload     |   INT    |             |         |

#### answer

| ATTRIBUTE  |   TYPE   | primary key | remarks |
| :--------: | :------: | :---------: | ------- |
|  surveyId  |   INT    |      V      |         |
|   userId   |   INT    |      V      |         |
| customerId |   INT    |      V      |         |
|  emotions  | LONGTEXT |             |         |
| createdAt  | DATETIME |             |         |
| timeIndex  |   INT    |      V      |         |

### 어려웠던 구현

**박성우**

> 처음으로 Backend를 맡아 진행한 프로젝트였습니다. 이전에는 Backend 쪽을 다룰 기회가 거의 없어, 초보와 같은 상태라고 봐도 무방했는데, 역시 경험이 많이 없어 프로젝트를 진행하며 어려움이 다소 많았습니다. 그중에 가장 기억나는 건 두 가지 정도인데, 먼저 mysql 특유의 병렬적인 함수 처리가 백엔드 작성에 많은 어려움을 주었습니다. 예상과 다르게 흘러가는 함수의 흐름에 다소 당황하기도 했지만, 그런 병렬적인 처리를 어떤 식으로 돌려서 처리해야할 지 설계하면서 백엔드에 대한 이해도나 sql에 대한 이해도가 많이 증가했던 것 같습니다.  
> 다음으로는 RESTful API가 다소 이해하기 난해했는데, 같은 주소를 여러 메소드를 활용하여 다른 기능을 구현한다는 게 조금 어려웠습니다. 하루 꼬박 프론트엔드와 백엔드를 다루는 팀원과 이야기하면서 기능에 맞게 구현할 수 있었습니다.

**송재훈**

> 박성우 팀장과 마찬가지로 mysql을 연결하여 데이터를 가져오고 처리하는 과정과 RESTful API에서 어려움을 겪었습니다.  
> 첫번째 어려운점은 mysql 함수 사용이었습니다. mysql의 데이터를 가져온 후 프론트단으로 state에 맞추어 데이터를 넘겨주어야 했습니다. 두 개의 query 함수를 사용하여 DB에서 데이터를 가져오고 동시에 처리하려고 하면 query 함수의 딜레이 문제로 빈값을 참조하는 문제가 발생하였습니다. 위와 같은 문제가 query의 같은 depth에서 데이터를 처리해야 한다는 점을 발견하였고 이를 해결하기 위해 query 함수 내에서 데이터를 처리하고 프론트 단으로 데이터를 전송하였더니 해결되었습니다.  
> 두번째 어려운 점은 RESTful API의 사용이었습니다. get, post와 같은 메서들이 어떻게 전달되는지 몰라 시간을 내어 프론트단의 코드를 하나하나 확인하였습니다. 이후 api가 어떻게 사용되고 무슨 데이터를 주고받는지 프론트를 담당하는 팀원에게 확인하여 구현하는 방식으로 진행하여 어려움을 해결할 수 있었습니다.

## Embedded

### 개요

#### 구현 개요

- 오픈소스 하드웨어인 라즈베리파이와 아두이노를 사용해 감정 분석이 가능한 키오스크를 제작했습니다.
- 키오스크는 카메라, 초음파 등의 센서를 통해 손(hand)과 함께 여러 신체 부위를 사용해 의견을 표출할 수 있도록 구현했습니다.
- 언택트(Untact), 즉 비대면이 주목받는 현재, 이와 같은 투표 기능이 가능한 키오스크는 기업, 학교, 개인 등
  다양한 분야의 조직에게 적은 자원 투자로 신뢰할 수 있는 분석 결과물을 제공해줄 것이라 기대할 수 있습니다.

#### 기능개요

- Qt를 이용한 화면 구성
- OpenCV를 이용해서 카메라 사용 및 Microsoft Azure의 얼굴 표정 인식 API 활용해 감정 분석
- 적외선 센서를 이용해 동작을 인식하여 키오스크 터치 최소화
- 감정 분석 결과를 DB에 보내고 동영상과 같은 데이터를 DB에서 받으면서 통신

### Settings

#### HW

|     Name     |              Info               |
| :----------: | :-----------------------------: |
| Raspberry Pi | Raspberry Pi 3 Model B Rev 1.2  |
|   Arduino    |               Uno               |
| LCD Monitor  | 7inch, Resolution : 1920 x 1080 |

#### SW

|    Name    | Version                                                                                  |
| :--------: | :--------------------------------------------------------------------------------------- |
|  Raspbian  | Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux    |
|     QT     | 5.14.1                                                                                   |
| QT Creator | 4.11.1                                                                                   |
|   MYSQL    | Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2 |
|   OpenCV   | 4.1.0                                                                                    |
|   Python   | 3.7.3                                                                                    |

#### Check-Version

```
$ uname -a
    Linux raspberrypi 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l GNU/Linux

$ cat /proc/device-tree/model
    Raspberry Pi 3 Model B Rev 1.2

$ mysql --version
    mysql  Ver 15.1 Distrib 10.1.45-MariaDB, for debian-linux-gnueabihf (armv7l) using readline 5.2
```

#### Require Module

```
sudo apt-get install update
sudo apt-get install upgrade
sudo apt-get install cmake
sudo apt-get install qtmultimedia5-dev libqt5multimediawidgets5 libqt5multimedia5-plugins libqt5multimedia5
sudo apt-get install python3-pyqt5
sudo apt-get install qttools5-dev-tools
sudo apt-get install build-essestial cmake pkg-config
sudo apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng-dev
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
sudo apt-get install libfontconfig1-dev libcairo2-dev
sudo apt-get install libgdk-pixbuf2.0-dev libpango1.0-dev
sudo apt-get install libgtk2.0-dev libgtk-3-dev
sudo apt-get install libatlas-base-dev gfortran
sudo apt-get install libhdf5-dev libhdf5-serial-dev libhdf5-103
sudo apt-get install libqtgui4 libqtwebkit4 libqt4-test python3-pyqt5
sudo apt-get install qt5-default qtbase5-dev qtdeclarative5-dev qt5-qmake qtcreator libqt5gui5  qtscript5-dev qtmultimedia5-dev qtquickcontrols2-5-dev libqt5network5 cmake build-essential
sudo apt-get install python3-pyqt5 qttools5-dev-tools python3-pyqt5.qtsql libqt5sql5-mysql
sudo apt-get install python3-pyqt5.qtmultimedia
sudo apt-get install python3-pyqt5.qtsql
pip3 install imutils
pip3 uninstall opencv-python
pip3 install opencv-contrib-python==4.1.0.25


sudo pip3 install firebase-admin
```

#### Submit Data

```
	age gender contact


	time(sec) no_look anger contempt disgust fear happiness neutral sadness surprise

```

#### Pin Setting

> Raspberry Pi

| Connection |  Name  | Pin | Pin |  Name  | Connection |
| :--------: | :----: | :-: | :-: | :----: | :--------: |
|            |  3v3   |  1  |  2  |   5v   |     ●      |
| Arduino A4 | GPIO2  |  3  |  4  |   5V   |            |
| Arudino A5 | GPIO3  |  5  |  6  |  GND   |            |
|            | GPIO4  |  7  |  8  | GPIO14 |            |
|     ●      |  GND   |  9  | 10  | GPIO15 |            |
|            | GPIO17 | 11  | 12  | GPIO18 |            |
|            | GPIO27 | 13  | 14  |  GND   |            |
|            | GPIO22 | 15  | 16  | GPIO23 |            |
|            |  3v3   | 17  | 18  | GPIO24 |            |
|            | GPIO10 | 19  | 20  |  GND   |            |
|            | GPIO9  | 21  | 22  | GPIO25 |            |
|            | GPIO11 | 23  | 24  | GPIO8  |            |
|            |  GND   | 25  | 26  | GPIO7  |            |
|            | ID_SD  | 27  | 28  | ID_SC  |            |
|            | GPIO5  | 29  | 30  |  GND   |            |
|            | GPIO6  | 31  | 32  | GPIO12 |            |
|            | GPIO13 | 33  | 34  |  GND   |            |
|            | GPIO19 | 35  | 36  | GPIO16 |            |
|            | GPIO26 | 37  | 38  | GPIO20 |            |
|            |  GND   | 39  | 40  | GPIO21 |            |

> Arduino

| Connection |  Pin  | Pin | Connection |
| :--------: | :---: | :-: | :--------: |
|            | IOREF | D13 |            |
|            | RESET | D12 |            |
|            | 3.3v  | D11 |            |
|     ●      |  5v   | D10 |            |
|     ●      |  GND  | D9  |            |
|            |  GND  | D8  |            |
|            |  Vin  | D7  |            |
|            |  A0   | D6  | DS1302 DAT |
|            |  A1   | D5  | DS1302 CLK |
|            |  A2   | D4  | DS1302 RST |
|            |  A3   | D3  | DHT11 Data |
|  Pi GPIO2  |  A4   | D2  |            |
|  Pi GPIO3  |  A5   | D1  |            |

#### Auth

```
/home/pi/KIOSK/Auth/ServiceAccountKey.json
```

### Pages

#### 광고 재생

    키오스크에 있는 모든 광고 영상 파일 반복 재생

#### 카메라 가이드

    얼굴을 카메라에 고정시킬 수 있도록 카메라 촬영 화면을 보여줌

#### 선택 광고 재생

    선택한 광고를 재생하면서 동시에 카메라를 통해 얼굴 표정 수집

#### 개인정보 수집

    사용자 보상을 위해 사용자의 개인정보를 받음

### 어려웠던 구현

#### Real-Time Data Analysis

- 문제상황
  - 표정을 인식해 주는 Azure API 에서 로컬에 있는 파일을 확인할 수 없음
- 해결
  - 웹서버인 파이어베이스(Firebase)를 사용해 실시간으로 DB에 사진을 업로드해 얼굴 인식 가능하게 함
  - [FireBase](https://firebase.google.com/docs/reference?hl=ko)

#### Auto Play

- 문제상황
  - 카메라 리소스 문제로 카메라를 사용하는 페이지가 돌아오면 중지됨
- 해결
  - 페이지 단위로 카메라를 릴리즈해서 페이지가 넘어가도 카메라 리소스를 계속해서 사용할 수 있도록 함

### Unresolved Issues

#### No Sound

> 영상 재생시 디스플레이에서 소리가 재생되지 않는 에러를 발견
> mp4(Window용)에서 h264(PyQT용)로 전환시, 영상과 소리를 따로 추출되는데 이 둘이 연동되지 않음
> PyQT에서 사용하는 재생기인 Qmediaplayer 문제로 판단하였고,
> 해결방안으로는 QT 동영상 라이브러리인 QtAV를 사용하면 제한된 재생파일로 인한 문제를 해결할 것이라 판단
> [QtAV](https://github.com/wang-bin/QtAV)

