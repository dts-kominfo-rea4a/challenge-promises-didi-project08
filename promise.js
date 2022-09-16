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
    result.forEach(TheaterIXX = (i, array) => {
      let result = i.hasil
      arrIXX.push(result)
    })

    const emosiTheaterIXX = arrIXX.filter(x => x === param).length;

    checkPromiseVGC.then((result) => {
      let arrVGC = []
      result.forEach(TheaterVGC = (i, array) => {
        let result = i.hasil
        arrVGC.push(result)
      })
  
      const emosiTheaterVGC = arrVGC.filter(x => x === param).length;
      const totalEmosi = (emosiTheaterIXX + emosiTheaterVGC)
      const stringXIIAndVGC = "Jumlah emosi "+param+" ada: "
      
      console.log(stringXIIAndVGC + totalEmosi)
    }).catch((error) => {
      console.log(error)
    })

  }).catch((error) => {
    console.log(error)
  })

};

promiseOutput('marah')
promiseOutput('tidak marah')

module.exports = {
  promiseOutput,
};
