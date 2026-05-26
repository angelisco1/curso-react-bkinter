// CALLBACKS
// const fs = require('fs')

// fs.readFile('1.txt', (err, data) => {
//   console.log(data.toString())

//   fs.readFile('2.txt', (err, data) => {
//     console.log(data.toString())

//     console.log('FIN')
//   })
// })


// PROMISES
// const fs = require('fs/promises')

// const promesa1 = fs.readFile('1.txt')
// const promesa2 = fs.readFile('2.txt')

// promesa1
//   .then(data => {
//     console.log(data.toString())
//     return promesa2
//   })
//   .then(data => {
//     console.log(data.toString())
//   })
//   .finally(() => {
//     console.log('FIN')
//   })


// ASYNC/AWAIT = PROMISES
const fs = require('fs/promises')

const leerArchivos = async () => {
  const data1 = await fs.readFile('1.txt')
  console.log(data1.toString())
  
  const data2 = await fs.readFile('2.txt')
  console.log(data2.toString())
  
  console.log('FIN')
}

leerArchivos()