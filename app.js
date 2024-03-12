// Required package
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const { error } = require("console");
const seedDB = require("./seed");
const ejsMate = require("ejs-mate");
const songRoutes = require("./routes/song");
const methodOverride = require("method-override");
mongoose
  .connect("mongodb://127.0.0.1:27017/song-recommandation")
  .then(() => {
    console.log("Db connected successfully");
  })
  .catch((err) => {
    console.log("Database error");
    console.log(err);
  });
// seedDB();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(songRoutes);

// running the server
app.listen(8080, () => {
  console.log("server is running");
});
