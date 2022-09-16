const express = require("express")
const router = express.Router();
const boardController = require("../controller/board_controller")

router.get('/',boardController.postList)
router.get('/write', boardController.writePage)
router.post('/write', boardController.writePost)

module.exports = router;
