const multer = require("multer");
const sharp = require("sharp");

const { checkAuth } = require("../middelwares/auth");
const { encryptPassword } = require("../middelwares/encryptPassword");
const { findByCredentials } = require("../middelwares/findByCredentials");
const { generateToken } = require("../middelwares/generateToken");
const Task = require("../models/task");
const User = require("../models/user");

const userRoute = require("express").Router();

// ************CREATE NEW USER**********************
userRoute.post("/", encryptPassword, async (req, res) => {
  const payload = req.body;

  const user = new User(payload);
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(401).json("duplicated email");
    }
    const result = await user.save();

    // const token = await user.generateToken();

    const token = await generateToken(result._id);

    user.tokens = user.tokens.concat({ token });
    const result2 = await user.save();

    return res.status(201).json({ user: result2, token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// ************login user**********************
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findByCredentials(email, password);
    // const user = await User.findByCredentials(email, password);
    const token = await generateToken(user._id);

    user.tokens = user.tokens.concat({ token });

    await user.save();
    delete user.password;
    delete user.tokens;
    delete user.avatar;

    res.status(200).json({
      user: { _id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// ************Logout from one device**********************
userRoute.post("/logout", checkAuth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (item) => item.token !== req.token
    );
    await req.user.save();
    res.status(200).json("logged out");
  } catch (error) {
    res.status(500).json("Server error");
  }
});

// ************Logout from all devices**********************
userRoute.post("/logoutall", checkAuth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).json("logged out  from all devices");
  } catch (error) {
    res.status(500).json("Server error");
  }
});

// ************ GET ALL USERS **********************
// userRoute.get("/users/", checkAuth, async (req, res) => {
userRoute.get("/me", checkAuth, async (req, res) => {
  res.status(200).json(req.user);

  // try {
  //   const users = await User.find();
  //   if (!users) {
  //     return res.status(404).json("No users founded");
  //   }
  //   return res.status(200).json(users);
  // } catch (err) {
  //   return res.status(500).json(err.message);
  // }
});
// ************ GET SINGLE USERS **********************
userRoute.get("/:userId", async (req, res) => {
  const _id = req.params.userId;
  if (!_id) {
    return res.status(400).json("bad request from client");
  }

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json("No user founded");
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// ************ Update single user **********************
// userRoute.patch("/users/:userId", encryptPassword, async (req, res) => {
userRoute.patch("/me", checkAuth, encryptPassword, async (req, res) => {
  // const _id = req.params.userId;
  const _id = req.user._id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "password", "email"];

  const isAllowed = updates.every((update) => allowedUpdates.includes(update));

  if (!isAllowed) {
    return res.status(400).json("Bad request");
  }

  try {
    // const user = await User.findById(_id);
    updates.forEach((update) => (req.user[update] = req.body[update]));
    const updatedUser = await req.user.save();

    // const user = await User.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    // if (!user) {
    //   return res.status(404).json("No user founded");
    // }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// ************ delete single user **********************
// userRoute.delete("/users/:userId", async (req, res) => {
userRoute.delete("/me", checkAuth, async (req, res) => {
  const _id = req.params.userId;

  try {
    // const deletedUser = await User.findByIdAndDelete(_id);

    // if (!deletedUser) {
    //   return res.status(404).json("No user founded");
    // }
    // return res.status(200).json(deletedUser);

    await req.user.remove();
    await Task.deleteMany({ owner: req.user._id });

    res.status(200).json("user removed");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// ************ Upload Avatar image **********************
const upload = multer({
  // dest: "avatars", //needed if you need a folder in the file system , but if you need to handle it in the route handler then not specify it
  limits: {
    fileSize: 1000000, // 1MB
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.jpg|jpeg|png$/)) {
      callback(new Error("Only images allowed"));
    }
    return callback(undefined, true);
  },
});

userRoute.post(
  "/me/avatar",
  checkAuth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png.toBuffer();

    req.user.avatar = buffer;
    // req.user.avatar = req.file.buffer;
    await req.user.save();

    res.status(200).json({ success: "Uploaded successfully" });
  },
  (err, req, res, next) => {
    if (err) {
      res.status(400).json({ errorMessage: err.message });
    }
  }
);

// ************ Delete Avatar image **********************
userRoute.delete("/me/avatar", checkAuth, async (req, res) => {
  try {
    req.user.avatar = undefined;
    await req.user.save();
    res.status(200).json({ success: "Avatar deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// ************ Get Avatar image  **********************
userRoute.get("/:id/avatar", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);

    if (!user || !user.avatar) {
      throw new Error("");
    }
    res.set("Content-Type", "image/png");
    res.status(200).send(user.avatar);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = userRoute;
