"use strict";

// 모듈, express 사용한 라우팅
const express = require('express');
const bodyParser = require("body-parser");
// app 변수 안에 express 실행
const app = express();
// 라우팅, require로 불러올거니까 폴더를 상대적으로 명시해줘야함
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// 화면을 관리할 파일이 있는 폴더 이름을 두번째 파라미터로 넘겨준다
// views폴더 안에 생성될 html코드들을 어떤 엔진으로 해석할지 정해줄 수 있다
// view engine으로 ejs를 사용할거임
app.set("view engine", "ejs");
// use: 미들웨어를 등록해주는 메서드
app.use(express.static(`${__dirname}/src/public`) )// __dirname은 현재 app.js파일이 있는 위치를 반환함
// 따라서__dirname안에 있는 src안에 있는 public의 정적(static) 경로를 추가하겠다는 의미

//bodyparser를 사용할 대 필요한 미들웨어 등록
app.use(bodyParser.json()); // json데이터를 파싱할 수 있도록
app.use(bodyParser.urlencoded({extended : true})); // url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", home); // 루트 경로로 들어오면 home으로 보내줄거임, 위에서 home 설정
// www.js로 바꾸기
module.exports = app;

