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
      var element = document.getElementById('firebrick');
      element.textContent = element.textContent + element.textContent;


      expect(element).to.have.property(secret('vq'), secret('sveroevpx'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF63\uD83C\uDF63');
    });


    it('2 番の要素のチョコを2つに増やす', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = document.getElementById('chocolate');

      /**
       * 文字列を指定回数繰り返した文字列を返す。
       * @param {string} str 繰り返したい文字列。
       * @param {number} num 繰り返す回数。
       * @return {string} 生成された文字列。
       */
      function repeat(str, num) {
        // JavaScript には文字列繰り返し演算子がないので、このように
        // 文字列繰り返しをおこなう関数を定義することがよく見かけられます。
        return Array(num + 1).join(str);

        // ちなみに、上の書き方でなぜ文字列繰り返しになるのか、不思議だと
        // 思いませんか？余裕があれば、どうしてこの書き方でうまくいくのか
        // 考えてみてください！
      }
      element.textContent = repeat(element.textContent, 2);


      expect(element).to.have.property(secret('vq'), secret('pubpbyngr'));
      expect(element).to.have.deep.property(
        secret('grkgPbagrag'), '\uD83C\uDF6B\uD83C\uDF6B');

      // 参考情報
      // https://developer.mozilla.org/ja/docs/Web/API/Node/textContent
    });


    it('3 番の要素の背景色を "limegreen" に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は element 変数に代入してください。
      var element = document.getElementsByClassName('mediumseagreen')[0];

      // HTMLElement#style#backgroundColor によって、背景色を指定することが
      // できます。指定できる形式はいろいろありますが、今回はカラーキーワードを
      // 使う問題になっています。
      //
      // 色の形式いろいろ:
      // https://developer.mozilla.org/ja/docs/Web/CSS/color_value
      element.style.backgroundColor = 'limegreen';


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
      var element = document.getElementsByClassName('turquoise')[0];

      // HTMLElement#style#opacity によって、要素の不透明度を指定することが
      // できます。
      element.style.opacity = 0.5;


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
      var element = document.getElementsByTagName('blockquote')[0];

      // transform に指定できる要素はいろいろありますが、今回は rotate を使うの
      // がよさそうです。
      element.style.transform = 'rotate(10deg)';


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
      // なお、上に 20px 移動させる方法は複数ありますが、今回は top プロパティを
      // 使う方法を使ってください。
      var element = document.querySelector('[data-js-training="blueviolet"]');

      // top プロパティの指定は、数値ではないので注意が必要です。
      element.style.top = '-20px';

      // しかし、上の top 指定だけだと、要素が動いてくれません！
      // なぜでしょうか？そういうときは、まず MDN で検索してみましょう。
      //
      // top - CSS | MDN
      // https://developer.mozilla.org/ja/docs/Web/CSS/top
      //
      // ここには下のように書かれています。
      //
      // > CSS の top プロパティは、位置指定された要素 (positioned elements) の
      // > 位置を定義します。位置指定されていない要素には効力を持ちません。
      //
      // なるほど、position を設定していなかったからかもしれません。
      //
      // > 相対位置指定要素（ position が relative である要素）では、
      // > 通常位置からの下方への移動量を定義します。
      //
      // position が relative であれば、下への移動量で指定できるということですね。
      // ということで、relative を指定します。
      element.style.position = 'relative';

      // 動きました！

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
      var $element = $('#brown');
      $element.text($element.text() + $element.text());


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('oebja'));
      expect($element).to.have.text('\uD83C\uDF63\uD83C\uDF63');
    });


    it('8 番の要素のチョコを jQuery を使って2つに増やす', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = $('#darkorange');

      // またまた登場です！
      function repeat(str, num) {
        return Array(num + 1).join(str);
      }

      $element.text(repeat($element.text(), 2));


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.id(secret('qnexbenatr'));
      expect($element).to.have.text('\uD83C\uDF6B\uD83C\uDF6B');

      // 参考情報
      // http://api.jquery.com/category/manipulation/
    });


    it('9 番の要素の背景色を jQuery を使って "mediumseagreen" に変更する', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。

      // jQuery#css によって、style 属性の値を操作することができます。
      // 指定の方法はいろいろあります:
      //
      // - $('.limegreen').css('backgroundColor', 'mediumseagreen');
      // - $('.limegreen').css('background-color', 'mediumseagreen');
      var $element = $('.limegreen').css({ backgroundColor: 'mediumseagreen' });


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
      var $element = $('.mediumturquoise').css({ opacity: 0.5 });


      expect($element).to.be.instanceof(jQuery);
      expect($element).to.have.class(secret('zrqvhzghedhbvfr'));
      expect($element).to.have.css(secret('bcnpvgl'), '0.5');
    });


    it('11 番の要素を jQuery を使って時計回り方向に 10 度回転させる', function() {

      // ここにコードを記述してください。
      // 変更した DOM 要素は $element 変数に代入してください。
      var $element = $('p').css({ transform: 'rotate(10deg)' });


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
      var $element = $('[data-js-training="darkorchid"]').css({
        top: '-20px',
        position: 'relative'
      });


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
