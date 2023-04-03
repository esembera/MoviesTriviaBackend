require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const randomizeDataHelper = require("../helpers/randomize-data.helper");

const today = new Date();

async function getMovieInfo(id) {
  const response = await fetch(
    `${process.env.MOVIESDB_BASE_URL}/movie/${id}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US`
  ).then((movieInfo) => {
    return movieInfo;
  });

  const responseJson = response.json();

  return responseJson;
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

function getMovieDirector(crew) {
  var director = "";
  crew.forEach((member) => {
    if (member.job == "Director") {
      //   console.log(member.name);
      director = member.name;
    }
  });
  return director;
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
        randomizeDataHelper
          .getRandomYearWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          )
          .toString(),
        randomizeDataHelper
          .getRandomYearWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          )
          .toString(),
        randomizeDataHelper
          .getRandomYearWithoutCorrectAnswer(
            parseInt(movieInfo?.release_date?.split("-")[0]) - 10,
            Math.min(
              parseInt(movieInfo?.release_date?.split("-")[0]) + 10,
              today.getFullYear()
            ),
            parseInt(movieInfo?.release_date?.split("-")[0]),
            flag,
            oldFlag
          )
          .toString(),
      ],
    };
    questions.push(question);
    // console.log(movieInfo?.genres[0]?.name);
    question = {
      question: `What is the main genre of the movie "${movieInfo?.original_title}"?`,
      correctAnswer: `${movieInfo?.genres[0]?.name}`,
      wrongAnswers: [
        randomizeDataHelper.getRandomGenre(
          `${movieInfo?.genres[0]?.name}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomGenre(
          `${movieInfo?.genres[0]?.name}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomGenre(
          `${movieInfo?.genres[0]?.name}`,
          flag,
          oldFlag
        ),
      ],
    };
    questions.push(question);
    question = {
      question: `Who is the main actor in the movie "${movieInfo?.original_title}"?`,
      correctAnswer: `${movieCastInfo.cast[0].original_name}`,
      wrongAnswers: [
        `${
          movieCastInfo.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer0(
              0,
              movieCastInfo.cast.length,
              0,
              flag,
              oldFlag
            )
          ].original_name
        }`,
        `${
          movieCastInfo.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer0(
              0,
              movieCastInfo.cast.length / 2,
              0,
              flag,
              oldFlag
            )
          ].original_name
        }`,
        `${
          movieCastInfo.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer0(
              0,
              movieCastInfo.cast.length / 2,
              0,
              flag,
              oldFlag
            )
          ].original_name
        }`,
      ],
    };
    questions.push(question);
    question = {
      question: `What is the main production company for the movie "${movieInfo?.original_title}"?`,
      correctAnswer: `${movieInfo?.production_companies[0]?.name}`,
      wrongAnswers: [
        randomizeDataHelper.getRandomProdCompany(
          `${movieInfo?.production_companies[0]?.name}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomProdCompany(
          `${movieInfo?.production_companies[0]?.name}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomProdCompany(
          `${movieInfo?.production_companies[0]?.name}`,
          flag,
          oldFlag
        ),
      ],
    };
    questions.push(question);
    question = {
      question: `Who is the director of the movie "${movieInfo?.original_title}"?`,
      correctAnswer: `${getMovieDirector(movieCastInfo.crew)}`,
      wrongAnswers: [
        randomizeDataHelper.getRandomDirector(
          `${getMovieDirector(movieCastInfo.crew)}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomDirector(
          `${getMovieDirector(movieCastInfo.crew)}`,
          flag,
          oldFlag
        ),
        randomizeDataHelper.getRandomDirector(
          `${getMovieDirector(movieCastInfo.crew)}`,
          flag,
          oldFlag
        ),
      ],
    };
    questions.push(question);
    question = {
      question: `What character does ${movieCastInfo?.cast[0]?.name} play in the movie "${movieInfo?.original_title}"`,
      correctAnswer: `${movieCastInfo?.cast[0].character}`,
      wrongAnswers: [
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer1(
              0,
              movieCastInfo.cast.length / 2,
              0,
              flag,
              oldFlag
            )
          ].character
        }`,
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer1(
              0,
              movieCastInfo.cast.length / 2,
              0,
              flag,
              oldFlag
            )
          ].character
        }`,
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer1(
              0,
              movieCastInfo.cast.length / 2,
              0,
              flag,
              oldFlag
            )
          ].character
        }`,
      ],
    };
    questions.push(question);
    question = {
      question: `What character does ${movieCastInfo?.cast[1]?.name} play in the movie "${movieInfo?.original_title}"`,
      correctAnswer: `${movieCastInfo?.cast[1].character}`,
      wrongAnswers: [
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer2(
              0,
              movieCastInfo.cast.length / 2,
              1,
              flag,
              oldFlag
            )
          ].character
        }`,
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer2(
              0,
              movieCastInfo.cast.length / 2,
              1,
              flag,
              oldFlag
            )
          ].character
        }`,
        `${
          movieCastInfo?.cast[
            randomizeDataHelper.getRandomIntWithoutCorrectAnswer2(
              0,
              movieCastInfo.cast.length / 2,
              1,
              flag,
              oldFlag
            )
          ].character
        }`,
      ],
    };
    questions.push(question);
    console.log(questions);
    oldFlag = flag;
  }
  questions = randomizeDataHelper.shuffleArrayData(questions);
  //   console.log(questions);
  return questions;
}

exports.generateQuestions = generateQuestions;
