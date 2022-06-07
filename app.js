const express = require("express");
const bodyparser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Custom module imports

const logger = require("./util/logger");

const DB_URL = process.env.DB_URL;
console.log(`DB URL ${DB_URL}`);

// Custom endpoints

const healthRouter = require("./routes/health");
const authRouter = require("./routes/authRouter");

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect(DB_URL);

mongoose.connection
  .on("connected", () => {
    logger.info("connection Successfull");
  })
  .on("error", (err) => {
    logger.info(`Error occured on connection to DB ${err}`);
  });

// Custom Middlewares loaded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/health", healthRouter);

app.get("/", (req, res) => {
  //   console.log("Its Alive");
  logger.info("root url has been hit");
  res.status(200).json({
    status: "success",
    message: "It's Alive !! ",
  });
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
