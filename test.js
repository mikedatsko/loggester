
var test2 = require('./test2');

var loggester = require('./loggester');
var log = new loggester.logger('SOME MODULE');
// loggester.isProd = true;

new test2();

log('test1');