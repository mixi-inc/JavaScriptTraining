'use strict';

describe('ステージ2（意図した通りに DOM 要素の構造・スタイルを変更できるようになる）', function(){
  describe('DOMインターフェース編', function() {
    it('寿司が表示されている要素の寿司を2つに増やす', function(){
      var element;

      // チュートリアル
      //
      // ここに以下のコードを記述してください。
      //
      // element = document.getElementById('firebrick');
      // element.textContent = element.textContent + element.textContent;


      expect(element).to.have.property(secret('vq'), secret('sveroevpx'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF63\uD83C\uDF63');
    });


    it('チョコが表示されている要素のチョコを2つに増やす', function(){
      var element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は element 変数に代入してください。


      // 参考情報
      // https://developer.mozilla.org/ja/docs/Web/API/Node/textContent

      expect(element).to.have.property(secret('vq'), secret('pubpbyngr'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF6B\uD83C\uDF6B');
    });


    it('3 番の要素の背景色を "limegreen" に変更する', function(){
      var element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は element 変数に代入してください。


      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E8%89%B2

      expect(element).to.have.property(
        secret('pynffAnzr'), secret('zrqvhzfrnterra'));

      expect(element).to.have.deep.property(
        secret('fglyr.onpxtebhaqPbybe'), normalizeColor('limegreen'));
    });


    it('4 番の要素を 50% の透明度に変更する', function(){
      var element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は element 変数に代入してください。


      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E4%B8%8D%E9%80%8F%E6%98%8E%E5%BA%A6

      expect(element).to.have.property(
        secret('pynffAnzr'), secret('ghedhbvfr'));

      expect(element).to.have.deep.property(
        secret('fglyr.bcnpvgl'), '0.5');
    });


    it('5 番の要素を時計回り方向に 10 度回転させる', function(){
      var element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は element 変数に代入してください。


      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E5%9B%9E%E8%BB%A2

      expect(element).to.have.property(
        secret('gntAnzr'), secret('OYBPXDHBGR'));

      expect(element).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));
    });


    it('6 番の要素を上に 20px 移動させる', function(){
      var element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は element 変数に代入してください。

      // 参考情報
      // https://developer.mozilla.org/ja/docs/Web/CSS/top

      expect(element).to.have.deep.property(
        secret('qngnfrg.wfGenvavat'), secret('oyhrivbyrg'));

      expect(element).to.have.deep.property(
        secret('fglyr.gbc'), secret('-20ck'));

      expect(element).to.have.deep.property(
        secret('fglyr.cbfvgvba'), secret('eryngvir'));
    });
  });


  describe('jQuery 編', function() {
    it('寿司が表示されている要素の寿司を jQuery を使って2つに増やす', function(){
      var $element;

      // チュートリアル
      //
      // ここに以下のコードを記述してください。
      //
      // $element = document.getElementById('brown');
      // $element.textContent = $element.textContent + $element.textContent;


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('oebja'));
      expect($element).to.have.text('\uD83C\uDF63\uD83C\uDF63');
    });


    it('チョコが表示されている要素のチョコを jQuery を使って2つに増やす', function(){
      var $element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は $element 変数に代入してください。


      // 参考情報
      // http://api.jquery.com/category/manipulation/

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('qnexbenatr'));
      expect($element).to.have.text('\uD83C\uDF6B\uD83C\uDF6B');
    });


    it('9 番の要素の背景色を jQuery を使って "mediumseagreen" に変更する', function(){
      var $element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は $element 変数に代入してください。


      // 参考情報
      // http://api.jquery.com/category/css/

      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('yvzrterra'));
      expect($element).to.have.css(
        secret('onpxtebhaq-pbybe'), normalizeColor('mediumseagreen'));
    });


    it('10 番の要素を jQuery を使って 50% の透明度に変更する', function(){
      var $element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は $element 変数に代入してください。


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('zrqvhzghedhbvfr'));
      expect($element).to.have.css(secret('bcnpvgl'), '0.5');
    });


    it('5 番の要素を jQuery を使って時計回り方向に 10 度回転させる', function(){
      var $element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は $element 変数に代入してください。


      expect($element).to.be.instanceof(jQuery);

      expect($element.get(0)).to.have.property(
        secret('gntAnzr'), secret('C'));

      expect($element).to.have.css(secret('genafsbez')).not.equal('none');
    });


    it('6 番の要素を jQuery を使って上に 20px 移動させる', function(){
      var $element;

      // ここにコードを記述してください。
      // 変更した HTML 要素は $element 変数に代入してください。


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.data(secret('wfGenvavat'), secret('qnexbepuvq'));
      expect($element).to.have.css(secret('gbc'), secret('-20ck'));
      expect($element).to.have.css(secret('cbfvgvba'), secret('eryngvir'));
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

function normalizeColor(value) {
  // ブラウザごとに color の値がまちまちに読まれるのを、正規化する
  var elem = document.createElement('div');
  elem.style.color = value;
  return elem.style.color;
}
