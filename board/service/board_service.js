const { User } = require("../model");
const Post = require("../model/posts");

module.exports.write = async function(post_writer, post_title, post_content){
    const user = await User.findOne({
        where : { user_name : post_writer }    
    })
    console.log(user);
    return await Post.create({
        post_writer : user.dataValues.id,
        post_title,
        post_content
    })
    .then((e)=>{
        if(!!e) return true
        else return false
    })
    .catch((err)=>{
        console.error(err);
        return false
    })
}
