const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Custom module imports
const config = require('./util/loadConfig');
const logger = require('./util/logger');
const dbconnect = require('./util/dbConnect');

const { DB_URL } = process.env;
logger.info(`DB URL for env ${DB_URL}`);

// Custom endpoints
const healthRouter = require('./routes/health');
const authRouter = require('./routes/authRouter');
const configRefeshRouter = require('./routes/configRefresh');
const userRouter = require('./routes/userRoute');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Establish Database connection to the Cloud URI
// mongoose.connect(DB_URL);

// mongoose.connection
//   .on("connected", () => {
//     logger.info("connection Successfull");
//   })
//   .on("error", (err) => {
//     logger.info(`Error occured on connection to DB ${err}`);
//   });

// Custom Middlewares loaded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Middle wares loaded
app.use('/health', healthRouter);
app.use('/configrefresh', configRefeshRouter);
app.use('/api/v1/roles', userRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/configrefresh', userRouter);
app.use('/api/v1/passencrypt', userRouter);

app.get('/', (req, res) => {
  //   console.log("Its Alive");
  logger.info('root url has been hit');
  res.status(200).json({
    status: 'success',
    message: "It's Alive !! ",
  });
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
