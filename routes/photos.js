const express = require("express");
const router = express.Router();

// Home Photos route
router.get("/", function (req, res) {
  console.log("At /photos");
  res.render("photos", { year: new Date().getFullYear() });
});

module.exports = router;
