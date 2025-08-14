const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = {
  verifyToken: async (req, res, next) => {
    try {
      const token = req.cookies.blogsapplogin;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Access Denied. No token provided." });
      }

      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user from DB
      const userDoc = await User.findById(decoded.id);
      if (!userDoc) {
        return res.status(404).json({ message: "User Not Found" });
      }

      req.user = userDoc; // attach full user document
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: error.message || "Invalid Token" });
    }
  },

  authorizeRole: (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access Denied" });
      }
      next();
    };
  },
};

module.exports = authMiddleware;
