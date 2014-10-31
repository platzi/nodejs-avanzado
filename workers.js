var http = require('http'),
	conf = require('./conf'),
	mongoose = require('mongoose'),
	expressServer = require('./app/expressServer'),
	socketIO = require('./app/socketIO');

var Workers = function(config){
	config = config || {}

	mongoose.connect('mongodb://' + conf.mongoDB.host + '/' + conf.mongoDB.name);

	var app = new expressServer();

	this.server = http.createServer(app.expressServer);

	var Io = new socketIO({server:this.server});
}

Workers.prototype.run = function(){
	this.server.listen(conf.port);
}

if(module.parent){
	module.exports = Workers;
} else {
	new Workers();
	console.log('debugger');
}