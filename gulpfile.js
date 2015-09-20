'use strict';

var path = require('path');
var gulp = require('gulp-help')(require('gulp'));

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
