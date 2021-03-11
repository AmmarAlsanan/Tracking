require("./modul/User");
require("./modul/Tracking");
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./Router/authRouter");
const trackRoute = require("./Router/trackingRoutes");
const requireAuth = require("./middleware/requireAthu");

const app = express();
//accept the body Josn type
app.use(express.json());

//use the route
app.use(authRoute);
app.use(trackRoute);

//mongodb Uri
const mongoUri =
  "mongodb+srv://Ammar:Ammar@cluster0.lxn4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//connecting to mongodb using lib called mongoose
mongoose.connect(mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//handling the success conation
mongoose.connection.on("connected", () => {
  console.log("connected to mong server ");
});

//handle error connection
mongoose.connection.on("error", (err) => {
  console.log("there are error connection ", err);
});

// create get
app.get("/", requireAuth, (req, res) => {
  res.send(`the User Email is ${req.data.email}`);
});

//
app.listen(3000, () => {
  console.log("listening on port 3000");
});
