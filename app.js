var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var sponsorsR = require('./api/routes/sponsors');
var contributionsR = require('./api/routes/countributions');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if(req.method === 'OPTIONS'){
	  res.header("Access-Control-Allow-Methods", "*");
	  return res.status(200).json({});
  }
  next();
});

app.use('/sponsors', sponsorsR);
app.use('/contributions', contributionsR);
app.use(function(req, res, next){
	var error = new Error("404 Error");
	error.status = 404;
	next(error);
});

app.use(function(error, req, res, next){
	
	res.status(error.status);
	res.json({
		error :{
		message : error.message
		}
	});
	
});

module.exports = app;
