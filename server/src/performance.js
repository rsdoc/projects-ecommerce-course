// starting node in cluster mode - to improve the performance
// i.e trying to run the multiple event loop
// i.e. running node js in cluster mode
const express = require('express');

const cluster = require('cluster');

// cluster mode depends on number of cpus
const os = require('os');

// console.log(os.cpus().length);

if (cluster.isMaster) {
  // just testing
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(1000); // 5sec
    res.json({ message: 'Hello to the world' });
  });

  app.get('/fast', (req, res) => {
    res.json({ message: 'Hello I am fast' });
  });

  app.listen(4000, () => {
    console.log('I  am server which needs to improve the performance');
  });
}
