const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAthu");

const Tracking = mongoose.model("Track");
const router = express.Router();

router.use(requireAuth);

//get all tracks
router.get("/tracks", async (req, res) => {
  const tracks = await Tracking.find({ userId: req.data._id });
  console.log(tracks);

  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations) {
    return res.status(422).send({ error: "name aand Location is not Valide " });
  }

  try {
    const track = new Tracking({ name, locations, userId: req.data._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});
module.exports = router;
