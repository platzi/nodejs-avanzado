var http = require('http')
var express = require('express');

var expressServer = express();

expressServer.get('/article/save/', function(req,res,next){
    res.send('Hello from article save');
});

expressServer.get('/article/remove/', function(req,res,next){
    res.send('Hello from article remove');
});

expressServer.get('/article/add/', function(req,res,next){
    res.send('Hello from article add');
});

expressServer.get('/article/see/:data', function(req,res,next){
    res.send('Hello from article see');
});

expressServer.get('/article/edit/:data', function(req,res,next){
    res.send('Hello from article edit');
});

expressServer.get('/article/list/', function(req,res,next){
    res.send('Hello from article list');
});

var server = http.createServer(expressServer);
server.listen(3000);