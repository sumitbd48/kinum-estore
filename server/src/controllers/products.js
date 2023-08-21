const Products = require("../models/products.js");

const addNewProducts = async (req, res) => {
  console.log(req.body);
  await Products.create(req.body);
  res.json({
    msg: "success",
  });
};

const getAllProducts = async (req, res) => {
  const data = await Products.find();
  if (data) {
    res.json({
      productsList: data,
      msg: "success",
    });
  }
};

const getProductById = async (req, res) => {
   console.log(req.params.productId);
};

module.exports = { addNewProducts, getAllProducts ,getProductById };
