/* eslint no-underscore-dangle:0 */
'use strict';

var stream = require('stream');
var gutil = require('gulp-util');

var SERVER_SCRIPT = './server.js';
var PORT = 8000;


var serve = function() {
  var nodemon = require('gulp-nodemon');
  var readable = new stream.Readable({ objectMode: true });

  readable._read = function() {
    var self = this;

    nodemon({
      script: SERVER_SCRIPT,
      watch: [SERVER_SCRIPT],
      env: { PORT: PORT },
      stdout: false
    })
    .on('readable', function() {
      this.stdout.on('data', function(buf) {
        gutil.log(String(buf));
        if (!String(buf).match(/SERVER_READY/)) { return; }

        // server is ready.
        self.emit('end');
      });

      this.stderr.on('data', function(buf) {
        gutil.log(gutil.colors.red(buf));
      });
    });
  };

  return readable;
};

module.exports = serve;
