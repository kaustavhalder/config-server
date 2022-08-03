const express = require("express");
const router = express.Router();
const logger = require("../util/logger");

router.route("/").patch((req, res) => {
  logger.info("Passencrypt endpoint has been hit ");
});

module.exports = router;
