const express = require("express");
const jwt = require("jsonwebtoken");
const postRouter = express.Router();
postRouter.get("/add", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, "masai");
  if (decode) {
    res.send();
  }
});
