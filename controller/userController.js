const userModel = require("../models/userModel");
const logger = require("../util/logger");

exports.createUser = async (req, res) => {
  //   console.log("Create User controller has been hit");
  logger.info("User Creation controller has been hite");
  console.log(req.body);

  let userName = req.body.name;
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  // console.log(userName);
  // console.log(userEmail);
  // console.log(userPassword);

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

exports.deleteUser = async (req, res) => {
  logger.info("delete user route has been hit");
};

exports.updateUser = async (req, res) => {
  logger.info("update user route has been hit");
};

exports.getAllUsers = async (req, res) => {
  logger.info("Get All users route has been hit");
};
