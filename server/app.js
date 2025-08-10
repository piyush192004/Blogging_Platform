const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connection");
const userApi = require("./routes/userRoutes");

app.use(express.json());
//calling routes
app.use("/api/v1", userApi);
//server
app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
