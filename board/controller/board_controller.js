const boardService = require("../service/board_service")


module.exports.boardPage = (req, res)=>{
    res.render("board")
}

module.exports.postList = async(req, res)=>{
    try {
        const post_writer = req.session.user_name
        const { post_title, post_content } = req.body;
        const showPost = await boardService.board(post_id, post_title, post_writer, created_at)
    } catch (error) {
        console.log("postList",error);
    }
}

module.exports.writePage = (req, res)=>{
    res.render("write")
}

module.exports.writePost = async(req, res)=>{
    try {
        const post_writer = req.session.user_name
        const { post_title, post_content } = req.body;
        const isPost = await boardService.write(post_writer, post_title, post_content)
        if(isPost){
            res.redirect("/board")
            
        } else{
            res.redirect("/user/login")
        }
    } catch (error) {
        console.log("writePost",error);
    }
}