var Article = function(conf){
	conf = conf || {};
}

Article.prototype.edit = function(res, object){
	res.render('article_edit', object);
}
Article.prototype.list = function(res, object){
	res.render('article_list', object);
}

module.exports = Article; 
