// dependencies
var cookieParser = require('cookie-parser'),
    conf         = require('../../conf');
// plugin
module.exports = cookieParser(conf.secret);
