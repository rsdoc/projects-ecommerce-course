const exec = require('child_process').exec;

// linux commands
exec('ls -l ../', (err, stdout, stderr) => {
  if (err instanceof Error) {
    console.error(err);
    throw err;
  }

  console.log('stdout ', stdout); // typeof
  console.log('stderr ', stderr);
});
