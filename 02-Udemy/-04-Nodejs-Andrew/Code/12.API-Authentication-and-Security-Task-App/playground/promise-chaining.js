require("../src/db/mongoose");

const User = require("../src/models/user");

// User.findByIdAndUpdate("62ba97ffa005b3176175b6e9", { age: 30 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 30 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     consol.log(err);
//   });

const updateAge = async () => {
  const updatedUser = await User.findByIdAndUpdate("62ba97ffa005b3176175b6e9", {
    age: 1,
  });
  const count = await User.countDocuments({ age: 1 });

  return count;
};

updateAge()
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
