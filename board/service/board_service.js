const { User } = require("../model");
const Post = require("../model/posts");
const { post } = require("../routers/user_router");

module.exports.board = async function(res){
    return await Post.findAll()
    .then( (result) =>{
      res.send(result)
    })
    .err((err)=>{
        console.log(err);
    })
}

module.exports.write = async function(post_writer, post_title, post_content){
    return await Post.create({
        post_writer,
        post_title,
        post_content
    })
    .then((e)=>{
        // e의 값이 있으면 return true
        if(!!e) return true
        else return false
    })
    .catch((err)=>{
        console.error(err);
        return false
    })
}
