const router = require("express").Router();
const cubeManager = require("../manager/cubeManager");
const accessoryManager = require("../manager/accessoryManager");
const { difficultyOptions } = require("../utils/optionsHelper");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeManager
    .getOneWithAccessories(req.params.cubeId)
    .lean();

  if (!cube) {
    return res.redirect("/404");
  }

  const isOwner = cube.owner == req.user._id;

  res.render("cube/details", { cube, isOwner });
});

router.get("/create", isAuth, (req, res) => {
  console.log(req.user);
  res.render("cube/create");
});

router.post("/create", isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });
  res.redirect("/");
});

router.get("/:cubeId/attach-accessory", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager
    .getRestOfAccessories(cube.accessories)
    .lean();

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", isAuth, { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", isAuth, async (req, res) => {
  const { accessory: accessoryId } = req.body;
  const cubeId = req.params.cubeId;

  await cubeManager.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/:cubeId/delete", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const options = difficultyOptions(cube.difficultyLevel);
  res.render("cube/delete", { cube, options });
});

router.post("/:cubeId/delete", isAuth, async (req, res) => {
  const cubeId = req.params.cubeId;
  await cubeManager.deleteCube(cubeId);
  res.redirect("/");
});

router.get("/:cubeId/edit", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const options = difficultyOptions(cube.difficultyLevel);
  res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", isAuth, async (req, res) => {
  const cubeData = req.body;
  const cubeId = req.params.cubeId;
  await cubeManager.updateCube(cubeId, cubeData);

  res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;
