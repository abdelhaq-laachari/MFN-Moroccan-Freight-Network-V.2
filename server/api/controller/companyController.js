const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new admin
// @route   POST /admin/register
// @access  Public

const register = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    companyName,
    companyNumber,
    companyAddress,
    longitude,
    latitude,
    email,
    password,
    password2,
  } = req.body;

  //   check if any of the fields are empty
  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !companyName ||
    !companyNumber ||
    !companyAddress ||
    !longitude ||
    !latitude ||
    !email ||
    !password ||
    !password2
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the admin already exists

  const userExists = await Company.findOne({
    email: email.toLowerCase(),
  });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create admin
  const company = await Company.create({
    firstName,
    lastName,
    phoneNumber,
    companyName,
    companyNumber,
    companyAddress,
    longitude,
    latitude,
    email: email.toLowerCase(),
    password: hashedPassword,
    password2: hashedPassword,
    token: generateToken(),
  });

  //   if admin created send success message
  if (company) {
    res.status(201).json({
      token: generateToken(company._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password");
  }
});

// @desc    Auth user & get token
// @route   POST /api/admin/login
// @access  Public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const company = await Company.findOne({
    email: email.toLowerCase(),
  });

  if (company && (await bcrypt.compare(password, company.password))) {
    res.json({
      token: generateToken(company._id),
      id: company._id,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get all users
// @route   GET /allUsers
// @access  Private

const getCompanies = asyncHandler(async (req, res) => {
  const company = await Company.find({});
  res.json(company);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  register,
  login,
  getCompanies,
};
