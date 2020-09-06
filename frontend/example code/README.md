# Responsive SPA

## 1. 레이아웃

### 1.1 스켈레톤 프로젝트의 레이아웃 UI 구현

- Header, Footer, Layout 컴포넌트 생성 후, Layout에 import 하여 사용

### 1.2 레이아웃 내용 구성

- Header
  - 로고, 메뉴, 로그인 배치
  - 메뉴는 `Link` 로 구성하여 클릭 시 `Route`를 통해 메뉴별 다른 페이지를 render
  - 전체 페이지 상단에 `position: fixed` 로 고정
- Footer
  - 개발자 정보, 메뉴, SSAFY 정보 배치
  - 메뉴는 `Link` 로 구성하여 클릭 시 `Route`를 통해 메뉴별 다른 페이지를 render
- 메인 화면 가운데 정렬

## 2. 메인 화면

### 2.1 버튼 및 메뉴에 주요 이벤트 기능 구현

- 그리드 아이템 이미지 및 버튼들에 `onClick` 추가
  - 이미지 클릭 시 설문 화면 모달 생성
  - 버튼들 클릭 시 alert 생성

### 2.2 실시간 설문조사 플랫폼 메인 페이지 UI 구현

- 그리드 아이템에 이미지 부여
  - `object-fit: cover;` 를 통해 크기 조절

## 3. 카테고리

### 3.1 카테고리 기능 구현

- `useState` 를 통해 category 관리
- tabs의 item 을 클릭하면 category 변경
- category 변경에 따라 Panel 내용 변경
- `overflow: scroll;` 을 통해 스크롤 추가

### 3.2 카테고리 사진, 텍스트 구성

- `background-image` 를 통해 사진 추가
- `:hover` 를 통해 애니메이션 추가

## 4. 보조 화면

### 4.1 개인정보처리약관 페이지 UI 구현

### 4.2 개발자 소개 페이지 UI 구현

### 4.3 Contact US 페이지 UI 구현

## 5. Drawer

### 5.1 Drawer UI 구현

- Drawer 컴포넌트 생성 후 Layout 에서 import 하여 사용
- 모바일 화면 햄버거 버튼 클릭 시, Drawer 노출
- `position: fixed;` 로 좌측 고정

### 5.2 Drawer 메뉴 구현

- Header 의 내용을 Drawer 내에 동일하게 Link로 구성

### 5.3 Drawer 메뉴 클릭 시, 각 페이지로 이동 구현

## 6. 반응형 웹

### 6.1 세밀한 반응형 UI 구현

- `@media` 를 통해 스크린 너비에 따른 반응형 UI 구현
  - `display: none;` 을 활용해 Header 변경
  - `margin` 조정

### 6.2 모바일 사이즈에서 클릭 시, 메뉴 사이드 바 노출

## 7. 메인 화면

### 7.1 회원 가입 UI 구현

- `@material-ui/core` 활용

### 7.2 회원 로그인 UI 구현

- `@material-ui/core` 활용

## 8. 프로필

### 8.1 유저 정보 변경 UI 구현

- modal 창으로 form을 보여주는 방식으로 구현

### 8.2 password 변경 UI 구현

## 9. 설문지 생성

### 9.1 설문지 만들기 UI 구현

- 설문지 제목, 설명, 카테고리 등을 form으로 구현

### 9.2 이미지 업로드 UI 구현

- file type input과 label을 활용해 이미지 업로드 UI 구현

## 10. 설문조사

### 10.1 설문조사 UI 구현하기

- 메인화면 그리드 이미지 클릭 시 설문조사 모달창 생성
- checkbox input을 활용

### 10.2 설문조사 결과 UI 구현하기

## Todo

- props를 통한 state관리의 불편함을 크게 느꼈고, redux와 context api & react hooks 를 통해 전역 state 관리를 할 수 있도록 공부할 것





