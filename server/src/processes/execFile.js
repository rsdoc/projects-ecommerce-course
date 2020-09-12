const execFile = require('child_process').execFile;

// execFile execepts an argument
execFile('ls', ['-ltr'], (err, stdout, stderr) => {
  if (err instanceof Error) {
    console.error(err);
    throw err;
  }

  console.log('stdout ', stdout);
  //   console.log('stderr ', stderr);
});
