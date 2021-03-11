const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  // 1- get the token from the header
  const { authorization } = req.headers;

  // 2- make sure there are a token
  if (!authorization) {
    return res.status(401).send({ error: "Log in plz " });
  }

  //   3-get the token
  const token = authorization.replace("Bearer ", "");

  //   4-verify the jwt token to get the information
  jwt.verify(token, "My_secret_key", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "log in plz " });
    }
    const { userId } = payload;
    //5- get the information by id

    const user = await User.findById(userId);

    //5.1- put the user info in header to use
    req.data = user;

    next();
  });
};
