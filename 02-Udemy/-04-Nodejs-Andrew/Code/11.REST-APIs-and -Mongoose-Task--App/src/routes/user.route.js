const User = require("../models/user");

const useRoute = require("express").Router();

// ************CREATE NEW USER**********************
useRoute.post("/users", async (req, res) => {
  const payload = req.body;

  const user = new User(payload);

  try {
    const result = await user.save();

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// ************ GET ALL USERS **********************
useRoute.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json("No users founded");
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// ************ GET SINGLE USERS **********************
useRoute.get("/users/:userId", async (req, res) => {
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
useRoute.patch("/users/:userId", async (req, res) => {
  const _id = req.params.userId;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "password", "email"];

  const isAllowed = updates.every((update) => allowedUpdates.includes(update));

  if (!isAllowed) {
    return res.status(400).json("Bad request");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json("No user founded");
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
// ************ delete single user **********************
useRoute.delete("/users/:userId", async (req, res) => {
  const _id = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json("No user founded");
    }
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = useRoute;
