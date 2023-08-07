const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productIds: Array,
  userId: Number,
});

const Orders = mongoose.model("Products", orderSchema);

module.exports = Orders;
