'use strict';

var util = require('util');
var gulp = require('gulp-help')(require('gulp'));
var serve = require('./gulp/serve.js');

var BASE_URL = util.format('http://localhost:%d/', serve.PORT);

var tasks = [
  {
    cmd: 'stage1',
    help: '意図した DOM を取得できているかテストします',
    url: BASE_URL + 'stage1',
    src: 'public/stage1.js'
  }, {
    cmd: 'stage2',
    help: '意図通りに DOM のスタイルが変更できているかテストします',
    url: BASE_URL + 'stage2',
    src: 'public/stage2.js'
  }, {
    cmd: 'stage3',
    help: '意図通りに DOM の構造が変更できているかテストします',
    url: BASE_URL + 'stage3',
    src: 'public/stage3.js'
  }, {
    cmd: 'stage4',
    help: '意図通りにイベントを利用できているかテストします',
    url: BASE_URL + 'stage4',
    src: 'public/stage4.js'
  }, {
    cmd: 'stage5',
    help: '意図通りに非同期処理ができているかテストします',
    url: BASE_URL + 'stage5',
    src: 'public/stage5.js'
  }, {
    cmd: 'stage6',
    help: '意図通りにモジュールを実装できているかテストします',
    url: BASE_URL + 'stage6',
    src: 'public/stage6.js'
  }, {
    cmd: 'stage7',
    help: 'よくあるイディオムを読み書きできているかテストします',
    url: BASE_URL + 'stage7',
    src: 'public/stage7.js'
  }
];


tasks.forEach(function(task) {
  var run = require('gulp-run');

  gulp.task(task.cmd, task.help, ['lint-' + task.cmd], function() {
    // We expected that mocha-phantomjs print colorized results, but it isn't.
    // So, I take a fast way that is using gulp-run.
    return run('$(npm bin)/mocha-phantomjs ' + task.url + ' || true').exec();
  });
});


tasks.forEach(function(task) {
  gulp.task('lint-' + task.cmd, 'ミスのおこりやすいコード・可読性の低いコードがないか検査します', function() {
    var eslint = require('gulp-eslint');

    return gulp.src(task.src)
      .pipe(eslint())
      .pipe(eslint.format());
  });
});


gulp.task('serve', 'サーバーを起動し、ブラウザでテストを確認できるようにします', function(){
  return serve();
});
