const mongoose = require("mongoose");
const validator = require("validator");

const Task = new mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },

  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Task;
