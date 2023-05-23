const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const expressConfig = require("./config/expressConiguration");
const handlebarsConfig = require("./config/handlebarsConfiguration");

const app = express();
const PORT = 5000;

//Configuration
expressConfig(app);
handlebarsConfig(app);

//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
