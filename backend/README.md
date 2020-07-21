# Backend

## Summary
```
Maria DB를 이용하여 회원정보, 설문정보 등을 DB에 저장할 수 있도록 한다.    
또한 키오스크와 서버간 설문 광고 및 설문 결과를 송/수신을 할 수 있도록한다.    
node.js의 Express를 이용하여 서버를 구동한다.
```

## Tool

### HW

|  Name   | Version                    |
| :-----: | :------------------------: |
| Node.js | v12.18.2                   |
| MariaDB | v10.3.22-MariaDB-0+deb10u1 |

## Check-Version

```
$ node -v
    v12.18.2

$ sudo mysql -uroot -p
MariaDB [(none)]> select version();
    +---------------------------+
    | version()                 |
    +---------------------------+
    | 10.3.22-MariaDB-0+deb10u1 |
    +---------------------------+


```

## description

```
Maria DB
 - https://mariadb.com/kb/ko/mariadb-korean-mariadb/
Maria DB는 MySQL과 소스코드를 같이 사용하므로 사용방법과 구조가 동일하다.
또한 MySQL에 있는 기능을 모두 구현하면서도 성능적으로 우위에 있다.

Maria DB의 주요 용도
 - Web 어클리케이션
 - IoT 애플리케이션
 - GIS(Geographic Information System)

Express
 - https://expressjs.com/
 
Express에서 제공되는 기능
 - 라우팅
 - 미들웨어
 - 에러처리
 - 디버깅

```

#### run

```
npm install
npm start

- http://localhost:3001
```

#### routes

```
GET     http://localhost:3001/
GET     http://localhost:3001/base
GET     http://localhost:3001/base/auth/users/:id

POST    http://localhost:3001/base
PUT     http://localhost:3001/base
DELETE  http://localhost:3001/base
```