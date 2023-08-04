const Users = require("../models/users.js");

const regsiterNewUser = async (req, res) => {
  console.log(req.body);
  await Users.create(req.body);
  res.json({
    msg: "success",
  });
};

module.exports = { regsiterNewUser };
