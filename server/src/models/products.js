const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productCategory: String,
  productPrice: Number,
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
