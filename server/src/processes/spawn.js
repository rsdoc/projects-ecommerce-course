const { spawn } = require('child_process');

const scp = spawn('pwd');

// console.log()
scp.stdout.on('data', (message) => {
  // here  message will be buffer
  console.log('Message from child ...', message.toString());
});

// console.err()
scp.stderr.on('data', (message) => {
  console.log('Error Message from child ...', message.toString());
});

scp.on('close', (msg) => {
  console.log('Close child process ', msg);
});
