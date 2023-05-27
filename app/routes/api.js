const questionGenerationHelper = require("../helpers/question-generation.helper");
const comedyQuestions = require("../data/comedy-questions");
const thrillerQuestions = require("../data/thriller-questions");
const animationQuestions = require("../data/animation-questions");
const fantasyQuestions = require("../data/fantasy-questions");
const actionQuestions = require("../data/action-questIons");
const dramaQuestions = require("../data/drama-questions");
const romanceQuestions = require("../data/romance-questions");
const horrorQuestions = require("../data/horror-questions");

module.exports = function (express, pool) {
  const apiRouter = express.Router();

  apiRouter.get("/", function (req, res) {
    res.json({ message: "Welcome to our API!" });
  });

  apiRouter.post("/quiz-generator", function (req, res) {
    const { movies } = req.body;
    // console.log(req.body);
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (movies) {
      questionGenerationHelper
        .generateQuestions(movies, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/comedy", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = comedyQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/thriller", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = thrillerQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/animation", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = animationQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/fantasy", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = fantasyQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/action", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = actionQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/drama", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = dramaQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/romance", function (req, res) {
    const { numberOfQuestions } = req.body;
    // console.log(numberOfQuestions);
    if (numberOfQuestions) {
      questions = romanceQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });

  apiRouter.post("/horror", function (req, res) {
    const { numberOfQuestions } = req.body;
    console.log(req.body);
    if (numberOfQuestions) {
      questions = horrorQuestions;
      questionGenerationHelper
        .generatePremadeQuestions(questions, numberOfQuestions)
        .then((data) => {
          // console.log(data);
          res.json(data);
        });
    }
  });
  return apiRouter;
};
