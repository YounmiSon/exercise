const Sql = require('sequelize');

const config = require('../config/config');
const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');

const sequelize = new Sql(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;

User.init(sequelize);
Post.init(sequelize)
Comment.init(sequelize)

User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;