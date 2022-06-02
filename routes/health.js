const express = require("express");
const logger = require('../util/logger')
const router = express.Router();

router.route("/").all((req, res) => {
  logger.info("Health route has been hit")
  res.json({ status: "UP" });
});

module.exports = router;
