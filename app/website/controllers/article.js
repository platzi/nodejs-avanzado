var ArticleView = require('../views/article'),
	ArticleModel = require('../models/article');

var Article = function(conf){
	this.conf = conf || {};

	this.view = new ArticleView();
	this.model = new ArticleModel();

	this.response = function(){
		this[this.conf.funcionalidad](this.conf.req,this.conf.res,this.conf.next);
	}
}

Article.prototype.post_save = function(req,res,next){
	this.model.save(req.body,function(doc){
		res.redirect('/article/see/' + doc.slug);
	})
}

Article.prototype.get_add = function(req,res,next){
	var object = {nombre:'add'}
	this.view.add(res, object);
}

Article.prototype.get_see_data = function(req,res,next){
	var self = this;
	var object = {nombre:'see'}
	this.model.get({slug:req.params.data},function(doc){
		object.article = doc[0];
		self.view.see(res, object);
	})
}

Article.prototype.get_edit_data = function(req,res,next){
	var object = {nombre:'edit'}
	this.view.edit(res, object);
}

Article.prototype.get_list = function(req,res,next){
	var object = {nombre:'list'}
	this.view.list(res, object);
}

module.exports = Article;