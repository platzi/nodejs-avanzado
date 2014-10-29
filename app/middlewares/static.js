var express = require('express'),
	path = require('path');

module.exports = express.static(path.join(__dirname, '../static/'));