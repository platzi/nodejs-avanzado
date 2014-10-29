var http = require('http'),
	conf = require('./conf'),
	mongoose = require('mongoose'),
	expressServer = require('./app/expressServer');

mongoose.connect('mongodb://' + conf.mongoDB.host + '/' + conf.mongoDB.name)

var app = new expressServer();

var server = http.createServer(app.expressServer);
server.listen(conf.port);