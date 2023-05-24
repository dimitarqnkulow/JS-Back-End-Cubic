const router = require("express").Router();

const homeController = require("./controllers/homeController");
const cubicController = require("./controllers/cubicController");

router.use(homeController);
router.use("/cubes", cubicController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
