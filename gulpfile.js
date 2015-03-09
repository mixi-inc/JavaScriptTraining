'use strict';

var gulp = require('gulp-help')(require('gulp'));
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');
var nodemon = require('gulp-nodemon');

var tasks = [
  {
    cmd: 'test:all',
    help: 'すべてのテストを実行します',
    src: 'test/**/*.js'
  }, {
    cmd: 'test:stage1',
    help: '意図した DOM を取得できているかテストします',
    src: 'test/stage1.js'
  }, {
    cmd: 'test:stage2',
    help: '意図通りに DOM の構造・スタイルが変更できているかテストします',
    src: 'test/stage2.js'
  }, {
    cmd: 'test:stage3',
    help: '意図通りにイベントを利用できているかテストします',
    src: 'test/stage3.js'
  }, {
    cmd: 'test:stage4',
    help: '意図通りにサーバーと通信できているかテストします',
    src: 'test/stage4.js'
  }, {
    cmd: 'test:stage5',
    help: '意図通りにモジュールを実装できているかテストします',
    src: 'test/stage5.js'
  }, {
    cmd: 'test:stage6',
    help: 'よくあるイディオムを読み書きできているかテストします',
    src: 'test/stage6.js'
  }
];


tasks.forEach(function(task) {
  gulp.task(task.cmd, task.help, function() {
    return gulp.src(task.src, { read: false }).
      pipe(eslint()).
      pipe(eslint.format()).
      pipe(mocha());
  });
});


gulp.task('serve', 'サーバーを起動し、ブラウザでテストを確認できるようにします', function(){
  nodemon({
    script: './server.js',
    watch: ['server.js'],
    env: { PORT: 8000 }
  });
});
