const express = require("express");
const router = express.Router();
const {
  addNewProducts,
  getAllProducts,
} = require("../controllers/products.js");

console.log(addNewProducts);
router.post("/products", addNewProducts);
router.get("/products", getAllProducts);

module.exports = router;
