const userModel = require("../models/userModel");
const logger = require("../util/logger");

exports.createUser = async (req, res) => {
  //   console.log("Create User controller has been hit");
  logger.info("User Creation controller has been hit");
  console.log(req.body);

  let userName = req.body.name;
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  try {
    const newUser = await userModel.create({
      name: userName,
      email: userEmail,
      password: userPassword,
    });

    res.status(201).json({
      success: true,
      message: "created",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    logger.error("Error occured in user creation", err);
    console.log(`Error occured ${err}`);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  logger.info("Get All users route has been hit");
  let users = await userModel.find({});
  res.status(200).json({
    success: true,
    message: "ok",
    data: {
      users,
    },
  });
};
