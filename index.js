const serverless = require('serverless-http');
const express = require('express');
const app = express();
const DB = require('./services/databaseRepository');

app.get('/', function(req, res) {
  // eslint-disable-next-line no-console
  console.info('NODE_ENV: ' + process.env.NODE_ENV);
  res.send('Hello World!');
});

app.get('/GetOrders/:to/:from', async function(req, res) {
  let to = req.params.to;
  let from = req.params.from;

  let db = new DB();
  let result = db
    .GetOrders(to, from)
    .then(result => {
      res.status(200).json(result);
    })
    .catch((err, result) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports.handler = serverless(app);
