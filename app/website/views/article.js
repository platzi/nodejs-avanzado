var Article = function(conf){
	conf = conf || {};
}

Article.prototype.see = function(res, object){
	res.render('article_see', object);
}
Article.prototype.add = function(res, object){
	res.render('article_add', object);
}
Article.prototype.edit = function(res, object){
	res.render('article_edir', object);
}
Article.prototype.list = function(res, object){
	res.render('article_list', object);
}

module.exports = Article; 
