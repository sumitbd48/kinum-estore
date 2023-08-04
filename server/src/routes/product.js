const express = require("express");
const router = express.Router();
const {addNewProducts} = require('../controllers/products.js');
console.log(addNewProducts)
router.post("/products", addNewProducts);

module.exports = router;
