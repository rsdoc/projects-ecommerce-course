// there are four way to create child processes
// spawn(), fork(), exec(), execFile()

// spawn - creates other process in same v8 engine
// fork - creates child process in other v8 engine
// exec -
// - buffer 200k
// execFile -

// child processes helps execute system commands inside child process.
// whenever you use spawn, you lanuch the instance of child_process

// child process instances extends EventEmitter

// fork
const { fork } = require('child_process');

const cp = fork('otherModule.js');

cp.send({ hello: 'world' });

cp.on('message', (msg) => {
  console.log('Message from child', msg);
});

cp.on('exit', (message) => {
  console.log('CP terminated', message);
});

console.log('Process id of current forked child ', cp.pid);

// kill child process
// cp.kill()
// verify status of child process - cp.killed
// process.kill(pid)
