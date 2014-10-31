var cluster = require('cluster');

if (cluster.isMaster){
	var Master = require('./master');
	var master = new Master({cluster:cluster});

	var cpuCount = require('os').cpus().length;

	for(var i = 0; i < cpuCount; i++){
		master.createWorker();
	}

	cluster.on('exit', function(worker){
		console.log('worker ' + worker.id + '  died');
		master.onWorkerExit();
	})

} else {
	var Workers = require('./workers');
	var workers = new Workers();
	workers.run();

	console.log('worker ' + cluster.worker.id + '  running!');
}