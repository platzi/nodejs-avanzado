var modelArticle = require('./schema/article'),
	mongoose = require('mongoose');

var Article = function(conf){
	conf = conf || {};
	this.model = modelArticle;
}

Article.prototype.get = function(query,callback){
	this.model.find(query).exec(function(err,doc){
		callback(doc)
	})
}

module.exports = Article; 