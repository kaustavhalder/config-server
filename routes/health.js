const express = require("express");
const logger = require("../util/logger");
const router = express.Router();
const healthController = require("../controller/healthController");

router.route("/").all(healthController.getHealthRoute);

module.exports = router;
