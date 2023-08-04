const express = require("express");
//importing route
const userRoutes = require("./routes/users.js");
const productRoutes = require("./routes/product.js");
const cors = require("cors");
const connectDb = require("./db/connection.js");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

//Using route
app.use(userRoutes);
app.use(productRoutes);

connectDb();
const port = process.env.PORT;

const getAllUser = async (req, res) => {
  const data = await Users.find();
  res.json({
    msg: "success",
    data: data,
  });
};

const getUserById = async (req, res) => {
  const data = await Users.findById(req.params.id);
  res.json({
    msg: "success",
    data: data,
  });
};

const deleteExistingUser = async (req, res) => {
  const data = await Users.findByIdAndDelete(req.params.id);
  res.json({
    msg: "success",
    data: data,
  });
};

const updateExistingUser = async (req, res) => {
  const data = await Users.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    msg: "success",
    data: data,
  });
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
