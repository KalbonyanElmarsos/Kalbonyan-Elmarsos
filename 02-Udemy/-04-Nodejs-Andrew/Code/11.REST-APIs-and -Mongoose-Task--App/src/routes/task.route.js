const Task = require("../models/task");
const taskRoute = require("express").Router();

// ************CREATE NEW TASK**********************
taskRoute.post("/tasks", async (req, res) => {
  const payload = req.body;

  const task = new Task(payload);
  try {
    const result = await task.save();
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
// ************ GET ALL TASKS **********************
taskRoute.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
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
  const _id = req.params.taskId;
  if (!_id) {
    return res.status(400).json("bad request from client");
  }

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).json("No v founded");
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
    const updatedTask = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json("No task founded");
    }
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
// ************ delete single task **********************
taskRoute.delete("/tasks/:taskId", async (req, res) => {
  const _id = req.params.taskId;

  try {
    const deletedTask = await Task.findByIdAndDelete(_id);

    if (!deletedTask) {
      return res.status(404).json("No task founded");
    }
    return res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = taskRoute;
