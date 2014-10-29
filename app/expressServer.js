var env = process.env.NODE_ENV || 'production'
    express = require('express'),
    swig = require('swig'),
    middlewares = require('./middlewares/admin'),
    router = require('./website/router');

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

    if (env == 'development'){
        console.log('OK NO HAY CACHE');
        this.expressServer.set('view cache', false);
        swig.setDefaults({cache: false, varControls:['[[',']]']});
    }

    for (var controller in router){
        for (var resource in router[controller].prototype){
            var method = resource.split('_')[0];
            var enviroment = resource.split('_')[1];
            var data = resource.split('_')[2];
            data = (method == 'get' && data !== undefined) ? ':data' : '';
            var url = ('/' + controller + '/' + enviroment + '/' + data);
            this.router(controller,resource,method,url);
        }
    }
};
ExpressServer.prototype.router = function(controller,resource,method,url){
    console.log(url);
    this.expressServer[method](url, function(req, res, next){
        var conf = {
            'resource': resource,
            'req':req,
            'res':res,
            'next':next
        }
        var Controler = new router[controller](conf);
        Controler.response();
    });
};
module.exports = ExpressServer;