const express = require("express");
const router = express.Router();
const {regsiterNewUser} = require('../controllers/users.js');
console.log(regsiterNewUser)
router.post("/register", regsiterNewUser);
// router.get("/users", getAllUser);
// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
