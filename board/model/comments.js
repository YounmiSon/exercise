const Sql = require("sequelize");
class Comment extends Sql.Model{
    static init(sequelize){
        return super.init({
            comment_id:{
                type:Sql.INTEGER,
                primaryKey: true,
                allowNull : false, 
                autoIncrement:true,
            },
            comment_content :{
                type : Sql.STRING(200), 
                allowNull : false, 
            }, 
            comment_writer :{
                type : Sql.STRING(20), 
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
        db.Comment.belongsTo(db.Post, { foreignKey : "post_id", targetKey : "post_id" });
    }
}

module.exports = Comment;
