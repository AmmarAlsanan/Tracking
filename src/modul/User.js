const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// create the schema for mongoDB
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//before the save let encyp the password
userSchema.pre("save", function (next) {
  //save the this in user
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// create combier between the password

userSchema.methods.comperPassword = function (inputPassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(inputPassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(err);
      }
      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);
