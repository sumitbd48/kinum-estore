const Users = require("../models/users.js");
const bcrypt = require("bcrypt");
const regsiterNewUser = async (req, res) => {
  //if phone number already exists
  const matched = await Users.exists({ phoneNumber: req.body.phoneNumber });
  if (matched) {
    res.status(409).json({
      msg: "User Already Exists",
    });
  } else {
    //encrypt the password
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    await Users.create(req.body);
    res.status(201).json({
      msg: "User created successfully",
    });
  }
};

module.exports = { regsiterNewUser };
