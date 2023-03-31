const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const config = require("./config");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "/public/app"));

app.use(morgan("dev"));

const apiRouter = require("./app/routes/api")(express);
app.use("/api", apiRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/app/index.html"));
});

app.listen(config.port);

console.log("Running on port " + config.port);
