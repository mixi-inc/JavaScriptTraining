'use strict';

describe('ステージ1（意図した DOM 要素を取得できるようになる）', function(){
  describe('DOM インターフェース編', function() {
    it('1 番の赤色の要素（ID は "firebrick"）が1つ取得できる', function(){
      var elementId = 'firebrick';

      // 'change me!' 部分を書き換えてください。
      var element = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById

      expect(element).to.have.property('id', elementId);
    });


    it('2 番の橙色の要素（ID は "chocolate"）が1つ取得できる', function(){
      var elementId = 'chocolate';

      // 'change me!' 部分を書き換えてください。
      var element = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById

      expect(element).to.have.property('id', elementId);
    });


    it('3 番の緑色の要素（CSS クラス名は "mediumseagreen"）が1つ取得できる', function(){
      var elementClassName = 'mediumseagreen';

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('className', elementClassName);
    });


    it('4 番の水色の要素（CSS クラス名は "turquoise"）が2つ取得できる', function(){
      var elementClassName = 'turquoise';

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property('className', elementClassName);
      expect(elements[1]).to.have.property('className', elementClassName);
    });


    it('5 番の青色の要素（タグ名は "blockquote"）が1つ取得できる', function(){
      var elementTagName = 'blockquote';

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByTagName

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property('tagName', elementTagName.toUpperCase());
    });


    it('6 番の紫色の要素（name 属性の値は "blueviolet"）が1つ取得できる', function(){
      var elementNameAttr = 'blueviolet';

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      // 参考資料
      // https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByName

      expect(elements).to.have.length(1);
      expect(elements[0].attributes.name.value).to.equal(elementNameAttr);
    });
  });


  describe('ツール編', function() {
    it('7 番の赤色の要素が1つ取得できる', function(){

      // 調べたい要素の上で右クリック > 要素の検証
      //
      // 'change me!' 部分を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('vq'), secret('oebja'));
    });


    it('8 番の橙色の要素が1つ取得できる', function(){

      // 'change me!' 部分を書き換えてください。
      var element = 'change me!';

      expect(element).to.have.property(secret('vq'), secret('qnexbenatr'));
    });


    it('9 番の緑色の要素が1つ取得できる', function(){

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('yvzrterra'));
    });


    it('10 番の水色の要素が2つ取得できる', function(){

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(2);
      expect(elements[0]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
      expect(elements[1]).to.have.property(secret('pynffAnzr'), secret('zrqvhzghedhbvfr'));
    });


    it('11 番の青色の要素が1つ取得できる', function(){

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.property(secret('gntAnzr'), secret('C'));
    });


    it('12 番の紫色の要素が1つ取得できる', function(){

      // 'change me!' 部分を書き換えてください。
      var elements = 'change me!';

      expect(elements).to.have.length(1);
      expect(elements[0]).to.have.deep.property(secret('nggevohgrf.anzr.inyhr'),
                                                secret('qnexbepuvq'));
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
