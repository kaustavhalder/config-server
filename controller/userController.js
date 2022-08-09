const userModel = require("../models/userModel");
const logger = require("../util/logger");

exports.createUser = async (req, res) => {
  //   console.log("Create User controller has been hit");
  logger.info("User Creation controller has been hite");
  console.log(req.body);

  let userName = req.body.name;
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  console.log(userName);
  console.log(userEmail);
  console.log(userPassword);

  // const newUser = await userModel.create({
  //   name: userName,
  //   email: userEmail,
  //   password: userPassword
  // }).then(

  //   res.status(201).json({
  //     success: true,
  //     message: "created",
  //   })

  // )

  try {
    const newUser = await userModel.create({
      name: userName,
      email: userEmail,
      password: userPassword,
    });

    res.status(201).json({
      success: true,
      message: "created",
    });
  } catch (err) {
    logger.error("Error occured in user creation", err);
    console.log(`Error occured ${err}`);
    res.json({
      success: false,
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  logger.info("delete user route has been hit");
};
