const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.checkAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json("Authorization  required");
    }
    const auth_token = authorization.replace("Bearer ", "");
    const decoded_value = await jwt.verify(auth_token, process.env.JWT_KEY);

    const user = await User.findOne({
      _id: decoded_value._id,
      "tokens.token": auth_token,
    });

    if (!user) {
      return res.status(401).json("Authorization  required");
    }
    req.token = auth_token;
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json("Authorization  required");
  }
};
