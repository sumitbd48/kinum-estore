const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  address: String,
  email: String,
  password: String,
  phoneNumber: Number,
  role: {
    type: String,
    enum: ["admin", "vendor", "customer"],
    default: "customer",
  },
  favorite: Array,
  cartItems: Array,
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
