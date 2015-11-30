/* eslint no-underscore-dangle:0 */
'use strict';

var path = require('path');
var stream = require('stream');
var gutil = require('gulp-util');

var SERVER_SCRIPT = path.join(__dirname, '../server.js');


var serve = function() {
  var nodemon = require('gulp-nodemon');
  var readable = new stream.Readable({ objectMode: true });

  readable._read = function() {
    var self = this;

    nodemon({
      script: SERVER_SCRIPT,
      watch: [SERVER_SCRIPT],
      env: { PORT: serve.PORT },
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
        var stderr = String(buf);
        var isAddressAlreadyInUse = Boolean(stderr.match(/EADDRINUSE/));

        var msg = 'サーバーを起動できませんでした。\n' + (isAddressAlreadyInUse ?
            '既にサーバーが立ち上がっているか、8000 番ポートが既に使用されています。' : stderr);

        gutil.log(gutil.colors.red(msg));
      });
    });
  };

  return readable;
};


serve.PORT = process.env.PORT || 8000;

module.exports = serve;
