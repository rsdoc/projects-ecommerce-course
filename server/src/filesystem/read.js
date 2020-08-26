const fs = require('fs');

// let content = fs.readFileSync('./read.txt');

fs.readFile('./read.txt', 'utf-8', function (err, content) {
  if (err) {
    console.log('File content ... ', err.message);
    return;
  }
  //   console.log(content.toString());
  console.log(content);
});
