require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

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

  async function getMovieCast(id) {
    const response = await fetch(
      `${process.env.MOVIESDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US`
    ).then((movieInfo) => {
      return movieInfo;
    });

    const responseJson = response.json();
    return responseJson;
  }

  apiRouter.post("/quiz-generator", function (req, res) {
    // /quiz-generator&movies=
    const { movies } = req.body;
    if (movies) {
      const movie = movies[0];
      const movieInfo = getMovieInfo(movie);
      movieInfo.then(function (result) {
        console.log(result);
      });
      const movieCast = getMovieCast(movie);
      movieCast.then(function (result) {
        console.log(result?.cast[0]);
      });
      // movies.forEach((id) => {
      //   const response = getMovieInfo(id);
      //   response.then(function (result) {
      //     console.log(result);
      //   });
      //   // console.log(id, response);
      // });
    }
    res.json({ message: `bok` });
  });

  return apiRouter;
};
