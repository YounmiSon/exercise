"use strict";

class UserStorage{
    static #users = {
        id :["apple", "banana", "melon"],
        psword:["1234","5678","9000"],
        name : ["김만두", "손만두", "냠만두"],
    };
    
    static getUsers(...fields){
         const users = this.#users;
         const newUsers = fields.reduce((newUsers, field)=>{ // newUsers에는 fields라는 배열의 초기값이 들어가고 다음 변수는 field에 들어옴
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
         return newUsers;
    }
}

module.exports = UserStorage;