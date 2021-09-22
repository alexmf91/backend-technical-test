import express from 'express';

require('dotenv').config();
const debug = require('debug')('backendTechnicalTest');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const droidRouter = require('./src/router/droidRoutes.ts');

server.use('/', droidRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.red(`http://localhost:${port}`)}`)
);
