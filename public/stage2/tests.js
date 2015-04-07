'use strict';


describe('ステージ2（意図した通りに DOM 要素の属性・テキストを変更できるようになる）', function() {
  describe('DOMインターフェース編', function() {
    it('1 番の要素の寿司を2つに増やす', function() {

      // チュートリアル
      //
      // ここに以下のコードを記述してください。
      //
      // var element = document.getElementById('firebrick');
      // element.textContent = element.textContent + element.textContent;
      var element = 'change me!';


      expect(element).to.have.property(secret('vq'), secret('sveroevpx'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF63\uD83C\uDF63');
    });


    it('2 番の要素のチョコを2つに増やす', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = 'change me!';


      expect(element).to.have.property(secret('vq'), secret('pubpbyngr'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF6B\uD83C\uDF6B');

      // 参考情報
      // https://developer.mozilla.org/ja/docs/Web/API/Node/textContent
    });


    it('3 番の要素の背景色を "limegreen" に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = 'change me!';


      expect(element).to.have.property(
        secret('pynffAnzr'), secret('zrqvhzfrnterra'));

      expect(element).to.have.deep.property(
        secret('fglyr.onpxtebhaqPbybe'), normalizeColor('limegreen'));

      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E8%89%B2
    });


    it('4 番の要素を 50% の透明度に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = 'change me!';


      expect(element).to.have.property(
        secret('pynffAnzr'), secret('ghedhbvfr'));

      expect(element).to.have.deep.property(
        secret('fglyr.bcnpvgl'), '0.5');

      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E4%B8%8D%E9%80%8F%E6%98%8E%E5%BA%A6
    });


    it('5 番の要素を時計回り方向に 10 度回転させる', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = 'change me!';


      expect(element).to.have.property(
        secret('gntAnzr'), secret('OYBPXDHBGR'));

      expect(element).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));

      // 参考情報
      // https://developer.mozilla.org/ja/search?q=css+%E5%9B%9E%E8%BB%A2
    });


    it('6 番の要素を上に 20px 移動させる', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      //
      // なお、上に 20px 移動させる方法は複数ありますが、今回は top 属性を
      // 使う方法を使ってください。
      var element = 'change me!';


      expect(element).to.have.deep.property(
        secret('qngnfrg.wfGenvavat'), secret('oyhrivbyrg'));

      expect(element).to.have.deep.property(
        secret('fglyr.gbc'), secret('-20ck'));

      expect(element).to.have.deep.property(
        secret('fglyr.cbfvgvba'), secret('eryngvir'));

      // 参考情報
      // https://developer.mozilla.org/ja/docs/Web/CSS/top
    });
  });


  describe('jQuery 編', function() {
    it('7 番の要素の寿司を jQuery を使って2つに増やす', function() {

      // チュートリアル
      //
      // 同じように、jQuery ではどのようにして DOM を操作するのか
      // 体験してみましょう。
      //
      // ここに以下のコードを記述してください。
      //
      // var $element = $('#brown');
      // $element.text($element.text() + $element.text());
      var $element = 'change me!';


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('oebja'));
      expect($element).to.have.text('\uD83C\uDF63\uD83C\uDF63');
    });


    it('8 番の要素のチョコを jQuery を使って2つに増やす', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = 'change me!';


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('qnexbenatr'));
      expect($element).to.have.text('\uD83C\uDF6B\uD83C\uDF6B');

      // 参考情報
      // http://api.jquery.com/category/manipulation/
    });


    it('9 番の要素の背景色を jQuery を使って "mediumseagreen" に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = 'change me!';


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('yvzrterra'));
      expect($element).to.have.css(
        secret('onpxtebhaq-pbybe'), normalizeColor('mediumseagreen'));

      // 参考情報
      // http://api.jquery.com/category/css/
    });


    it('10 番の要素を jQuery を使って 50% の透明度に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = 'change me!';


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('zrqvhzghedhbvfr'));
      expect($element).to.have.css(secret('bcnpvgl'), '0.5');
    });


    it('11 番の要素を jQuery を使って時計回り方向に 10 度回転させる', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = 'change me!';


      expect($element).to.be.instanceof(jQuery);

      expect($element.get(0)).to.have.property(
        secret('gntAnzr'), secret('C'));

      expect($element).to.have.css(secret('genafsbez')).not.equal('none');
    });


    it('12 番の要素を jQuery を使って上に 20px 移動させる', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      //
      // なお、上に 20px 移動させる方法は複数ありますが、今回は top 属性を
      // 使う方法を使ってください。
      var $element = 'change me!';


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
