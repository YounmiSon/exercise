const Sql = require("sequelize");
class Post extends Sql.Model{
    static init(sequelize){
        return super.init({
            post_id:{
                type:Sql.INTEGER,
                primaryKey: true,
                allowNull : false, 
                autoIncrement:true,
                unique : true, 
            },
            post_title :{
                type : Sql.STRING(45), 
                allowNull : false, 
            }, 
            post_content :{
                type : Sql.STRING(200), 
                allowNull : false, 
            }, 
            post_writer :{
                type : Sql.STRING(20), 
                allowNull : false, 
            }, 
        },
        {
            sequelize,
            timestamps : true, 
            underscored : true, 
            modelName : "Post", 
            tableName : "posts", 
            paranoid : true,
            charset : "utf8", 
            collate : "utf8_general_ci",
        }
        )
    }
    static associate(db){
        db.Post.belongsTo(db.User, { foreignKey : "user_id", targetKey : "user_id" });
    }
    static associate(db){
        db.Post.hasMany(db.Comment, { foreignKey : "post_id", sourceKey : "post_id" });
    }
}

module.exports = Post;
