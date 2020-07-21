### Mention

    현재 진행중인 프로젝트 입니다.

# Frontend

## Summary

```
투표를 통해 얻은 감정 데이터를 분석한 서비스를 유저에게 제공하는 웹 사이트.
React를 기반으로 개발
```

## Tool

### SW

|    Name    | Version                                                                                  |
| :--------: | :--------------------------------------------------------------------------------------- |
|   React    | ...
|   node.js  | v.12.18.2                                                                                   |

## Routes

### Auth

```
Company
id, companyName, password, createdAt, surveys, contacts
```

```
POST 	/singup 	body: { companyName, password, passwordConfirm }
=> 회원가입
POST 	/login		body: { companyName, password }
=> 로그인
POST 	/logout
=> 로그아웃
```

### Surveys

```
Survey
id, title, location, video, description, company, createdAt, answers
```

```
GET		/surveys	query: { ?company, ?createdAt, ?location }
=> 설문 리스트(필터)
POST	/surveys	body: { title, location, video, description }
=> 설문 생성

GET		/surveys/:id		
=> 설문 조회
PATCH 	/surveys/:id
=> 설문 수정
DELETE 	/surveys/:id
=> 설문 삭제
```

### Contacts

```
Contact
id, title, content, createdAt, company
```

```
GET		/contacts
=> 건의 리스트
POST 	/contacts		body: { title, content }
=> 건의 생성

GET		/contacts/:id
=> 건의 조회
PATCH	/contacts/:id	body: { title, content }
=> 건의 수정
DELETE 	/contacts/:id
=> 건의 삭제
```

# Usage

```

```

## Submit Data
```
[Admin Page] (관리자 계정으로 로그인 시)

* 회원(관리자) 정보
	* id pwd

* 회사 정보 CRUD
	* 회사명 사업부 유저등록일 광고명

* 광고 정보 CRUD
	* 광고명 광고시작일 광고종료일 단가 현재설문자수 연결키오스크갯수

* 키오스크 정보 CRUD
	* 키오스크명 상태표시 위치 당일총설문횟수 등록된광고수

* 설문자 정보 CRUD
	* 전화번호 나이 성별 총설문응답횟수 총상품교환수    
```


# License

```

```

