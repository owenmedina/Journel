"use strict";

const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  console.log("Some TimeController function");
  res.render("timeline");
});

app.listen(port, function () {
  console.log(`Successfully setup server on port ${port}`);
});
