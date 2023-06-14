const express = require("express");
const expressConfig = require("./config/expressConiguration");
const handlebarsConfig = require("./config/handlebarsConfiguration");
const dbConnect = require("./config/dbConfiguration");

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => {
    console.log("DN connected successfully");
  })
  .catch((err) => {
    console.log("DB error: ", err);
  });

app.use(routes);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
