var env = process.env.NODE_ENV || 'production',
    express = require('express'),
    swig = require('swig'),
    middlewares = require('./middlewares/admin');


var ExpressServer = function(config){
    config = config || {};

    this.expressServer = express();

    // middlewares
    for (var middleware in middlewares){
        this.expressServer.use(middlewares[middleware]);
    }

    this.expressServer.engine('html', swig.renderFile);
    this.expressServer.set('view engine', 'html');
    this.expressServer.set('views', __dirname + '/website/views/templates');
    swig.setDefaults({varControls:['[[',']]']});

    if(env == 'development'){
        console.log('OK NO HAY CACHE');
        this.expressServer.set('view cache', false);
        swig.setDefaults({cache: false, varControls:['[[',']]']});
    }

    this.expressServer.get('/article/see/:data', function(req,res,next){
        res.render('article_see',{nombre:'diego'});
    });

    this.expressServer.get('/article/list/', function(req,res,next){
        res.render('article_list',{});
    });
};
module.exports = ExpressServer;