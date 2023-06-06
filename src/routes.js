const router = require("express").Router();

const homeController = require("./controllers/homeController");
const cubicController = require("./controllers/cubicController");
const accessoryController = require("./controllers/accessoryController");
const userController = require("./controllers/usersController");
router.use(homeController);
router.use("/cubes", cubicController);
router.use("/accessories", accessoryController);
router.use("/users", userController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
