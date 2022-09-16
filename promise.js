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

  checkPromiseIXX.then((result) => {
    let arrIXX = []
    let totalIXX = 0
    let totalVGC = 0
    result.forEach(TheaterIXX = (i, array) => {
      let result = i.hasil
      arrIXX.push(result)
    })

    totalIXX = arrIXX.filter(x => x === param).length;

    checkPromiseVGC.then((result) => {
      let arrVGC = []
      result.forEach(TheaterVGC = (i, array) => {
        let result = i.hasil
        arrVGC.push(result)
      })
  
      totalVGC = arrVGC.filter(x => x === param).length;

      console.log(totalIXX + totalVGC)
    }).catch((error) => {
      console.log(error)
    })

  }).catch((error) => {
    console.log(error)
  })
};

module.exports = {
  promiseOutput,
};
