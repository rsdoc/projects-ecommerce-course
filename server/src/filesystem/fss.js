const fs = require('fs');
const path = require('path');

// create read delete update

// delete files
// fs.unlinkSync('./delete.txt'); // sync code
// fs.unlink();

// read file
// fs.readFileSync('./read.txt', { encoding: 'utf8' })
// fs.readFile('./read.txt', { encoding: 'utf8' }, cb)

// write
fs.appendFile(
  './shobhit.txt',
  'I am shobhit and i am champ andn new data and appended data',
  function (err, res) {
    if (err) {
      console.log('found err ', err.message);
      return;
    }

    console.log('write data successfully');
  }
); // async code

console.log('I will be called after above operation');
