const express = require("express");
const router = express.Router();

// import controller
const {register, login} = require("../controller/companyController");

// @desc    Register a new user
router.route("/register").post(register);

// @desc    Login a user
router.route("/login").post(login);



// export route file
module.exports = router;
