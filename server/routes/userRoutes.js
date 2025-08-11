const express = require("express");
const router = express.Router();
const userController = require("../controller/userController"); // adjusted plural

// API for sign-up
router.post("/sign-up", userController.userSignup);

// API for login
router.post("/login", userController.userLogin);

module.exports = router;
