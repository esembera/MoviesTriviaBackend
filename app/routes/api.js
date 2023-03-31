require("dotenv").config();

module.exports = function (express, pool) {
  const apiRouter = express.Router();

  apiRouter.get("/", function (req, res) {
    res.json({ message: "Dobro dosli na nas API!" });
  });

  apiRouter.get("/quiz-generator/:movies", function (req, res) {
    const { movies } = req.params;
    res.json({ message: `bok` });
  });

  return apiRouter;
};
