'use strict';

var util = require('util');
var path = require('path');
var gulp = require('gulp-help')(require('gulp'));
var merge = require('merge-stream');

var serve = require('./gulp/serve.js');

var tasks = [
  {
    id: 'stage1',
    help: '意図した DOM を取得できているかテストします'
  }, {
    id: 'stage2',
    help: '意図通りに DOM のスタイルが変更できているかテストします'
  }, {
    id: 'stage3',
    help: '意図通りに DOM の構造が変更できているかテストします'
  }, {
    id: 'stage4',
    help: '意図通りにイベントを利用できているかテストします'
  }, {
    id: 'stage5',
    help: '意図通りに非同期処理ができているかテストします'
  }, {
    id: 'stage6',
    help: '意図通りにモジュールを実装できているかテストします'
  }, {
    id: 'stage7',
    help: 'よくあるイディオムを読み書きできているかテストします'
  }
];


tasks.forEach(function(task) {
  var run = require('gulp-run');
  var url = util.format('http://localhost:%d/%s/', serve.PORT, task.id);

  gulp.task(task.id, task.help, ['lint-' + task.id], function() {
    // We expected that mocha-phantomjs print colorized results, but it isn't.
    // So, I take a fast way that is using gulp-run.
    return run('$(npm bin)/mocha-phantomjs ' + url + ' || true').exec();
  });
});


tasks.forEach(function(task) {
  var stage = path.join('public', task.id);
  var js = path.join(stage, '**/*.js');
  var css = path.join(stage, '**/*.css');
  var csslintrc = path.join(stage, '.csslintrc');

  gulp.task('lint-' + task.id, 'ミスのおこりやすいコード・可読性の低いコードがないか検査します', function() {
    var eslint = require('gulp-eslint');
    var csslint = require('gulp-csslint');

    var lints = merge(
      gulp.src(css)
        .pipe(csslint(csslintrc))
        .pipe(csslint.reporter()),

      gulp.src(js)
        .pipe(eslint())
        .pipe(eslint.format())
    );

    return lints;
  });
});



gulp.task('serve', 'サーバーを起動し、ブラウザでテストを確認できるようにします', function(){
  return serve();
});
