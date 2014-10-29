var modelArticle = require('./shema/article'),
	mongoose = require('mongoose');

var Article = function(conf){
	conf = conf || {}
	this.model = modelArticle;
};

Article.prototype.save =  function(){};
Article.prototype.remove = function(){};
Article.prototype.get = function(query,callback){
	this.model.find(query).exect(function(err,docs){
		callback(docs);
	})
};