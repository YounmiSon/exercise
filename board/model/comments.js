const Sql = require("sequelize");
class Comment extends Sql.Model{
    static init(sequelize){
        return super.init({
            comment_content :{
                type : Sql.STRING(200), 
                allowNull : false, 
            }, 
        },
        {
            sequelize,
            timestamps : true, 
            underscored : true, 
            modelName : "Comment", 
            tableName : "comments", 
            paranoid : true,
            charset : "utf8", 
            collate : "utf8_general_ci",
        }
        )
    }
    static associate(db){
        db.Comment.belongsTo(db.Post, { foreignKey : "post_id", targetKey : "id" });
    }
    static associate(db){
        db.Comment.belongsTo(db.User, { foreignKey : "comment_writer", targetKey : "user_name" });
    }
}

module.exports = Comment;
