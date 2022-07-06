const Task = require("../src/models/task");
const User = require("../src/models/user");

const doRef = async () => {
  // const task = await Task.findById("62bd9124b9ef67434427787f");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("62bd90983444e11248155f84");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

doRef();
