// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const User = mongoose.model("User");

// //modul
// module.exports = (res, req, next) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     res.status(401).send({ error: "login .... error massege " });
//   }
//   const { token } = authorization.replace("Bearer ", "");
//   jwt.verify({ token }, "My_secret_key", async (err, payload) => {
//     if (err) {
//       res.status(401).send({ error: "error message" });
//     }

//     const { userId } = payload;
//     const user = await User.findById(userId);
//     req.user = user;
//     next();
//   });
// };

// practing
