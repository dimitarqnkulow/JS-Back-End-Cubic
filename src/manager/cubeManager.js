const uniqid = require("uniqid");

const cubes = [
  {
    id: "c8kij4cli0rde4o",
    name: "Original Rubik",
    description: "3x3",
    imageUrl: "https://i.ebayimg.com/images/g/i5IAAOSwgyxWVOIQ/s-l1600.jpg",
    difficultyLevel: 3,
  },
  {
    id: "c8kij54li0r2xm2",
    name: "Pyramid",
    description: "Sequential Movement",
    imageUrl: "https://m.media-amazon.com/images/I/61cJE0vAo1L.jpg",
    difficultyLevel: 4,
  },
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find((x) => x.id == cubeId);

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  cubes.push(newCube);

  return newCube;
};
