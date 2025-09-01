const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup Controller
exports.userSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All Fields are Required" });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Username or email already exists" });
    }

    // Hash the password and save new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ success: true, message: "Account Created" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// Login Controller
exports.userLogin = async (req, res) => {
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

//API to check Cookie
exports.checkCookie = (req, res) => {
  try {
    const token = req.cookies.blogsapplogin;
    if (token) {
      return res.status(200).json({ message: true });
    }
    return res.status(400).json({ message: false });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Logout API
exports.logout = (req, res) => {
  res.clearCookie("blogsapplogin", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Logout Successfully" });
};

//Get Profile Data
exports.getProfileData = async (req, res) => {
  try {
    const { user } = req;
    const { password, ...safeUserData } = user._doc;
    console.log(safeUserData);
    res.status(200).json({ data: safeUserData });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//Change Password
exports.changeUserPassword = async (req, res) => {
  try {
    const { user } = req; // Assuming `user` is added from middleware (e.g. auth)
    const { password, newPass, confirmNewPass } = req.body;

    // Check for missing fields
    if (!password || !newPass || !confirmNewPass) {
      return res.status(400).json({
        success: false,
        message: "All password fields are required",
      });
    }

    // Verify old password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    // Check if new passwords match
    if (newPass !== confirmNewPass) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
      });
    }

    // Hash new password
    user.password = await bcrypt.hash(newPass, 10);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//Change Avatar
exports.changeAvatar = async (req, res) => {
  try {
    const { user } = req;
    if (!req.file) {
      return res.status(400).json({ message: "No Image file uploaded" });
    }
    user.avatar = req.file.path;
    await user.save();
    return res.status(200).json({ message: "Avatar Updated Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Internal Server Error" });
  }
};
