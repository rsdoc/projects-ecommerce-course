const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const cors = require('cors');
const socketIO = require('socket.io');
const http = require('http');

require('dotenv').config();
// require('./dbConnection');

const app = express();

// now creating http server
const httpServer = http.createServer(app);
const io = socketIO(httpServer);

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// app.use(require('./routes'));

/**
 * Socket Code
 */
io.on('connection', (socket) => {
  console.log('client connected', socket.id);

  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(
    chalk.cyan(`Listening at server http://localhost:${process.env.PORT}`)
  );
});
