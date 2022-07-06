const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("user", {
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (validator.contains(value.toLowerCase(), "password")) {
        throw new Error("Password can not contain word password");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age can  not be negative value");
      }
    },
  },
});

module.exports = User;
