const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var APIRouter = require('./routes/ServerAPI');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (app.get('env') == 'development') {
  // This will change in production since we'll be using the dist folder
  console.log(path.join(__dirname, '../client/public'));
  app.use(express.static(path.join(__dirname, '../client/public')));
  // This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client/src/App')));
  app.use(express.static(path.join(__dirname, '../client/src')));
}

else if (app.get('env') == 'production') {
  // changes it to use the optimized version for production
  app.use(express.static(path.join(__dirname, '../client/build')));
}

else if (app.get('env') == 'test') {
  // changes it to use the optimized version for production
  app.use(express.static(path.join(__dirname, './public')));
}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', APIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
