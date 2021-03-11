const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

const route = express.Router();

//signUp
route.post("/signup", async (req, res) => {
  //error handler i will modife it more later .
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });

    //save the user on mongoDB
    await user.save();

    // after it's save in mongoDB then create the token
    // jwt.sign({the element we want to genrate } , 'secret key')
    const token = jwt.sign({ userId: user._id }, "My_secret_key");
    res.send({ token });

    res.send("u made a request post ");
  } catch (err) {
    return res.status(401).send(err.message);
  }
});

//signIn
route.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  //make sure that the user enter the email and password
  if (!email || !password) {
    return res
      .status(401)
      .send({ error: "the Email And Password Are required" });
  }

  //check if we have the user email
  const user = User.findOne({ email });

  //in the input Email is not on the mongoDB return err message
  if (!user) {
    return res
      .status(402)
      .send({ error: "the Email And Password Are required" });
  }
  //user.comperPassword
  //   if there are email comperthe input password with the password in the DB
  //   try {
  await user.comperPassword(password);

  // create a  token
  const token = jwt.sign({ userId: user._id }, "My_secret_key");
  res.send({ token });
  //   } catch (err) {
  //     return res.status(404).send({ error: err });
  //   }
});

module.exports = route;
