const express = require("express");
const router = express.Router();
const {regsiterNewUser , loginUser} = require('../controllers/users.js');
router.post("/register", regsiterNewUser);
router.post("/login",loginUser);
// router.get("/users", getAllUser);
// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
