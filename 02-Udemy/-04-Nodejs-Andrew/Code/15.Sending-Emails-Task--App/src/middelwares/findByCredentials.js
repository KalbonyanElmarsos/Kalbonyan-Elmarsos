const User = require("../models/user");
const bcrypt = require("bcrypt");
exports.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("unable to login");
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    throw new Error("wrong Credentials");
  }
  return user;
};
