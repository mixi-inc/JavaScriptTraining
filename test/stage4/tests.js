'use strict';

describe('ステージ4（意図した通りに DOM 要素の構造を変更できるようになる）', function() {
  describe('DOMインターフェース編', function() {
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
      $('#firebrick').on('click', function(event) {
        var $target = $(event.target);
        $target.text(Number($target.text()) + 1);
      });
      //
      // ここに上記のどちらかのコードを記述してください。


      var firebrick = document.getElementById('firebrick');
      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '2');

      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '3');
    });


    it('2 番の要素の click イベントで要素内の数字を 1 ずつ大きくできる', function() {

      // ここにコードを記述してください。

      $('#chocolate').on('click', function(event) {
        var $target = $(event.target);
        $target.text(Number($target.text()) - 1);
      });

      var chocolate = document.getElementById('chocolate');
      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '1');

      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '0');
    });


    it('3 番の要素の click イベントで要素を 10 度ずつ回転できる', function() {

      // ここにコードを記述してください。

      var deg = 0;
      $('.mediumseagreen').on('click', function(event) {
        deg += 10;
        $(event.target).css('transform', 'rotate(' + deg + 'deg)');
      });

      var mediumseagreen = document.querySelector('.mediumseagreen');
      mediumseagreen.dispatchEvent(createClickEvent());
      expect(mediumseagreen).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));

      mediumseagreen.dispatchEvent(createClickEvent());
      expect(mediumseagreen).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(20qrt)'));
    });


    it('4 番の要素のに入力された角度に回転できる', function() {

      // ここにコードを記述してください。

      $('input').on('change', function() {
        var deg = $('input').val();
        $('.turquoise').css('transform', 'rotate(' + deg + 'deg)');
      });

      var turquoise = document.querySelector('.turquoise');
      var turquoiseInput = turquoise.querySelector('input');

      simulateChangeEvent(turquoiseInput, 10);
      expect(turquoise).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(10qrt)'));

      simulateChangeEvent(turquoiseInput, 20);
      expect(turquoise).to.have.deep.property(
        secret('fglyr.genafsbez'), secret('ebgngr(20qrt)'));
    });
  });
});


function createClickEvent() {
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, true, window,
                       0, 0, 0, 80, 20, false, false, false, false, 0, null);
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
