const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  apt: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("myTable", signUpTemplate);
