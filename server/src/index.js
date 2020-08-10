const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(
    chalk.cyan(`Lsitening at server http://localhost:${process.env.PORT}`)
  );
});
