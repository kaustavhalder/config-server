const express = require("express");
const logger = require("../util/logger");
const router = express.Router();
const userController = require("../controller/userController");

router
  .route("/")
  .post(userController.createUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
