const boardService = require("../service/board_service")


module.exports.postList = (req, res)=>{
    res.render("board")
}

module.exports.writePage = (req, res)=>{
    res.render("write")
}

module.exports.writePost = async(req, res)=>{
    try {
        const username = req.session.user_name
        const { post_title, post_content } = req.body;
        const isPost = await boardService.write(username, post_title, post_content)
        if(isPost){
            res.redirect("/board")
            
        } else{
            res.redirect("/user/login")
        }
    } catch (error) {
        console.log("writePost",error);
    }

}