var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title       : { type: String, required: true},
    slug        : { type: String, required: true},
    content     : String,
});

articleSchema.path('title').validate(function(val){
    return val.length > 70;
});

Article = mongoose.model('Article', articleSchema);

module.exports = Article;