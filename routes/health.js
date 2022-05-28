const express = require("express");

const router = express.Router();

router.route("/").all((req, res) => {
  res.json({ status: "UP" });
});

module.exports = router;
