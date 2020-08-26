const fs = require('fs');

fs.writeFile(
  './write.txt',
  'I am writing this data to file and this is new data',
  (err) => {
    if (err) {
      console.log('Error while writing to the file', err.message);
      return;
    }

    console.log('File data written successfully');
  }
);
