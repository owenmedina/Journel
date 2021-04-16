"use strict";

const express = require("express");

const app = express();

const port = parseInt(process.env.PORT) || 3000;

app.get("/", function (req, res) {
  console.log("Some TimeController function");
});

app.listen(port, function () {
  console.log(`Successfully setup server on port ${port}`);
});
