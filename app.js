const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Custom module imports

const logger = require("./util/logger");

const DB_URL = process.env.DB_URL;
console.log(`DB URL ${DB_URL}`);

// Custom endpoints

const healthRoute = require("./routes/health");
const authRouter = require("./routes/authRouter");

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.connect(DB_URL);


mongoose.connection.on('error', (err) => {
    logger.info(`Error occured on connection to DB ${err}`)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))





app.listen(port, ()=>{
    console.log("Server is up and running`");
})
























