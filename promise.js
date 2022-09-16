const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (param) => {
  const resultIXX = promiseTheaterIXX()
  const resultVGC = promiseTheaterVGC()
  const checkPromiseVGC = new Promise((resolve, reject) => {
    (resultVGC === null) ? reject("Data tidak ditemukan !") : resolve(resultVGC)
  })
  const checkPromiseIXX = new Promise((resolve, reject) => {
    (resultIXX === null) ? reject("Data tidak ditemukan !") : resolve(resultIXX)
  })

  let totalIXX = 0
  let totalVGC = 0

  checkPromiseIXX.then((result) => {
    let arrIXX = []
    result.forEach(TheaterIXX = (i, array) => {
      let result = i.hasil
      arrIXX.push(result)
    })

    totalIXX = arrIXX.filter(x => x === param).length;
  }).catch((error) => {
    console.log(error)
  })

  checkPromiseVGC.then((result) => {
    let arrVGC = []
    result.forEach(TheaterVGC = (i, array) => {
      let result = i.hasil
      arrVGC.push(result)
    })

    totalVGC = arrVGC.filter(x => x === param).length;
  }).catch((error) => {
    console.log(error)
  })

  setTimeout(function(){
    console.log(totalIXX+totalVGC)
  },300)
};

module.exports = {
  promiseOutput,
};
