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

      var element = document.getElementById('firebrick');
      element.addEventListener('click', function() {
        element.textContent = Number(element.textContent) + 1;
      });


      var firebrick = document.getElementById('firebrick');
      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '2');

      firebrick.dispatchEvent(createClickEvent());
      expect(firebrick).to.have.property('textContent', '3');
    });


    it('2 番の要素の click イベントで要素内の数字を 1 ずつ小さくできる', function() {

      // ここにコードを記述してください。

      var element = document.getElementById('chocolate');
      element.addEventListener('click', function() {
        element.textContent = Number(element.textContent) - 1;
      });


      var chocolate = document.getElementById('chocolate');
      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '1');

      chocolate.dispatchEvent(createClickEvent());
      expect(chocolate).to.have.property('textContent', '0');
    });


    it('3 番の要素の click イベントで要素を 10 度ずつ回転できる', function() {

      // ここにコードを記述してください。

      var element = document.getElementsByClassName('mediumseagreen')[0];

      // クリック前の角度を保存しておくと、rotate の中から数字を取り出さなくて
      // すむので、楽に書くことができます。
      var angleDegree = 0;
      element.addEventListener('click', function() {
        angleDegree += 10;
        element.style.transform = 'rotate( ' + angleDegree + 'deg)';
      });


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
      var element = document.getElementsByClassName('turquoise')[0];
      var input = element.getElementsByTagName('input')[0];

      // change イベントを使います。
      input.addEventListener('change', function() {
        var angleDegree = input.value;
        element.style.transform = 'rotate( ' + angleDegree + 'deg)';
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


    it('5 番の要素の内容を取得できる', function(done) {

      // このテストは、画面下部の .steelblue 要素の内容が "5 (クジラの絵文字)" で
      // あることを確認する意図があります。画面上は 5 とクジラの絵文字が正しく
      // 表示されています。しかし、テストは失敗しているようです。
      //
      // このテストが意図通り成功するようにテストコードを修正してください。
      //
      // なお、expect(steelblue).to.be.null は上記のテストの要件を満たして
      // いないので、正解ではありません。


      // この問題は、JavaScript の実行タイミングによっておきています。
      // 実は、この JavaScript が実行される時点では、また 5 番の要素の
      // DOM が作成されていないのです！
      //
      // 開発ツールで DOM の構造をみてみると、tests.js を読み込む script タグの
      // 後に、5 番目の要素が配置されています。このような配置のとき、下のような
      // 順番で処理が実行されています。
      //
      // 1. <script src="tests.js"> の前まで DOM が作成される
      // 2. test.js の読み込みが始まる
      // 3. test.js の読み込みが終わる
      // 4. このテストコードが実行され始める
      // 5. <script src="/api/heavy"> の読み込みが始まる（1秒かかる）
      // 6. その間にテストコードがここで実行される
      // 7. <script src="/api/heavy"> の読み込みが終わる
      // 8. 5 番目の要素が DOM に作成される
      //
      // そこで、DOMContentLoaded イベント、または load イベントを使います。
      // これらのイベントは、すべての DOM 要素が作成された段階で発生します。
      // 先ほどの処理の流れでは、8 以降でイベントが発生します。
      //
      // load イベントは画像の読み込みも待ちますが、DOMContentLoaded は
      // 待たないという違いがあります。今回のようなケースでは、DOM の作成を
      // 待てばよいだけなので、DOMContentLoaded を使うとよいでしょう。
      document.addEventListener('DOMContentLoaded', function() {
        var steelblue = document.querySelector('.steelblue');
        expect(steelblue).to.have.property('textContent', '5 \uD83D\uDC33');
        done();
      });
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
