const Products = require("../models/products.js");

const addNewProducts = async (req, res) => {
  console.log(req.body);
  await Products.create(req.body);
  res.json({
    msg: "success",
  });
};

module.exports = { addNewProducts };
