var conf = require('./conf'),
    http = require('http'),
    expressServer = require('./app/expressServer');

var app = new expressServer();

var server = http.createServer(app.expressServer);
server.listen(conf.serverPort);