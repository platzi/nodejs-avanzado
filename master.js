 var Master = function(config){
 	config = config || {}
 	this.cluster = config.cluster;
 }

 Master.prototype.createWorker = function(){
 	var worker = this.cluster.fork();
 	console.log('worker ' + worker.id + ' start');
 }

 Master.prototype.onWorkerExit = function(worker){
 	console.log('worker ' + worker.id + ' died');
 	var master = this;
 	setTimeout(function(){
 		master.createWorker();
 	}, 500)
 }

 module.exports = Master;