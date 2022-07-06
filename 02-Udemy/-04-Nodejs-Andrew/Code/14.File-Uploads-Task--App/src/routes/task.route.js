const { checkAuth } = require("../middelwares/auth");
const Task = require("../models/task");
const User = require("../models/user");
const taskRoute = require("express").Router();

// ************CREATE NEW TASK**********************
taskRoute.post("/tasks", async (req, res) => {
  const payload = req.body;

  const task = new Task({ ...payload, owner: req.user._id });
  try {
    const result = await task.save();
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// ************ GET ALL TASKS **********************
taskRoute.get("/tasks", async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }

  if (req.query.sortby) {
    const query = req.query.sortby.split(":");
    const key = query[0];
    const value = query[1];
    sort[key] = value === "desc" ? -1 : 1;
  }

  try {
    // const tasks = await Task.find();

    // ! First way
    // const tasks = await Task.find({ owner: req.user._id });

    // ! second way
    await req.user.populate("tasks").execPopulate({
      path: "tasks",
      match,
      options: { limit: +req.query.limit, skip: +req.query.skip, sort },
    });

    const tasks = req.user.tasks;

    if (!tasks) {
      return res.status(404).json("No tasks founded");
    }
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// ************ GET SINGLE TASKS **********************
taskRoute.get("/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  if (!taskId) {
    return res.status(400).json("bad request from client");
  }

  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({ _id: taskId, owner: req.user._id });

    if (!task) {
      return res.status(404).json("Not founded");
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// ************ Update single task **********************
taskRoute.patch("/tasks/:taskId", async (req, res) => {
  const _id = req.params.taskId;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];

  const isAllowed = updates.every((update) => allowedUpdates.includes(update));

  if (!isAllowed) {
    return res.status(400).json("Bad request");
  }

  try {
    // const task = await User.findById(_id);

    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).json("UnAuthorized user");
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    // const task = await Task.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
// ************ delete single task **********************
taskRoute.delete("/tasks/:taskId", async (req, res) => {
  const _id = req.params.taskId;

  try {
    // const deletedTask = await Task.findByIdAndDelete(_id);
    const deletedTask = await Task.findOneAndDelete({
      _id,
      owner: req.user._id,
    });

    if (!deletedTask) {
      return res.status(404).json("UnAuthorized user");
    }
    return res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = taskRoute;
