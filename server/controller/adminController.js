const User = require("../models/user");
const Blog = require("../models/blog");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All Fields are Required" });
    }

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    }

    // Check password first
    const checkPass = await bcrypt.compare(password, existingUser.password);
    if (!checkPass) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    }

    // Create JWT and set cookie ONLY if password is valid
    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.cookie("blogsapplogin", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "None",
    });

    return res.status(200).json({ success: true, message: "Login Successful" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};

//add-blogs
exports.addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "All Fields are Required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Image is Required" });
    }

    const newBlog = new Blog({ title, description, image: "req.file.path" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};
