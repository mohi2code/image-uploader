const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const v1 = require('./api/v1');

const app = express();

app.use(express.static('public/uploads'))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', v1);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = `Not Found - ${req.url}`;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // console.log(err);
  res.status(err.status || 500);
  res.json({
    type: err.type,
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV == 'development' ? err.stack : undefined
  });
});

module.exports = app;
