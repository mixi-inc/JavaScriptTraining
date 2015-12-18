'use strict';

describe('ステージ4（意図通りにイベントを利用できる）', function() {
  describe('イベント編', function() {
    it('1 番の要素の click イベントで要素内の数字を 1 ずつ大きくできる', function() {

      // チュートリアル
      //
      // 2 通りの代表的な書き方があります。
      //
      // jQuery じゃない版:
      //
      // var element = document.getElementById('firebrick');
      // element.addEventListener('click', function() {
      //   element.textContent = Number(element.textContent) + 1;
      // });
      //
      // jQuery 版:
      //
      // $('#firebrick').on('click', function(event) {
      //   var $target = $(event.target);
      //   $target.text(Number($target.text()) + 1);
      // });
      //
      // ここに上記のどちらかのコードを記述してください。


      var firebrick = document.getElementById('firebrick');
      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '2');

      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '3');
    });


    it('2 番の要素の click イベントで要素内の数字を 1 ずつ小さくできる', function() {

      // ここにコードを記述してください。


      var chocolate = document.getElementById('chocolate');
      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '1');

      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '0');
    });


    it('3 番の要素の click イベントで要素を 10 度ずつ回転できる', function() {

      // ここにコードを記述してください。


      var mediumseagreen = document.querySelector('.mediumseagreen');
      mediumseagreen.dispatchEvent(createClickEvent());
      expect(mediumseagreen).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));

      mediumseagreen.dispatchEvent(createClickEvent());
      expect(mediumseagreen).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(20qrt)'));
    });


    it('4 番の要素を入力された角度に回転できる', function() {

      // ここにコードを記述してください。


      var turquoise = document.querySelector('.turquoise');
      var turquoiseInput = turquoise.querySelector('input');

      simulateChangeEvent(turquoiseInput, 10);
      expect(turquoise).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));

      simulateChangeEvent(turquoiseInput, 20);
      expect(turquoise).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(20qrt)'));
    });


    it('5 番の要素の内容を取得できる', function(done) {

      // このテストは、画面下部の .steelblue 要素の内容が "5 (クジラの絵文字)" で
      // あることを確認する意図があります。画面上は 5 とクジラの絵文字が正しく
      // 表示されています。しかし、テストは失敗しているようです。
      //
      // このテストが意図通り成功するようにテストコードを修正してください。
      //
      // なお、expect(steelblue).to.be.null は上記のテストの要件を満たして
      // いないので、正解ではありません。

      var steelblue = document.querySelector('.steelblue');
      expect(steelblue).to.have.property('textContent', '5 \uD83D\uDC33');
      done();
    });
  });
});


function createClickEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('click', false, true);
  return event;
}


function simulateChangeEvent(inputElement, newValue) {
  inputElement.value = newValue;
  inputElement.dispatchEvent(createChangeEvent());
}


function createChangeEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, true);

  return event;
}


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
