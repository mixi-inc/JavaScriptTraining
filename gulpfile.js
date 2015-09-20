'use strict';

var path = require('path');
var gulp = require('gulp-help')(require('gulp'));

var serve = require('./gulp/serve.js');

var tasks = [
  {
    id: 'stage-1',
    help: '意図した DOM を取得できているかテストします'
  }, {
    id: 'stage-2',
    help: '意図通りに DOM のスタイルが変更できているかテストします'
  }, {
    id: 'stage-3',
    help: '意図通りに DOM の構造が変更できているかテストします'
  }, {
    id: 'stage-4',
    help: '意図通りにイベントを利用できているかテストします'
  }, {
    id: 'stage-5',
    help: '意図通りに非同期処理ができているかテストします'
  }, {
    id: 'stage-6',
    help: '意図通りにモジュールを実装できているかテストします'
  }, {
    id: 'stage-7',
    help: 'よくあるイディオムを読み書きできているかテストします'
  }
];


tasks.forEach(function(task) {
  var stage = path.join('public', task.id);
  var js = path.join(stage, '**/*.js');
  var css = path.join(stage, '**/*.css');

  gulp.task('lint-' + task.id, 'ミスのおこりやすいコード・可読性の低いコードがないか検査します', function() {
    var eslint = require('gulp-eslint');

    return gulp.src(js)
      .pipe(eslint())
      .pipe(eslint.format())
  });
});



gulp.task('serve', 'サーバーを起動し、ブラウザでテストを確認できるようにします', function(){
  return serve();
});
