const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("./config");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan("dev"));

const apiRouter = require("./app/routes/api")(express);
app.use("/api", apiRouter);

app.listen(config.port);

console.log("Running on port " + config.port);

module.exports = app;
