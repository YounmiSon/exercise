// 문법을 준수하게다고 명시해주는 것이 좋다
"use strict";
// app은 index.js에 없으므로 
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
// router는 도메인으로 들어왔을 때 클라이언트의 요청을 연결해주는 부분
// 실제 요청에 해당하는 기능을 수행하는 건 콜백 부분임 => 이 부분이 controller이고 
// home.ctrl.js에다가 따로 빼서 모듈화 해줄거임
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
// 로그인 데이터를 받아 '처리'해주는 기능을 하므로 process라는 객체를 만들어주기로 한다
router.post("/login", ctrl.process.login);

// router를 외부에서 사용할 수 있도록 해줌
module.exports = router;
