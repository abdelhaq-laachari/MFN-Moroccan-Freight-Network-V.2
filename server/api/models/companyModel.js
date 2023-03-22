const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    companyName: {
      type: String,
      required: [true, "Please enter your company name"],
    },
    companyNumber: {
      type: String,
      required: [true, "Please enter your company number"],
    },
    companyAddress: {
      type: String,
      required: [true, "Please enter your company address"],
    },
    longitude: {
      type: String,
      required: [true, "Please choose your company on the map"],
    },
    latitude: {
      type: String,
      required: [true, "Please choose your company on the map"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    password2: {
      type: String,
      required: [true, "Please confirm your password"],
    },
  }
);

module.exports = mongoose.model("Company", companySchema)
