// starting node in cluster mode - to improve the performance
// i.e trying to run the multiple event loop
// i.e. running node js in cluster mode
const express = require('express');

// cluster module
const cluster = require('cluster');

// try to find the number of cpus
const os = require('os');

// console.log(os.cpus().length); // we can run that number of child processes

// check if cluster is master
// console.log(cluster.isMaster);

if (cluster.isMaster) {
  // causes index.js to be executed in child mode
  cluster.fork();
  // cluster.fork();
} else {
  // run all server code here - child mode
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000); // 5sec
    res.json({ message: 'Hello to the world' });
  });

  app.get('/fast', (req, res) => {
    res.json({ message: 'Hello I am fast' });
  });

  app.listen(4000, () => {
    console.log('I  am server which needs to improve the performance');
  });
}
