"use strict";

const UserStorage = require('../../models/UserStorage')
const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res)=>{
        res.render("home/login");
    }
    };


const process ={
    login : (req, res)=>{
       const id = req.body.id,
       psword = req.body.psword;
    
    console.log(UserStorage.getUsers("id","psword")); // class 자체에서 users에 접근하려면 static을 이용해서 접근해야 함

    const response ={};
    if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.psword[idx] === psword){
            response.sucess = true;
            return res.json();
        }
    }
    response.sucess = false;
    response.msg = "로그인에 실패하였습니다";
    return res.json();
    },
};

module.exports = {
    output,
    process,
};

//21강 부터 듣기
