const jwt = require("jsonwebtoken");

exports.generateToken = async (id) => {
  const token = await jwt.sign({ _id: id.toString() }, process.env.JWT_KEY)

  return token;
};
