'use strict';

describe('ステージ5（意図通りに非同期処理を利用できる）', function() {
  describe('通信編', function() {
    it('Github の mixi-inc の organization の情報を取得できる', function() {
      var mixiOrg;

      // チュートリアル
      //
      // ここに下記のコードを記述してください。
      //
      // mixiOrg = fetch('https://api.github.com/orgs/mixi-inc').
      //   then(function(response) {
      //     return response.json();
      //   });


      return expect(mixiOrg).to.eventually.have.property('id', 1089312);

      // Github API に関する参考情報
      // https://developer.github.com/v3/repos/
    });


    it('Github API を使って、mixi-inc/JavaScriptTraining の情報を取得できる', function(){
      var repositry = 'mixi-inc/JavaScriptTraining';
      var mixiRepo;

      // コードをここに記述してください。


      return expect(mixiRepo).to.eventually.have.property(
        'full_name', repositry);
    });


    it('Github API を使って、VimL、Emacs Lisp でスターが最も多いプロダクト名を' +
       'それぞれ 1 つずつ取得できる', function(){
      var languages = [ 'VimL', '"Emacs Lisp"' ];
      var mostPopularRepos;

      // コードをここに記述してください。
      // なお、 mostPopularRepos は Promise インスタンスであることを
      // 意図しています。


      return expect(mostPopularRepos).to.eventually.have.length(2);

      // fetch API に関する参考情報
      // https://github.com/github/fetch
      //
      // Github API に関する参考情報
      // https://developer.github.com/v3/search/
      //
      // Promise に関する参考情報
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
      //
      // Promise 参考情報（重量級）
      // http://azu.github.io/promises-book/
    });
  });
});
