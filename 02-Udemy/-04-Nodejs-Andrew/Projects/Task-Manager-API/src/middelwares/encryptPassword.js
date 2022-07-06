const bcrypt = require("bcrypt");

exports.encryptPassword = async (req, res, next) => {
  if (!req.body.password) {
    return next();
  }

  const encryptedPassword = await bcrypt.hash(req.body.password, 8);
  req.body.password = encryptedPassword;
  next();
};
