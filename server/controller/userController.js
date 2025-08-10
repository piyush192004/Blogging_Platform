const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//sign-up controller
exports.userSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All Fields are Required" });
    }

    //does the username and email exists
    const existingUser = await user.findOne;
    ({ $or: [{ usrname }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Username or email already exists" });
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    //new user
    const newUser = new user({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ success: true, message: "Account Created" });
  } catch (error) {
    return res;
    console
      .log(error)
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};

//login controller
exports.userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All Fields are Required" });
    }

    //does the username and email exists
    const existingUser = await user.findOne;
    ({ username });
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    }

    //check password
    const checkPass = await bcrypt.compare(password, existingUser.password);
    if (!checkPass) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Login Successfull" });
  } catch (error) {
    return res;
    console
      .log(error)
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};
