const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/products");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  addNewProducts,
  getAllProducts,
  getProductById,
} = require("../controllers/products.js");

console.log(addNewProducts);
router.post("/products", upload.single("productImage"), addNewProducts);
router.get("/products", getAllProducts);

const test = (req, res) => {
  console.log("hello");
};

router.get("/products/:productId", getProductById);

module.exports = router;
