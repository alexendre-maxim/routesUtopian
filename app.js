var express = require('express');

var app = express();

var sponsorsR = require('./api/routes/sponsors');
var contributionsR = require('./api/routes/countributions');

app.use('/sponsors', sponsorsR);
app.use('/contributions', contributionsR);

module.exports = app;
