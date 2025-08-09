const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connection");

app.get("/", (req, res) => {
  res.send("Hello Form Server Side");
});
//server
app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
