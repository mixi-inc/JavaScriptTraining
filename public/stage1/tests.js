'use strict';



describe('ステージ1（意図した DOM 要素を取得できるようになる）', function(){
  describe('DOM インターフェース編', function() {
    it('1 番の赤色の要素（ID は "firebrick"）が1つ取得できる', function(){
      var elementId = 'firebrick';

      // チュートリアル
      //
      // 'change me!' を document.getElementById(elementId); に
      // 書き換えてください。
      var element = 'change me!';

      expect(element).to.be.instanceof(HTMLElement);
      expect(element).to.have.property('id', elementId);
    });


    it('2 番の橙色の要素（ID は "chocolate"）が1つ取得できる', function(){
      var elementId = 'chocolate';

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById

      expect(element).to.be.instanceof(HTMLElement);
      expect(element).to.have.property('id', elementId);
    });


    it('3 番の緑色の要素（CSS クラス名は "mediumseagreen"）が1つ取得できる', function(){
      var elementClassName = 'mediumseagreen';

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('className', elementClassName);
    });


    it('4 番の水色の要素（CSS クラス名は "turquoise"）が2つ取得できる', function(){
      var elementClassName = 'turquoise';

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property('className', elementClassName);
      expect(elements[1]).to.have.property('className', elementClassName);
    });


    it('5 番の青色の要素（タグ名は "blockquote"）が1つ取得できる', function(){
      var elementTagName = 'blockquote';

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByTagName

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('tagName', elementTagName.toUpperCase());
    });


    it.skip('6 番の紫色の要素（data-js-training 属性の値は "blueviolet"）が1つ取得できる', function(){
      // document.querySelector を学ばないと取得することができません！
      // 次に進んでください。
    });
  });


  describe('開発ツール編', function() {
    it('7 番の赤色の要素が1つ取得できる', function(){

      // チュートリアル
      //
      // 調べたい要素の上で右クリック > 要素の検証
      //
      // 'change me!' を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('vq'), secret('oebja'));
    });


    it('8 番の橙色の要素が1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('vq'), secret('qnexbenatr'));
    });


    it('9 番の緑色の要素が1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('yvzrterra'));
    });


    it('10 番の水色の要素が2つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
      expect(elements[1]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
    });


    it('11 番の青色の要素が1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('gntAnzr'), secret('C'));
    });


    it.skip('12 番の紫色の要素が1つ取得できる', function(){
      // document.querySelector を学ばないと取得することができません！
      // 次に進んでください。
    });
  });


  describe('基本 CSS セレクタ編', function() {
    it('1 番の赤色の要素を querySelector を使って1つ取得できる', function(){

      // チュートリアル
      //
      // 'change me!' を document.querySelector('#firebrick'); に
      // 書き換えてください。
      var element = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/DOM/Locating_DOM_elements_using_selectors

      expect(element).to.have.property(secret('vq'), secret('sveroevpx'));
    });


    it('2 番の橙色の要素を querySelector を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors

      expect(element).to.have.property(secret('vq'), secret('pubpbyngr'));
    });


    it('3 番の緑色の要素を querySelector を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('pynffAnzr'), secret('zrqvhzfrnterra'));
    });


    it('4 番の水色の要素を querySelectorAll を使って2つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('ghedhbvfr'));
      expect(elements[1]).to.have.property(secret('pynffAnzr'), secret('ghedhbvfr'));
    });


    it('5 番の青色の要素を querySelector を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('gntAnzr'), secret('OYBPXDHBGR'));
    });


    it('6 番の紫色の要素を querySelector を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.deep.property(secret('qngnfrg.wfGenvavat'),
                                            secret('oyhrivbyrg'));
    });
  });


  describe('応用 CSS セレクタ編', function() {
    it('7 番の赤色の要素を ID セレクタを使わずに1つ取得できる', function(){

      // チュートリアル
      //
      // 'change me!' を '.js-training:nth-child(2) li';
      // に書き換えてください。
      var selector = 'change me!';

      var element = document.querySelector(selector);
      expect(selector).to.not.have.string('#');
      expect(element).to.have.property(secret('vq'), secret('oebja'));
    });


    it('8 番の橙色の要素を ID セレクタを使わずに1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var selector = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors

      var element = document.querySelector(selector);
      expect(selector).to.not.have.string('#');
      expect(element).to.have.property(secret('vq'), secret('qnexbenatr'));
    });


    it('12 番の紫色の要素を、属性セレクタと :nth-child(N) セレクタを使わずに1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var selector = 'change me!';

      var element = document.querySelector(selector);
      expect(selector).to.not.match(/\[\s*name\s*[~\|\^\$\*]?=/);
      expect(selector).to.not.have.string(':nth-child');
      expect(element).to.have.deep.property(secret('qngnfrg.wfGenvavat'),
                                            secret('qnexbepuvq'));
    });
  });


  describe('jQuery 編', function() {
    it('7 番の赤色の要素を jQuery を使って1つ取得できる', function(){

      // チュートリアル
      //
      // 基本的な使い方は document.querySelectorAll と同じです。
      //
      // 'change me!' を $('#brown') に書き換えてください。
      var $element = 'change me!';

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('oebja'));
    });


    it('8 番の橙色の要素を jQuery を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var $element = 'change me!';

      // 参考情報（英語）
      // http://api.jquery.com/jQuery/#jQuery1

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('qnexbenatr'));
    });


    it('9 番の緑色の要素を jQuery を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var $element = 'change me!';

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('yvzrterra'));
    });


    it('10 番の水色の要素を jQuery を使って2つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var $element = 'change me!';

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(2);
      expect($element).to.have.class(secret('zrqvhzghedhbvfr'));
    });


    it('11 番の青色の要素を jQuery を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var $element = 'change me!';

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(1);
      expect($element.get(0)).to.have.property(secret('gntAnzr'), secret('C'));
    });


    it('12 番の紫色の要素を jQuery を使って1つ取得できる', function(){

      // 'change me!' を書き換えてください。
      var $element = 'change me!';

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.length(1);
      expect($element).to.have.data(secret('wfGenvavat'),
                                    secret('qnexbepuvq'));
    });
  });


  describe('エクストラステージ', function(){
    it('動いている寿司要素を取得する', function(){

      // 'change me!' を書き換えてください。
      var element = 'change me!';

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
