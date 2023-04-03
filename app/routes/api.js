const questionGenerationHelper = require("../helpers/question-generation.helper");

module.exports = function (express, pool) {
  const apiRouter = express.Router();

  apiRouter.get("/", function (req, res) {
    res.json({ message: "Dobro dosli na nas API!" });
  });

  apiRouter.post("/quiz-generator", function (req, res) {
    const { movies } = req.body;
    if (movies) {
      questionGenerationHelper.generateQuestions(movies).then((data) => {
        // console.log(data);
        // res.json(data);
      });
    }
  });

  return apiRouter;
};
