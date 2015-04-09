'use strict';

describe('ステージ1（意図した DOM 要素を取得できるようになる）', function() {
  describe('DOM インターフェース編', function() {
    it('1 番の赤色の要素（ID は "firebrick"）が1つ取得できる', function() {

      // チュートリアル
      //
      // JavaScriptTraining へようこそ。
      //
      // このステージでは DOM 要素の取得を学びます。
      // 'change me!' を document.getElementById(elementId) に
      // 書き換え、ブラウザをリロードしてみてください。
      var elementId = 'firebrick';
      var element = document.getElementById(elementId);

      expect(element).to.be.instanceof(HTMLElement);
      expect(element).to.have.property('id', elementId);

      // テストが green になりましたか？
      // では、すべてのテストが green になるように、すべてのテストを
      // 修正してみましょう。
    });


    it('2 番の橙色の要素（ID は "chocolate"）が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elementId = 'chocolate';
      var element = document.getElementById(elementId);

      expect(element).to.be.instanceof(HTMLElement);
      expect(element).to.have.property('id', elementId);

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById
    });


    it('3 番の緑色の要素（CSS クラス名は "mediumseagreen"）が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elementClassName = 'mediumseagreen';
      var elements = document.getElementsByClassName(elementClassName);

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('className', elementClassName);

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName
    });


    it('4 番の水色の要素（CSS クラス名は "turquoise"）が2つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elementClassName = 'turquoise';
      var elements = document.getElementsByClassName(elementClassName);

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property('className', elementClassName);
      expect(elements[1]).to.have.property('className', elementClassName);

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName
    });


    it('5 番の青色の要素（タグ名は "blockquote"）が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elementTagName = 'blockquote';
      var elements = document.getElementsByTagName(elementTagName);

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('tagName', elementTagName.toUpperCase());

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByTagName
    });
  });


  describe('開発ツール編', function() {
    it('7 番の赤色の要素が1つ取得できる', function() {

      // チュートリアル
      //
      // ここからは、開発ツールを使って目印となる ID やクラス名を調べてみましょう。
      //
      // 調べたい要素の上で右クリック > 要素の検証をクリックします。
      //
      // すると、開発ツール上で <li id="brown">... が選択されます。
      // このことから、7 番の赤色の要素の ID は brown だということがわかります。
      // では、'change me!' を document.getElementById('brown') に書き換えてみましょう。
      var element = document.getElementById('brown');

      expect(element).to.have.property(secret('vq'), secret('oebja'));
    });


    it('8 番の橙色の要素が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var element = document.getElementById('darkorange');

      expect(element).to.have.property(secret('vq'), secret('qnexbenatr'));
    });


    it('9 番の緑色の要素が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elements = document.getElementsByClassName('limegreen');

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('yvzrterra'));
    });


    it('10 番の水色の要素が2つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elements = document.getElementsByClassName('mediumturquoise');

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
      expect(elements[1]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
    });


    it('11 番の青色の要素が1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      //
      // なお、11 番の青色の要素は li 要素ではありません！
      // よくみると、色がついているのはさらに内側の要素のようです。
      var elements = document.getElementsByTagName('p');

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('gntAnzr'), secret('C'));
    });
  });


  describe('基本 CSS セレクタ編', function() {
    it('1 番の赤色の要素を querySelector を使って1つ取得できる', function() {

      // チュートリアル
      //
      // 次に、document.querySelector ファミリを使って、DOM 要素を取得します。
      //
      // 'change me!' を document.querySelector('#firebrick') に
      // 書き換えてください。
      var element = document.querySelector('#firebrick');

      expect(element).to.have.property(secret('vq'), secret('sveroevpx'));

      // 参考資料
      // https://developer.mozilla.org/ja/docs/DOM/Locating_DOM_elements_using_selectors
    });


    it('2 番の橙色の要素を querySelector を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var element = document.querySelector('#chocolate');

      expect(element).to.have.property(secret('vq'), secret('pubpbyngr'));

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors
    });


    it('3 番の緑色の要素を querySelector を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var element = document.querySelector('.mediumseagreen');

      expect(element).to.have.property(secret('pynffAnzr'), secret('zrqvhzfrnterra'));
    });


    it('4 番の水色の要素を querySelectorAll を使って2つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var elements = document.querySelectorAll('.turquoise');

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('ghedhbvfr'));
      expect(elements[1]).to.have.property(secret('pynffAnzr'), secret('ghedhbvfr'));
    });


    it('5 番の青色の要素を querySelector を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var element = document.querySelector('blockquote');

      expect(element).to.have.property(secret('gntAnzr'), secret('OYBPXDHBGR'));
    });


    it('6 番の紫色の要素を querySelector を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var element = document.querySelector('[data-js-training="blueviolet"]');

      expect(element).to.have.deep.property(secret('qngnfrg.wfGenvavat'),
                                            secret('oyhrivbyrg'));
    });
  });


  describe('応用 CSS セレクタ編', function() {
    it('7 番の赤色の要素を ID セレクタを使わずに1つ取得できる', function() {

      // チュートリアル
      //
      // 'change me!' を '.js-training:nth-child(2) li'
      // に書き換えてください。
      var selector = '.js-training:nth-child(2) li';

      var element = document.querySelector(selector);
      expect(selector).to.not.have.string('#');
      expect(element).to.have.property(secret('vq'), secret('oebja'));
    });


    it('8 番の橙色の要素を ID セレクタを使わずに1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var selector = '.js-training:nth-child(2) :nth-child(2)';

      var element = document.querySelector(selector);
      expect(selector).to.not.have.string('#');
      expect(element).to.have.property(secret('vq'), secret('qnexbenatr'));

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors
    });


    it('12 番の紫色の要素を、属性セレクタと :nth-child(N) セレクタを使わずに1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var selector = '.js-training + .js-training > :last-child';

      var element = document.querySelector(selector);
      expect(selector).to.not.match(/\[\s*name\s*[~\|\^\$\*]?=/);
      expect(selector).to.not.have.string(':nth-child');
      expect(element).to.have.deep.property(secret('qngnfrg.wfGenvavat'),
                                            secret('qnexbepuvq'));
    });
  });


  describe('jQuery 編', function() {
    it('7 番の赤色の要素を jQuery を使って1つ取得できる', function() {

      // チュートリアル
      //
      // jQuery を使って要素を取得する方法も学んでおきましょう。
      // 基本的な使い方は document.querySelectorAll と同じです。
      //
      // 'change me!' を $('#brown') に書き換えてください。
      var $element = $('#brown');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('oebja'));
    });


    it('8 番の橙色の要素を jQuery を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var $element = $('#darkorange');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('qnexbenatr'));

      // 参考情報（英語）
      // http://api.jquery.com/jQuery/#jQuery1
    });


    it('9 番の緑色の要素を jQuery を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var $element = $('.limegreen');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('yvzrterra'));
    });


    it('10 番の水色の要素を jQuery を使って2つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var $element = $('.mediumturquoise');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(2);
      expect($element).to.have.class(secret('zrqvhzghedhbvfr'));
    });


    it('11 番の青色の要素を jQuery を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var $element = $('p');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(1);
      expect($element.get(0)).to.have.property(secret('gntAnzr'), secret('C'));
    });


    it('12 番の紫色の要素を jQuery を使って1つ取得できる', function() {

      // 'change me!' を書き換えてください。
      var $element = $('[data-js-training="darkorchid"]');

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(1);
      expect($element).to.have.data(secret('wfGenvavat'),
                                    secret('qnexbepuvq'));
    });
  });


  describe('エクストラステージ', function() {
    it('動いている寿司要素を取得する', function() {

      // 'change me!' を書き換えてください。
      var element = document.querySelector('x-flying-sushi-monster');

      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF63');
    });
  });
});


function secret(str) {
  // Copyright (c) 2012 K.Adam White
  // Released under the MIT license
  // https://github.com/kadamwhite/jquery.rot13/blob/master/LICENSE-MIT
  return Array.prototype.map.call(str, function(char) {
    if (!char.match(/[A-Za-z]/)) { return char; }

    var charCode = char.charCodeAt(0);
    if(charCode < 97) {
      charCode = (charCode - 52) % 26 + 65;
    } else {
      charCode = (charCode - 84) % 26 + 97;
    }
    return String.fromCharCode(charCode);
  }).join('');
}
