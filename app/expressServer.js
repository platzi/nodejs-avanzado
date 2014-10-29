var express = require('express'),
    swig = require('swig'),
    middlewares = require('./middlewares/admin');


var ExpressServer = function(config){
    config = config || {};

    this.expressServer = express();

    for (var middleware in middlewares){
        this.expressServer.use(middlewares[middleware]);
    }

    this.expressServer.engine('html', swig.renderFile);
    this.expressServer.set('view engine', 'html');
    this.expressServer.set('views', __dirname + '/website/views/templates');
    swig.setDefaults({varControls:['[[',']]']});

    this.expressServer.get('/article/save/', function(req,res,next){
        res.render('article_save',{nombre:'diego'});
    });

    this.expressServer.get('/article/list/', function(req,res,next){
        res.render('article_list',{});
    });
};
module.exports = ExpressServer;