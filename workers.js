var http = require('http'),
	conf = require('./conf'),
	mongoose = require('mongoose'),
	expressServer = require('./app/expressServer'),
	socketIO = require('./app/socketIO');

var Worker = function(config){
	config = config || {}

	mongoose.connect('mongodb://' + conf.mongoDB.host + '/' + conf.mongoDB.name);

	var app = new expressServer();
	this.server = http.createServer(app.expressServer);
	this.Io = new socketIO({server:this.server});
}

Worker.prototype.run = function(){
	this.server.listen(conf.port);
	this.Io.run();
}

if (module.parent){
	module.exports = Worker;
} else {
	var Worker = new Worker();
	Worker.run();
	console.log('debugger');
}

