const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const joinTheater = [...theaterIXX, ...theaterVGC]

  let countEmosi = 0;

  joinTheater.forEach((film) => {
    if (film.hasil === emosi) {
      countEmosi++;
    }
  })

  return countEmosi;

};

module.exports = {
  promiseOutput,
};
