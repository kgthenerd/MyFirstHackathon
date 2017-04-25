var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('This RESTful API has started on:  ' + port);