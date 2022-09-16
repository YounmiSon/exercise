const User = require("../model/users");

module.exports.login = async function (user_name) {
  return await User.findOne({
    where: { user_name },
  })
    .then((e) => {
      if (e) return true;
      else return false;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

module.exports.join = async function (user_name) {
    return await User.create({
    user_name
  });
};
