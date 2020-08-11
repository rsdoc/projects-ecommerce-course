const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const cors = require('cors');

require('dotenv').config();
require('./dbConnection');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(
    chalk.cyan(`Listening at server http://localhost:${process.env.PORT}`)
  );
});
