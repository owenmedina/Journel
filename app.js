"use strict";

const express = require("express");
const path = require("path");
const photos = require(path.join(__dirname, "routes/photos.js"));

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/photos", photos);

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  console.log("Some TimeController function");
  res.render("timeline", { year: new Date().getFullYear() });
});

app.listen(port, function () {
  console.log(`Successfully setup server on port ${port}`);
});
