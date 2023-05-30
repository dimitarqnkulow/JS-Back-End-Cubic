const Cube = require("../models/Cube");

exports.getAll = async (search, from, to) => {
  let filteredCubes = await Cube.find().lean();

  //TODO: use mongoose to filter in db
  if (search) {
    filteredCubes = filteredCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }

  if (to) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }
  return filteredCubes;
};

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = async (cubeData) => {
  const newCube = await Cube.create(cubeData);

  return newCube;
};
