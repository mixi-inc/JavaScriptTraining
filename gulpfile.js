'use strict';

var util = require('util');
var gulp = require('gulp-help')(require('gulp'));

var PORT = 8000;
var BASE_URL = util.format('http://localhost:%d/', PORT);

var tasks = [
  {
    cmd: 'stage1',
    help: '意図した DOM を取得できているかテストします',
    url: BASE_URL + 'stage1',
    src: 'test/stage1.js'
  }, {
    cmd: 'stage2',
    help: '意図通りに DOM の構造・スタイルが変更できているかテストします',
    url: BASE_URL + 'stage2',
    src: 'test/stage2.js'
  }, {
    cmd: 'stage3',
    help: '意図通りにイベントを利用できているかテストします',
    url: BASE_URL + 'stage3',
    src: 'test/stage3.js'
  }, {
    cmd: 'stage4',
    help: '意図通りにサーバーと通信できているかテストします',
    url: BASE_URL + 'stage4',
    src: 'test/stage4.js'
  }, {
    cmd: 'stage5',
    help: '意図通りにモジュールを実装できているかテストします',
    url: BASE_URL + 'stage5',
    src: 'test/stage5.js'
  }, {
    cmd: 'stage6',
    help: 'よくあるイディオムを読み書きできているかテストします',
    url: BASE_URL + 'stage6',
    src: 'test/stage6.js'
  }
];


tasks.forEach(function(task) {
  var run = require('gulp-run');

  gulp.task(task.cmd, task.help, ['lint'], function() {
    // We expected that mocha-phantomjs print colorized results, but it isn't.
    // So, I take a fast way that is using gulp-run.
    return run('`npm bin`/mocha-phantomjs ' + task.url + ' || true').exec();
  });
});


gulp.task('lint', 'ミスのおこりやすいコード・可読性の低いコードがないか検査します', function() {
  var eslint = require('gulp-eslint');

  return gulp.src('test/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});


gulp.task('serve', 'サーバーを起動し、ブラウザでテストを確認できるようにします', function(){
  var serve = require('./gulp/serve.js');
  return serve();
});
