const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api")
  .then((connect) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// const User = mongoose.model("user", {
//   name: { type: String, required: true, trim: true },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Invalid email");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 6,
//     validate(value) {
//       if (validator.contains(value.toLowerCase(), "password")) {
//         throw new Error("Password can not contain word password");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age a not be negative value");
//       }
//     },
//   },
// });

// const joe = new User({
//   name: "joe",
//   email: "a@eample.com",
//   password: " ",
//   age: 30,
// });

// joe
//   .save()
//   .then((user) => {
//     console.log("usr created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// * CHALLANGE
// const Task = new mongoose.model("task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//     required: false,
//   },
// });

// const firstTask = new Task({
//   description: "go to club at 9PM",
//   completed: false,
// });

// firstTask
//   .save()
//   .then((task) => {
//     console.log("new task created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
