const winston = require('winston')
const dotenv = require('dotenv');
const { transports } = require('winston');

dotenv.config({
    path: '../config/local/.env'
})

const logOptions = {
    file : {
        level : "info",
        filename : '../logs/app.log',
        handleExceptions : true,
        json : true,
        maxsize : 5242880,
        maxFiles : 5,
        colorize: false

    },
    console : {
        level : process.env.LOG_LEVEL,
        handleExceptions : true,
        json : true,
        colorize : false
    }
};



const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    transports : [
        new winston.transports.File(logOptions.file),
        new winston.transports.Console(logOptions.console)
    ]
})

module.exports = logger