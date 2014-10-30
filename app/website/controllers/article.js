var Article = function(conf){
	this.conf = conf || {};
	this.response = function(){
		this[this.conf.funcionalidad](this.conf.req,this.conf.res,this.conf.next);
	}
}

Article.prototype.get_add = function(req,res,next){
	res.render('article_see',{nombre:'add'})
}

Article.prototype.get_edit_data = function(req,res,next){
	res.render('article_see',{nombre:'edit'});
}

Article.prototype.get_list = function(req,res,next){
	res.render('article_see',{nombre:'list'});
}

module.exports = Article;