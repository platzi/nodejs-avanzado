 var ArticleView = require('../views/article'),
     ArticleModel = require('../models/article');

 var Article = function(conf){
    this.conf = conf || {};

    this.view = new ArticleView();
    this.model = new ArticleModel();

    this.response = function(){
        this[this.conf.resource](this.conf.req,this.conf.res,this.conf.next);
    }
 }

 Article.prototype.post_save = function(req, res, next){
    res.send('POST POST')
 }

 Article.prototype.post_remove = function(req, res, next){
    res.send('POST POST');
 }

 Article.prototype.get_see_data = function(req, res, next){
    this.view.see(res,{});
 }

 Article.prototype.get_edit_data = function(req, res, next){
    this.view.edit(res,{});
 }

 Article.prototype.get_list = function(req, res, next){
    this.model.get({},function(docs){
        object = {articles:docs}
        this.view.list(res,object);
    })
 }

 module.exports = Article;