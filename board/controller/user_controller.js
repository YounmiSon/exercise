const userService = require("../service/user_service");

module.exports.loginView = (req, res) => {
  res.render("login");
};

module.exports.joinPage = (req, res) => {
  res.render("join");
};
module.exports.registerUser = async (req, res)=>{
    const user_name = req.body.user_name;
    const isJoin = await userService.join(user_name)
    if(isJoin){
        res.redirect("/user/login")
    } else{
        res.redirect("/user/join")
    }
}

module.exports.userLogin = async (req, res) => {
  const user_name = req.body.user_name;
  const isLogin = await userService.login(user_name)

  if(isLogin){
      req.session.user_name = user_name;
      res.render("board");
  } else{
      res.redirect("/user/login");
  }
};
