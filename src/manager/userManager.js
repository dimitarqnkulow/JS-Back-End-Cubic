const jwt = require("../lib/jwt");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { SECRET } = require("../config/configuration");

exports.register = (userData) => {
  User.create(userData);
};

exports.login = async (username, password) => {
  //TODO find user
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Cannot find username or password");
  }
  //TODO validate password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Cannot find username or password");
  }
  //return user
  const payload = {
    _id: user._id,
    username: user.username,
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: "3d" });
  return token;
};
