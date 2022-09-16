const dot = require("dotenv").config();

const config = {
  dev: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "board",
    dialect: "mysql",
    timezone:"+09:00",
    dialectOptions: { // dialectOptions 파라미터로 옵션을 직접 dialect 라이브러리로 건네줄수 있다.
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: true,
    },
  },
};

module.exports = config;
