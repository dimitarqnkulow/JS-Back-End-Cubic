const express = require("express");
const path = require("path");

function expressConfig(app) {
  app.use(express.static(path.resolve(__dirname, "..", "public")));
  app.use(express.urlencoded({ extends: false }));
}

module.exports = expressConfig;
