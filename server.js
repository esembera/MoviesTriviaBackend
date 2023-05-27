const express = require("express");
const app = express();
const cors = require("cors");

const comedyQuestions = require("./app/data/comedy-questions");
const thrillerQuestions = require("./app/data/thriller-questions");
const animationQuestions = require("./app/data/animation-questions");
const fantasyQuestions = require("./app/data/fantasy-questions");
const actionQuestions = require("./app/data/action-questions");
const dramaQuestions = require("./app/data/drama-questions");
const romanceQuestions = require("./app/data/romance-questions");
const horrorQuestions = require("./app/data/horror-questions");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

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
