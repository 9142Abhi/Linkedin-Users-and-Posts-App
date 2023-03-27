const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const appRouter = express.Router();

appRouter.post("/register", async (req, res) => {
  const { name, email, gender, password, age, city, is_married } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        name,
        gender,
        email,
        password: hash,
        age,
        city,
        is_married,
      });
      await user.save();
      console.log(req.body);
      res.status(200).send({ msg: "registered" });
    });
  } catch (err) {
    res.send("something went wrong");
  }
});

appRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //   console.log(email, password);
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      //   console.log(user);
      bcrypt.compare(password, user.password, (err, result) => {
        // console.log(result);
        if (result) {
          res.send({
            msg: "Login Successfull",
            token: jwt.sign({ userID: user._id }, "masai"),
          });
        } else {
          res.send("wrong Credentials");
        }
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = { appRouter };
