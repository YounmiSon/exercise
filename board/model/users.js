const Sql = require("sequelize");
class User extends Sql.Model{
    static init(sequelize){
        return super.init({
            user_id:{
                type:Sql.INTEGER,
                primaryKey: true,
                allowNull : false, 
                autoIncrement:true,
            },
            user_name :{
                type : Sql.STRING(20), 
                allowNull : false, 
                unique : true, 
            }, 
        },
        {
            sequelize,
            timestamps : true, 
            underscored : true, 
            modelName : "User", 
            tableName : "users", 
            paranoid : false,
            charset : "utf8", 
            collate : "utf8_general_ci",
        }
        )
    }
    static associate(db){
        db.User.hasMany(db.Post, { foreignKey : "user_id", sourceKey : "user_id" });
    }
}

module.exports = User;