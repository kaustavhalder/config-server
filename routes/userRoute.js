const express = require("express");
const logger = require("../util/logger");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/").post(userController.createUser);

module.exports = router;
