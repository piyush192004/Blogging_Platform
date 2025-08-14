const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// API for sign-up
router.post("/sign-up", userController.userSignup);

// API for login
router.post("/login", userController.userLogin);

//API for check cookie
router.get("/check-cookie", userController.checkCookie);

//Logout
router.post("/logout", userController.logout);

//getProfileData
router.get(
  "/getProfileData",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.getProfileData
);

//updatePassword
router.patch(
  "/changeUserPassword",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.changeUserPassword
);
module.exports = router;
