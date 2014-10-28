var express = require('express'),
	path = require('path');

module.export = express.static(path.join(__dirname,'../static/'));
