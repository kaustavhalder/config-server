const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || null;

const logger = require("../util/logger");
if (!DB_URL) {
  logger.info("DB URL has not been configured in env variables");
  logger.info('Proceeding to use local config for app server')
  // process.exit();
} else {
  mongoose.connect(DB_URL);
  mongoose.connection
    .on("connected", () => {
      logger.info("DB Connection succesfull");
    })
    .on("error", () => {
      logger.error("DB Connection not succesfull");
      process.exit();
    });
}
