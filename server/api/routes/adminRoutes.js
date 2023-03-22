const express = require("express");
const router = express.Router();

// import middleware
const { protect } = require("../middleware/authMiddleware");

// import controller
const {register, login, getMe} = require("../controller/adminController");

// @desc    Register a new admin
router.route("/register").post(register);

// @desc    Login a admin
router.route("/login").post(login);

// @desc    Get me
router.route("/me").get(protect, getMe);



// export route file
module.exports = router;
