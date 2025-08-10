const router = require("express").Router();
const userController = require("../controller/userController");

//api for sign-up
router.post("/sign-up", userController.userSignup);

//api for login
router.post("/login", userController.userLogin);
module.exports = router;
