 module.exports = function(req, res, next){
 	console.log('Time: %d', Date.now());
 	next();
};