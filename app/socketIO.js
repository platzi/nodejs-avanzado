var Io = require('socket.io'),
	app_user = {};

var SocketIO = function(config){
	config = config || {};
	var io = Io.listen(config.server);

	io.sockets.on('connection', function(socket){
		socket.join('some::room');

		socket.emit('mejorandola', {hola:'soy mejorandola'});

		socket.on('mejorandolo', function(data){
			console.log(data);
		});

		socket.on('app_user',function(user){
			app_user[user.id] = user
		});

		socket.on('disconnect', function(){
			delete app_user[socket.store.id];
		})
	});
}

module.exports = SocketIO;