const Sql = require("sequelize");
class Post extends Sql.Model{
    static init(sequelize){
        return super.init({
            id:{
                primaryKey:true,
                type:Sql.INTEGER,
                autoIncrement:true
            },
            post_title :{
                type : Sql.STRING(45), 
                allowNull : false, 
            }, 
            post_content :{
                type : Sql.STRING(200), 
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
        db.Post.belongsTo(db.User, { foreignKey : "post_writer", targetKey : "id" });
    }
    static associate(db){
        db.Post.hasMany(db.Comment, { foreignKey : "post_id", sourceKey : "id" });
    }
}

module.exports = Post;
