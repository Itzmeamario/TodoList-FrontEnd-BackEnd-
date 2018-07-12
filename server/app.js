var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');
var helmet = require('helmet');

// Router
var router = require('./routes.js');

var app = express();

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

// Added implementation for cross heading
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(helmet());
//npm install and require
// Set up our routes
app.use('/todos', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));
console.log({__dirname});
console.log(__dirname + '/../client');

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


module.exports.app = app;