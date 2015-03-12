// // Set up
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var dir = path.resolve(__dirname + '/client');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

// Routes

app.get('*', function(req, res, next) {
  console.log('derp');
  res.sendFile(__dirname + '/client/index.html');
  res.end();
})

app.listen(app.get('port'), function(){
  console.log('listening on port:' + app.get('port'));
});

module.exports = app;
