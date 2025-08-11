const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
require("./connection/connection");
const userApi = require("./routes/userRoutes");

// Middleware
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", userApi);

// Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server Started at port ${process.env.PORT}`);
});
