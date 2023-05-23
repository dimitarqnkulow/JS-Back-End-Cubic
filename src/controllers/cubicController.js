const router = require("express").Router();

const cubeManager = require("../manager/cubeManager");
router.get("/create", (req, res) => {
  console.log(cubeManager.getAll());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, dificultyLevel } = req.body;
  cubeManager.create({
    name,
    description,
    imageUrl,
    dificultyLevel: Number(dificultyLevel),
  });
  res.redirect("/");
});
module.exports = router;
