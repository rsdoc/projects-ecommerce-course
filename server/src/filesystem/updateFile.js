const fs = require('fs');

fs.appendFile(
  './write.txt',
  'this data is going to be appended to file - write.txt',
  function (err) {
    if (err) {
      console.log('Erro -- ', err.message);
      return;
    }

    console.log('Data appended successfully');
  }
);
