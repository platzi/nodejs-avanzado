 module.exports = function(req, res, next){
 	res.locals.user = {'username':'DiegoUG','status':true};
 	next();
};