## Untacto

> "포스트 코로나 시대", 세상은 코로나로 인해 많은 부분이 변화하게 되었습니다. 되도록이면 서로의 접촉을 피하고, 심지어는 업무조차도 재택으로 하는 직장들이 아주 많아졌습니다. 이런 상황에서 자연스레 길거리에서 하는 설문조사는 기피의 대상이 되었습니다. 아는 사람도 피하는 상황에서 모르는 사람의 접근은 다들 달가워하지 않기 때문입니다.  
> 이런 상황에서, 저희는 서로 대면하지 않으면서, 설문조사를 시행할 수 있는 방법은 없을까? 하는 생각으로 이번 프로젝트를 기획하게 되었습니다. 길거리에 흔하게 보이는 키오스크를 활용하여, 접촉 없이 얼굴 표정만으로 설문조사를 진행하면 좋을 것 같다는 생각으로, 얼굴 표정 인식 API를 활용하여 표정을 분석하고, 성별/나이 등 여러 기준으로 설문자를 나누어 해당 설문 결과를 차트를 통해 편하게 분석할 수 있도록 제공하였습니다. 거기에서 더 나아가, 길거리에서 흔하게 볼 수 있는 키오스크라는 장점을 살려, 광고의 기능을 더해 광고와 설문조사를 겸하는 플랫폼으로서 프로젝트를 개발하였습니다.

## 백엔드

### Proejct Surmmary

> AWS에 Maria DB와 express.js를 설치하여 백엔드를 구동한다.  
> Maria DB를 이용하여 회원정보, 설문정보 등을 DB에 저장할 수 있도록 한다.  
> 또한 키오스크와 서버간 설문 광고 및 설문 결과를 송/수신을 할 수 있도록한다.  
> 백엔드는 node.js의 Express를 이용하여 서버를 개발하고 pm2를 이용하여 배포한다.  
> 프론트엔드를 배포하기 위해 Nginx를 이용한다.

### SW

|  Name   |          Version           |
| :-----: | :------------------------: |
| Node.js |          v12.18.2          |
| MariaDB | v10.3.22-MariaDB-0+deb10u1 |
|  Nginx  |      v1.14.0(ubuntu)       |
|   pm2   |           v4.4.0           |

### Packages

| Name         | Purpose             |
| :----------- | :------------------ |
| jsonwebtoken | JSON Web Token(JWT) |
| mime         | Get File type       |
| moment       | Format dates        |
| multer       | Upload files        |
| uuid/v4      | Change file name    |
| bcrypt       | hash passwords      |

### Installation

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

### Directory

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

### Routes description

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

**1. user**

> user(회사)에 대한 정보를 담고 있는 테이블

| ATTRIBUTE |   TYPE   | primary key | remarks |
| :-------: | :------: | :---------: | ------- |
|  userId   |   INT    |             |         |
| userName  | VARCHAR  |             |         |
| password  | VARCHAR  |             |         |
|   email   | VARCHAR  |      V      |         |
| createdAt | DATETIME |             |         |

**2. customer**

> customer(설문자)에 대한 정보를 담고 있는 테이블

| ATTRIBUTE  |   TYPE   | primary key | remarks |
| :--------: | :------: | :---------: | ------- |
| customerId |   INT    |      V      |         |
|   point    |   INT    |             |         |
|    age     |   INT    |             |         |
|   gender   | VARCHAR  |             |         |
|  phoneNum  | VARCHAR  |             |         |
| createdAt  | DATETIME |             |         |

**3. kiosk**

> kiosk에 대한 정보를 담고 있는 테이블

| ATTRIBUTE |  TYPE   | primary key | remarks |
| :-------: | :-----: | :---------: | ------- |
|  kioskId  |   INT   |      V      |         |
| location  | VARCHAR |             |         |

**4. survey**

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

**5. answer**

| ATTRIBUTE  |   TYPE   | primary key | remarks |
| :--------: | :------: | :---------: | ------- |
|  surveyId  |   INT    |      V      |         |
|   userId   |   INT    |      V      |         |
| customerId |   INT    |      V      |         |
|  emotions  | LONGTEXT |             |         |
| createdAt  | DATETIME |             |         |
| timeIndex  |   INT    |      V      |         |

### Difficulties

**박성우**

> 처음으로 Backend를 맡아 진행한 프로젝트였습니다. 이전에는 Backend 쪽을 다룰 기회가 거의 없어, 초보와 같은 상태라고 봐도 무방했는데, 역시 경험이 많이 없어 프로젝트를 진행하며 어려움이 다소 많았습니다. 그중에 가장 기억나는 건 두 가지 정도인데, 먼저 mysql 특유의 병렬적인 함수 처리가 백엔드 작성에 많은 어려움을 주었습니다. 예상과 다르게 흘러가는 함수의 흐름에 다소 당황하기도 했지만, 그런 병렬적인 처리를 어떤 식으로 돌려서 처리해야할 지 설계하면서 백엔드에 대한 이해도나 sql에 대한 이해도가 많이 증가했던 것 같습니다.  
> 다음으로는 RESTful API가 다소 이해하기 난해했는데, 같은 주소를 여러 메소드를 활용하여 다른 기능을 구현한다는 게 조금 어려웠습니다. 하루 꼬박 프론트엔드와 백엔드를 다루는 팀원과 이야기하면서 기능에 맞게 구현할 수 있었습니다.

**송재훈**

> 박성우 팀장과 마찬가지로 mysql을 연결하여 데이터를 가져오고 처리하는 과정과 RESTful API에서 어려움을 겪었습니다.  
> 첫번째 어려운점은 mysql 함수 사용이었습니다. mysql의 데이터를 가져온 후 프론트단으로 state에 맞추어 데이터를 넘겨주어야 했습니다. 두 개의 query 함수를 사용하여 DB에서 데이터를 가져오고 동시에 처리하려고 하면 query 함수의 딜레이 문제로 빈값을 참조하는 문제가 발생하였습니다. 위와 같은 문제가 query의 같은 depth에서 데이터를 처리해야 한다는 점을 발견하였고 이를 해결하기 위해 query 함수 내에서 데이터를 처리하고 프론트 단으로 데이터를 전송하였더니 해결되었습니다.  
> 두번째 어려운 점은 RESTful API의 사용이었습니다. get, post와 같은 메서들이 어떻게 전달되는지 몰라 시간을 내어 프론트단의 코드를 하나하나 확인하였습니다. 이후 api가 어떻게 사용되고 무슨 데이터를 주고받는지 프론트를 담당하는 팀원에게 확인하여 구현하는 방식으로 진행하여 어려움을 해결할 수 있었습니다.

### License

