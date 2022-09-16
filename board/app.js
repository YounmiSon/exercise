const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const path = require("path")
const ejs = require("ejs");
const { sequelize, User, Post, Comment } = require("./model")
const app = express();
const userRouter = require("./routers/user_router")
const boardRouter = require("./routers/board_router")
const server = app.listen(3001, () => {
  console.log(`http://localhost:3001`);
});

app.set("views", path.join(__dirname, "view"))
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(express.urlencoded({ extended : false }))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(__dirname));
app.use(
    session({
        secret : process.env.SESSION_KEY, 
        resave: false, 
        saveUninitialized : true,
    })
)

sequelize
.sync({ force : false })
.then(()=>{
  console.log("DB연결 성공");
})
.catch((err)=>{
  console.log(err);
})

app.use('/user', userRouter)
app.use('/board', boardRouter)

