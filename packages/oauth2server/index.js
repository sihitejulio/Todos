const express = require('express');
const fs = require('fs')
const iniParser = require('./libs/iniParser')
const args = require('minimist')(process.argv.slice(2));
const bodyParser = require('body-parser')

let app = express();

// Timezone
process.env.TZ = 'Asia/Jakarta'


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/oauth')(app)


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
  
  
  module.exports = app;