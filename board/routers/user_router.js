const express = require("express")
const router = express.Router();
const userController = require("../controller/user_controller")


router.get('/login', userController.loginView)
router.get('/join', userController.joinPage)
router.post('/join', userController.registerUser)
router.post('/login', userController.userLogin)

module.exports = router;