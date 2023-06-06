const jwt = require("../lib/jwt");
const { SECRET } = require("../config/configuration");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (token) {
    //validate token
    try {
      const user = await jwt.verify(token, SECRET);
      req.user = user;
      next();
    } catch (error) {
      res.clearCookie("auth");
      return res.redirect("/users/login");
    }
  } else {
    next();
  }
};
