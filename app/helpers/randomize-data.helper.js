const genres = require("../data/genres");
const prodCompanies = require("../data/prodCompanies");
const directors = require("../data/directors");

let yearBuffer = [];
let genreBuffer = [];
let prodCompaniesBuffer = [];
let directorBuffer = [];
let intBuffer0 = [];
let intBuffer1 = [];
let intBuffer2 = [];

function getRandomYearWithoutCorrectAnswer(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  if (flag != oldFlag) {
    yearBuffer.splice(0, yearBuffer.length);
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || yearBuffer.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  yearBuffer.push(number);
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntWithoutCorrectAnswer1(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  if (flag != oldFlag) {
    intBuffer1.splice(0, intBuffer1.length);
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer1.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  intBuffer1.push(number);
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntWithoutCorrectAnswer0(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  if (flag != oldFlag) {
    intBuffer0.splice(0, intBuffer0.length);
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer0.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  intBuffer0.push(number);
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntWithoutCorrectAnswer2(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  if (flag != oldFlag) {
    intBuffer2.splice(0, intBuffer2.length);
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer2.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  intBuffer2.push(number);
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomGenre(genre, flag, oldFlag) {
  if (flag != oldFlag) {
    genreBuffer.splice(0, genreBuffer.length);
  }
  let randomGenre = genres[Math.floor(Math.random() * genres.length)];
  while (randomGenre == genre || genreBuffer.includes(randomGenre)) {
    randomGenre = genres[Math.floor(Math.random() * genres.length)];
  }
  genreBuffer.push(randomGenre);
  return randomGenre;
}

function getRandomProdCompany(prodCompany, flag, oldFlag) {
  if (flag != oldFlag) {
    prodCompaniesBuffer.splice(0, prodCompaniesBuffer.length);
  }
  let randomProdCompany =
    prodCompanies[Math.floor(Math.random() * prodCompanies.length)];
  while (
    randomProdCompany == prodCompany ||
    prodCompaniesBuffer.includes(randomProdCompany)
  ) {
    randomProdCompany =
      prodCompanies[Math.floor(Math.random() * prodCompanies.length)];
  }
  prodCompaniesBuffer.push(randomProdCompany);
  return randomProdCompany;
}

function shuffleArrayData(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getRandomDirector(director, flag, oldFlag) {
  if (flag != oldFlag) {
    directorBuffer.splice(0, directorBuffer.length);
  }
  let randomDirector = directors[Math.floor(Math.random() * directors.length)];
  while (
    randomDirector == director ||
    directorBuffer.includes(randomDirector)
  ) {
    randomDirector = directors[Math.floor(Math.random() * directors.length)];
  }
  directorBuffer.push(randomDirector);
  return randomDirector;
}

exports.getRandomIntWithoutCorrectAnswer0 = getRandomIntWithoutCorrectAnswer0;
exports.getRandomIntWithoutCorrectAnswer1 = getRandomIntWithoutCorrectAnswer1;
exports.getRandomGenre = getRandomGenre;
exports.getRandomProdCompany = getRandomProdCompany;
exports.shuffleArrayData = shuffleArrayData;
exports.getRandomDirector = getRandomDirector;
exports.getRandomYearWithoutCorrectAnswer = getRandomYearWithoutCorrectAnswer;
exports.getRandomIntWithoutCorrectAnswer2 = getRandomIntWithoutCorrectAnswer2;
