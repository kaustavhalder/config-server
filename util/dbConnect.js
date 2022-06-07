const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || null;

const logger = require("../util/logger");
if (!DB_URL) {
  logger.error("DB URL has not been configured in env variables");
  process.exit();
} else {
    mongoose.connect(DB_URL)

    mongoose.connection.on('connected', () => {
        logger.info("DB Connection succesfull")
    }).model('error', () => {
        logger.error("DB Connection not succesfull")
        process.exit()
    })
}
