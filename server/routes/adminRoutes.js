const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/imageUpload");

router.post("/adminLogin", adminController.adminLogin);

//add-blogs
router.post(
  "/add-blog",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("admin"),
  upload.single("image"),
  adminController.adminLogin
);
module.exports = router;
