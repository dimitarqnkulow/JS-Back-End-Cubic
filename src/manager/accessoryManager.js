const Accessory = require("../models/Accessory");

exports.create = async (accessoryData) => {
  const newAccessory = await Accessory.create(accessoryData);
  return newAccessory;
};
