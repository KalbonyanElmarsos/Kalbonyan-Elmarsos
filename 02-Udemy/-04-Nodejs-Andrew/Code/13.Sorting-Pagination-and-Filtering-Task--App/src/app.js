const express = require("express");
const User = require("./models/user.js");
const Task = require("./models/task.js");
const userRoute = require("./routes/user.route.js");
const taskRoute = require("./routes/task.route.js");
const { checkAuth } = require("./middelwares/auth.js");
const app = express();

require("./db/mongoose.js");

const PORT = process.env.PORT || 4000;

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method === "get") {
//     res.json("get requests not allowed");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).json("server currently  down, try later again");
// });

//-------------------USEING EXTERNAL FILES --------------------------
app.use(userRoute);
app.use(checkAuth, taskRoute);

// ________________USING ASYNC-AWAIT APPROACH____________________________________
// // ************CREATE NEW USER**********************
// app.post("/users", async (req, res) => {
//   const payload = req.body;

//   const user = new User(payload);

//   try {
//     const result = await user.save();

//     return res.status(200).json(result);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });

// // ************ GET ALL USERS **********************
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     if (!users) {
//       return res.status(404).json("No users founded");
//     }
//     return res.status(200).json(users);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });
// // ************ GET SINGLE USERS **********************
// app.get("/users/:userId", async (req, res) => {
//   const _id = req.params.userId;
//   if (!_id) {
//     return res.status(400).json("bad request from client");
//   }

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).json("No user founded");
//     }
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });
// // ************ Update single user **********************
// app.patch("/users/:userId", async (req, res) => {
//   const _id = req.params.userId;
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "age", "password", "email"];

//   const isAllowed = updates.every((update) => allowedUpdates.includes(update));

//   if (!isAllowed) {
//     return res.status(400).json("Bad request");
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedUser) {
//       return res.status(404).json("No user founded");
//     }
//     return res.status(200).json(updatedUser);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });
// // ************ delete single user **********************
// app.delete("/users/:userId", async (req, res) => {
//   const _id = req.params.userId;

//   try {
//     const deletedUser = await Task.findByIdAndDelete(_id);

//     if (!deletedUser) {
//       return res.status(404).json("No user founded");
//     }
//     return res.status(200).json(deletedUser);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////
// // ************CREATE NEW TASK**********************
// app.post("/tasks", async (req, res) => {
//   const payload = req.body;

//   const task = new Task(payload);
//   try {
//     const result = await task.save();
//     return res.status(201).json(result);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });
// // ************ GET ALL TASKS **********************
// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     if (!tasks) {
//       return res.status(404).json("No tasks founded");
//     }
//     return res.status(200).json(tasks);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });

// // ************ GET SINGLE TASKS **********************
// app.get("/tasks/:taskId", async (req, res) => {
//   const _id = req.params.taskId;
//   if (!_id) {
//     return res.status(400).json("bad request from client");
//   }

//   try {
//     const task = await Task.findById(_id);
//     if (!task) {
//       return res.status(404).json("No v founded");
//     }
//     return res.status(200).json(task);
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });
// // ************ Update single task **********************
// app.patch("/tasks/:taskId", async (req, res) => {
//   const _id = req.params.taskId;
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];

//   const isAllowed = updates.every((update) => allowedUpdates.includes(update));

//   if (!isAllowed) {
//     return res.status(400).json("Bad request");
//   }

//   try {
//     const updatedTask = await Task.findByIdAndUpdate(_id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedTask) {
//       return res.status(404).json("No task founded");
//     }
//     return res.status(200).json(updatedTask);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });
// // ************ delete single task **********************
// app.delete("/tasks/:taskId", async (req, res) => {
//   const _id = req.params.taskId;

//   try {
//     const deletedTask = await Task.findByIdAndDelete(_id);

//     if (!deletedTask) {
//       return res.status(404).json("No task founded");
//     }
//     return res.status(200).json(deletedTask);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });
// ________________USING THEN,CATCH APPROACH____________________________________
// // ************CREATE NEW USER**********************
// app.post("/users", (req, res) => {
//   const payload = req.body;

//   const user = new User(payload);

//   user
//     .save()
//     .then((user) => {
//       res.status(200).json(user);
//     })
//     .catch((err) => {
//       res.status(404).json(err);
//     });
// });

// // ************ GET ALL USERS **********************
// app.get("/users", (req, res) => {
//   User.find()
//     .then((users) => {
//       if (!users) {
//         res.status(404).json("No users founded");
//       }
//       res.status(200).json(users);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });
// // ************ GET SINGLE USERS **********************
// app.get("/users/:userId", (req, res) => {
//   const _id = req.params.userId;
//   if (!_id) {
//     res.status(400).json("bad request from client");
//   }

//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         res.status(404).json("No user founded");
//       }
//       res.status(200).json(user);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });
// // ************CREATE NEW TASK**********************
// app.post("/tasks", (req, res) => {
//   const payload = req.body;

//   const task = new Task(payload);

//   task
//     .save()
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((err) => {
//       res.status(401).json(err);
//     });
// });
// // ************ GET ALL TASKS **********************
// app.get("/tasks", (req, res) => {
//   Task.find()
//     .then((tasks) => {
//       if (!tasks) {
//         res.status(404).json("No tasks founded");
//       }
//       res.status(200).json(tasks);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// // ************ GET SINGLE TASKS **********************
// app.get("/tasks/:taskId", (req, res) => {
//   const _id = req.params.taskId;
//   if (!_id) {
//     res.status(400).json("bad request from client");
//   }

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         res.status(404).json("No v founded");
//       }
//       res.status(200).json(task);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});
