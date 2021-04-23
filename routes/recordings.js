const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("At /recordings");
  res.render("recordings", { year: new Date().getFullYear() });
});

module.exports = router;
