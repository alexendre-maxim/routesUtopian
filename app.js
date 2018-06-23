var http = require('http');

var fs = require('fs');

var app = require('./app');

var port = 3000;

var server = http.createServer(app);

server.listen(port);
