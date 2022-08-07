 "use strict";

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        psword: psword.value,
    }

    // console.log(req); //{id: 'uiuiui', psword: '1234'}
    // console.log(JSON.stringify(req)); //{"id":"uiuiui","psword":"1234"} ""로 감싸져있다

    // 어떤 경로에서 주고 받을지 결정해야함
    fetch("/login", {
        method: "POST",
        // JSON 데이터라고 알려줘야 함 -> header 사용
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req) // body로 데이터를 전달하기 때문에 ctrl함수에서도 
        // req.body를 이용해 요청해서 접근해줘야 하고, 바디를 잘 parsing 해오기 위해 body-parser모듈이 필요하다
    })
    .then((res) => res.json())
    .then((res) =>{
        if(res.sucess){
            location.href = "/"
        } else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(("로그인 중 에러 발생"));
    })
};