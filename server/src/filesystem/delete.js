// file system - read write update delete rename
const fs = require('fs');

// 1. sync and async way
// fs.unlinkSync('./delete.txt');

// 2. async way of deleting file
// fs.unlink('./delete.txt', function (err, res) {
//   if (err) {
//     console.log('File deletion error', err.message);
//     return;
//   }

//   console.log('file deleted successfully ', res);
// });

console.log('file is deleted');
