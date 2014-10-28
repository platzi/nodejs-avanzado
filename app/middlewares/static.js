// dependencies
var express = require('express'),
    path    = require('path');
// plugin
module.exports = express.static(path.join(__dirname, '../static/'));
