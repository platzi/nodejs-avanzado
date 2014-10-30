var cluster = require('cluster');

if (cluster.isMaster){
	var Master = require('./master');
	var master = new Master({cluster:cluster});

	var cpuCunt = require('os').cpus().length;
	console.log(cpuCunt);
	for (var i = 0; i<cpuCunt; i++){
		master.createWorker();
	}

	cluster.on('exit', function(worker){
		master.onWorkerExit(worker);
	});
} else {
	var Workers = require('./workers');
	var workers = new Workers();
	workers.run();
	console.log('worker ' + cluster.worker.id + ' running!');
}