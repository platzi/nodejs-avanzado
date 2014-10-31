var Io = require('socket.io');

var SocketIO = function(config){
	config = config || {};
	var io = Io.listen(config.server);

	io.sockets.on('connection', function(socket){
		socket.emit('mejorandola', {hola:'soy mejorandola'});

		socket.on('mejorandolo', function(data){
			console.log(data);
		});
	});
}

module.exports = SocketIO;