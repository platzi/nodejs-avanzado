 var Article = function(conf){
    this.conf = conf || {};
 }

 Article.prototype.see = function(res,object){
    res.render('article_see',object);
 }

 Article.prototype.edit = function(res,object){
    res.render('article_edit',object);
 }

 Article.prototype.list = function(res,object){
    res.render('article_list',object);
 }

 module.exports = Article; 
