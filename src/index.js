const express = require("express");
const handlebars = require("express-handlebars");

const expressConfig = require("./config/expressConiguration");
const handlebarsConfig = require("./config/handlebarsConfiguration");

const routes = require("./routes");
const app = express();
const PORT = 5000;

//Configuration
expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
