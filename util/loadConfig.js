const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV || "local";


dotenv.config({
    path: './config/local/.env'
})

