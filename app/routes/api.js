require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let movieCastInfo;

let today = new Date();

let yearBuffer = [];
let genreBuffer = [];
let prodCompaniesBuffer = [];

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const prodCompanies = [
  "Universal Pictures",
  "Paramount Pictures",
  "MRC",
  "Fuzzy Door Productions",
  "Warner Bros. Pictures",
  "Marvel Studios",
  "Walt Disney Pictures",
  "20th Century Studios",
  "New Line Cinema",
  "Columbia Pictures",
  "Lionsgate Films",
  "Metro-Goldwyn-Mayer",
  "DreamWorks Animation",
  "Lucasfilm",
  "Blue Sky Studios",
  "Thunder Road",
];

module.exports = function (express, pool) {
  const apiRouter = express.Router();

  apiRouter.get("/", function (req, res) {
    res.json({ message: "Dobro dosli na nas API!" });
  });

  async function getMovieInfo(id) {
    const response = await fetch(
      `${process.env.MOVIESDB_BASE_URL}/movie/${id}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US`
    ).then((movieInfo) => {
      return movieInfo;
    });

    const responseJson = response.json();

    return responseJson;
  }

  function getRandomIntWithoutCorrectAnswer(
    min,
    max,
    correctNumber,
    flag,
    oldFlag
  ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min) + min);
    while (number == correctNumber || yearBuffer.includes(number)) {
      number = Math.floor(Math.random() * (max - min) + min);
    }
    if (flag == oldFlag) {
      yearBuffer.push(number);
    } else {
      yearBuffer.splice(0, yearBuffer.length);
    }
    return number; // The maximum is exclusive and the minimum is inclusive
  }

  async function getMovieCast(id) {
    const response = await fetch(
      `${process.env.MOVIESDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US`
    ).then((movieInfo) => {
      return movieInfo;
    });

    const responseJson = response.json();
    return responseJson;
  }
  function getRandomGenre(genre, flag, oldFlag) {
    let randomGenre = genres[Math.floor(Math.random() * genres.length)];
    while (randomGenre == genre || yearBuffer.includes(randomGenre)) {
      randomGenre = genres[Math.floor(Math.random() * genres.length)];
    }
    if (flag == oldFlag) {
      genreBuffer.push(number);
    } else {
      genreBuffer.splice(0, genreBuffer.length);
    }
    return randomGenre;
  }

  function getRandomProdCompany(prodCompany, flag, oldFlag) {
    let randomProdCompany =
      prodCompanies[Math.floor(Math.random() * prodCompanies.length)];
    while (
      randomProdCompany == prodCompany ||
      prodCompaniesBuffer.includes(randomProdCompany)
    ) {
      randomProdCompany =
        prodCompanies[Math.floor(Math.random() * prodCompanies.length)];
    }
    if (flag == oldFlag) {
      prodCompaniesBuffer.push(number);
    } else {
      prodCompaniesBuffer.splice(0, prodCompaniesBuffer.length);
    }
    return randomProdCompany;
  }

  async function generateQuestions(data) {
    let flag = false;
    let oldFlag = false;
    let questions = [];
    for (let info of data) {
      const movieInfo = await getMovieInfo(info);
      const movieCastInfo = await getMovieCast(info);
      flag = !flag;
      let question = {
        question: `What year was the movie "${movieInfo?.original_title}" released?`,
        correctAnswer: `${movieInfo?.release_date?.split("-")[0]}`,
        wrongAnswers: [
          getRandomIntWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          ).toString(),
          getRandomIntWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          ).toString(),
          getRandomIntWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          ).toString(),
        ],
      };
      questions.push(question);
      // console.log(movieInfo?.genres[0]?.name);
      question = {
        question: `What is the main genre of the movie "${movieInfo?.original_title}"?`,
        correctAnswer: `${movieInfo?.genres[0]?.name}`,
        wrongAnswers: [
          getRandomGenre(`${movieInfo?.genres[0]?.name}`, flag, oldFlag),
          getRandomGenre(`${movieInfo?.genres[0]?.name}`, flag, oldFlag),
          getRandomGenre(`${movieInfo?.genres[0]?.name}`, flag, oldFlag),
        ],
      };
      questions.push(question);
      question = {
        question: `Who is the main actor in the movie "${movieInfo?.original_title}"?`,
        correctAnswer: `${movieCastInfo.cast[0].original_name}`,
        wrongAnswers: [
          `${movieCastInfo.cast[3].original_name}`,
          `${movieCastInfo.cast[4].original_name}`,
          `${movieCastInfo.cast[5].original_name}`,
        ],
      };
      questions.push(question);
      question = {
        question: `What is the main production company for the movie "${movieInfo?.original_title}"`,
        correctAnswer: `${movieInfo?.production_companies[0]?.name}`,
        wrongAnswers: [
          getRandomProdCompany(
            `${movieInfo?.production_companies[0]?.name}`,
            flag,
            oldFlag
          ),
          getRandomProdCompany(
            `${movieInfo?.production_companies[0]?.name}`,
            flag,
            oldFlag
          ),
          getRandomProdCompany(
            `${movieInfo?.production_companies[0]?.name}`,
            flag,
            oldFlag
          ),
        ],
      };
      questions.push(question);
      // console.log(questions);
      oldFlag = flag;
    }
    return questions;
  }

  apiRouter.post("/quiz-generator", function (req, res) {
    // /quiz-generator&movies=
    const { movies } = req.body;
    if (movies) {
      generateQuestions(movies).then((data) => {
        console.log(data);
        // res.json(data);
      });
    }
  });

  return apiRouter;
};
