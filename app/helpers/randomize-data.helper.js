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

function getRandomIntWithoutCorrectAnswer1(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer1.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  if (flag == oldFlag) {
    intBuffer1.push(number);
  } else {
    intBuffer1.splice(0, intBuffer1.length);
  }
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntWithoutCorrectAnswer0(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer0.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  if (flag == oldFlag) {
    intBuffer0.push(number);
  } else {
    intBuffer0.splice(0, intBuffer0.length);
  }
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntWithoutCorrectAnswer2(
  min,
  max,
  correctNumber,
  flag,
  oldFlag
) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min) + min);
  while (number == correctNumber || intBuffer2.includes(number)) {
    number = Math.floor(Math.random() * (max - min) + min);
  }
  if (flag == oldFlag) {
    intBuffer2.push(number);
  } else {
    intBuffer2.splice(0, intBuffer2.length);
  }
  return number; // The maximum is exclusive and the minimum is inclusive
}

function getRandomGenre(genre, flag, oldFlag) {
  let randomGenre = genres[Math.floor(Math.random() * genres.length)];
  while (randomGenre == genre || genreBuffer.includes(randomGenre)) {
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
  let randomDirector = directors[Math.floor(Math.random() * genres.length)];
  while (
    randomDirector == director ||
    directorBuffer.includes(randomDirector)
  ) {
    randomDirector = directors[Math.floor(Math.random() * directors.length)];
  }
  if (flag == oldFlag) {
    directorBuffer.push(number);
  } else {
    directorBuffer.splice(0, directorBuffer.length);
  }
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
