var Io = require('socket.io');

var SocketIO = function(config){
	config = config || {};
	Io = Io.listen(config.server);
}

SocketIO.prototype.run = function(){
	var self = this;
	Io.sockets.on('connection', function(socket){
		self.canales(socket);
	});
}

SocketIO.prototype.canales = function(socket){
	socket.emit('canal',{hello: 'world'});

	socket.on('otro:canal', function(data){
        console.log(data);
    });
}

module.exports = SocketIO;