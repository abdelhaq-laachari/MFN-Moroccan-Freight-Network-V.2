const express = require("express");
const router = express.Router();

// import controller
const {register, login, getAllCompanies} = require("../controller/companyController");

// @desc    Register a new user
router.route("/register").post(register);

// @desc    Login a user
router.route("/login").post(login);

// @desc    Get all companies
router.route("/").get(getAllCompanies);



// export route file
module.exports = router;
