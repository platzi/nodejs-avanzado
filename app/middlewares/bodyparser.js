var express = require('express'),
	bodyParser = require('body-parser'),
	expressServer = new express();

module.exports = expressServer.use(bodyParser.urlencoded({extended:true}))