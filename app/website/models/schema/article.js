var mongoose = require('mongoose'),
	 Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {type:String, require:true},
	slug: {type:String, require:true},
	content: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;