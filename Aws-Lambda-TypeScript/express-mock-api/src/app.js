const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');
require('dotenv').config();

const routeHandle = require('./routes/index.js');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

// Enable CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/', routeHandle);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // send the error response
  res.status(err.status || 500);
  if (err.status === 401)
    res.send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=/auth"></head></html>');
  else res.send(err.message);
});

module.exports = app;
