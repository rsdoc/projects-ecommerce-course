const { Console } = require('console');
// buffer is chunk of data that is being  transferred from one place to other

// streams
// 1. writable  - write data to a stream
// 2. readable - read data from a stream
// 3. duplex - can read and write data to a stream

const fs = require('fs');

// creating  readable stream
// const fileReadStream = fs.createReadStream('./read.txt');
// creating writable streams
// const fileWriteStream = fs.createWriteStream('./write.txt', 'utf-8');

// fileReadStream.on('data', (chunk) => {
//   console.log('new chunk received');
//   //   console.log(chunk);
//   fileWriteStream.write(chunk);
// });

// fileReadStream.on('error', (err) => {
//   console.log('Errror - ', err.message);
// });

// fileReadStream.on('end', () => {
//   console.log('Data reading is over ...');
// });

// now  sending data to res
const express = require('express');

const app = express();

app.get('/data', (req, res) => {
  // request is of type writable stream
  const readStream = fs.createReadStream('./read.txt', 'utf-8');

  //   const readFile = fs.readFileSync('./read.txt', 'utf-8');
  readStream.pipe(res);
  //   res.end(readFile);
});

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
});
