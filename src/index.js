const express = require("express");
const handlebars = require("express-handlebars");

const expressConfig = require("./config/expressConiguration");
const handlebarsConfig = require("./config/handlebarsConfiguration");
const homeController = require("./controllers/homeController");
const cubicController = require("./controllers/cubicController");

const app = express();
const PORT = 5000;

//Configuration
expressConfig(app);
handlebarsConfig(app);

//Routes
app.use(homeController);
app.use("/cubes", cubicController);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
