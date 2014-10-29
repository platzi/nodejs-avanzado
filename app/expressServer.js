var env = process.env.NODE_ENV || 'production',
    express = require('express'),
    swig = require('swig'),
    middlewares = require('./middlewares/admin');


var ExpressServer = function(config){
    config = config || {};
    config.swig = {
        varControls: ['[[', ']]']
    };

    this.expressServer = express();

    // middlewares
    for (var middleware in middlewares){
        this.expressServer.use(middlewares[middleware]);
    }

    this.expressServer.engine('html', swig.renderFile);
    this.expressServer.set('view engine', 'html');
    this.expressServer.set('views', __dirname + '/website/views/templates');

    if(env === 'development'){
        console.log('OK NO HAY CACHE');
        this.expressServer.set('view cache', false);
        config.swig.cache = false;
    }
    
    swig.setDefaults(config.swig);

    this.expressServer.get('/article/save/', function(req,res,next){
        res.render('article_save',{nombre:'diego'});
    });

    this.expressServer.get('/article/list/', function(req,res,next){
        res.render('article_list',{});
    });
};
module.exports = ExpressServer;
