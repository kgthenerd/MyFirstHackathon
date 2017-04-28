var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var AppModel = require('./api/models/WIMDModel');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
// For local deployment change this to mongoose.connect('mongodb://localhost/DriverDB');
mongoose.connect('mongodb://database/DriverDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/WIMDRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('This RESTful API has started on:  ' + port);

if (process.env.NODE_ENV !== 'test') {
  app.use(logger);
}

module.exports = app;