const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
});
let Song = mongoose.model("Songs", songSchema);
module.exports = Song;
