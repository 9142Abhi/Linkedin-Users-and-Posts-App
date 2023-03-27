const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { UserModel } = require("./model/user.model");
const { appRouter } = require("./routes/user.route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", appRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`http://localhost/${process.env.PORT}`);
});
