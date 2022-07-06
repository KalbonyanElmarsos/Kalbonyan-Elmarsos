const express = require("express");

const multer = require("multer");
require("dotenv").config();

const User = require("./models/user.js");
const Task = require("./models/task.js");
const userRoute = require("./routes/user.route.js");
const taskRoute = require("./routes/task.route.js");
const { checkAuth } = require("./middelwares/auth.js");
const app = express();

const upload = multer({
  dest: "uploads",
  limits: {
    fileSize: 1000000, // 1 MB
  },
  fileFilter(req, file, callback) {
    // if (!file.originalname.endsWith(".pdf")) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return callback("not word file");
    }

    return callback(undefined, true);

    // 1) this is how firing error
    // callback( new Error('some error'))
    // 2) this is how notify ok request
    // callback(undefined, true)
    // 1) this is notify bad request
    // callback(undefined, false)
  },
});

require("./db/mongoose.js");

app.use(express.json());

app.post(
  "/upload",
  upload.single("avatar"),
  (req, res) => {
    res.status(200).send();
  },
  (err, req, res, next) => {
    if (err) {
      res.status(400).json({ errorMessage: err.message });
    }
  }
);

app.use("/users", userRoute);
app.use(checkAuth, taskRoute);

module.exports = app;
