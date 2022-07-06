require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndRemove("62ba99c7bfbcbd9ea9e2979e")
//   .then((task) => {
//     console.log(task);

//     return Task.countDocuments({ age: 30 });
//   })
//   .then((result) => {
//     console.log(result);
//   })s
//   .catch((err) => {
//     consol.log(err);
//     s;
//   });

const UpdateTask = async () => {
  Task.findByIdAndUpdate("62b96ff0370851fc6936a6b0", { completed: true })
    .then((task) => {
      console.log(task);

      return Task.countDocuments({ completed: true });
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      consol.log(err);
      s;
    });
};

UpdateTask()
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
