const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const cors = require('cors');
const http = require('http');
const jwt = require('jsonwebtoken');

require('dotenv').config();
// require('./dbConnection');

const app = express();

// now creating http server
const httpServer = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./routes'));

app.use('/user/validate', (req, res) => {
  // verify user information
  // create token
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        // all user info
        firstName: 'John',
      },
    },
    'i am secret - add hash'
  );
  console.log('i am hit', token);
  res.json({ token });
});

app.use('/user/profile', async (req, res) => {
  try {
    var decoded = await jwt.verify(req.headers.token, 'i am secret - add hash');
    console.log(decoded);
    res.json({});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

httpServer.listen(process.env.PORT, () => {
  console.log(
    chalk.cyan(`Listening at server http://localhost:${process.env.PORT}`)
  );
});
