const express = require("express");
const Song = require("../models/Song");
const router = express.Router(); //mini instance or mini server
// to show all the products
router.get("/songs", async (req, res) => {
  let songs = await Song.find();
  res.render("songs/index", { songs });
});

// to show a particular product
router.get("/songs/:id", async (req, res) => {
  let { id } = req.params;
  let foundSong = await Song.findById(id);
  res.render("songs/show", { foundSong });
});
module.exports = router;
