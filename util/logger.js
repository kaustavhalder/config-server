const winston = require("winston");
// const dotenv = require("dotenv");
const { transports } = require("winston");

console.log(`LOG_LEVEL from logger = ${process.env.LOG_LEVEL}`);

const logOptions = {
  file: {
    level: "info",
    filename: "./logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: process.env.LOG_LEVEL,
    handleExceptions: true,
    json: true,
    colorize: false,
  },
};

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File(logOptions.file),
    new winston.transports.Console(logOptions.console),
  ],
});

module.exports = logger;
