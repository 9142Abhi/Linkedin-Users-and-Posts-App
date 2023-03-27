const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
  age: Number,
  city: String,
  is_married: Boolean,
});

const UserModel = new mongoose.model("user", userSchema);

module.exports = { UserModel };
