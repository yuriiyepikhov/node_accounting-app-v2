'use strict';

function createServer() {
  const express = require('express');
  const cors = require('cors');

  const { usersRouter } = require('./routers/users.router');
  const { expensesRouter } = require('./routers/expenses.router');
  const { data } = require('./data/data');

  data.users = [];
  data.expenses = [];

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
