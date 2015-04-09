'use strict';

describe('ステージ3（意図した通りに DOM 要素の構造を変更できるようになる）', function() {
  describe('DOMインターフェース編', function() {
    it('1 番の要素から幽霊要素を除去する', function() {

      // チュートリアル
      //
      // ここに以下のコードを記述してください。
      //
      // var element = document.querySelector('#firebrick');
      // var ghost = document.querySelector('.firebrick-ghost');
      // element.removeChild(ghost);

      var element = document.querySelector('#firebrick');
      var ghost = document.querySelector('.firebrick-ghost');
      element.removeChild(ghost);

      var firebrick = document.getElementById('firebrick');
      expect(firebrick.childNodes.length).to.equal(1);
      expect(firebrick).to.have.property('textContent', '1');
    });


    it('2 番の要素からインベーダー要素を除去する', function() {

      // ここにコードを記述してください。

      var element = document.querySelector('#chocolate');
      var ghost = element.querySelector('.chocolate-space-invader');
      element.removeChild(ghost);

      var darkorange = document.getElementById('chocolate');
      expect(darkorange.childNodes.length).to.equal(1);
      expect(darkorange).to.have.property('textContent', '2');
    });


    it('3 番の要素の左右の幽霊要素をすべて除去する', function() {

      // ここにコードを記述してください。

      var element = document.querySelector('.mediumseagreen');
      var ghosts = element.querySelectorAll('.mediumseagreen-ghosts');
      var ghost;

      // 残念なことに、querySelectorAll の返すオブジェクトは配列ではないため、
      // Array#forEach が使えません。代わりに、for ループを使っています。
      for (var idx = 0, len = ghosts.length; idx < len; idx++) {
        ghost = ghosts[idx];
        element.removeChild(ghost);
      }

      // JavaScript に慣れた人であれば、いったん配列に変換してから、
      // forEach を使うことが多いようです。また、lodash や underscore といった
      // ユーティリティライブラリは、配列のようなオブジェクトでも使える
      // forEach 関数を提供しているので、そちらを利用することもあります。
      //
      // function arrayFrom(arrayLike) {
      //   return Array.prototype.slice.call(arrayLike);
      // }
      //
      // arrayFrom(ghosts).forEach(element.removeChild.bind(element));

      var darkorange = document.querySelector('.mediumseagreen');
      expect(darkorange).to.have.property('textContent', '3\uD83C\uDF3F');
    });


    it('4 番の水色の要素の最後に要素を追加する', function() {
      var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC2C';

      // 上の elementToAdd を追加するコードをここに記述してください。

      // Node#appendChild メソッドをつかって、要素を最後に追加します。
      document.querySelector('.turquoise').appendChild(elementToAdd);


      var turquoise = document.querySelector('.turquoise');
      expect(turquoise.childNodes.length).to.equal(2);
      expect(turquoise).to.have.deep.property('childNodes[0].textContent', '4');
      expect(turquoise).to.have.deep.property('childNodes[1]').equal(elementToAdd);
    });


    it('5 番の青色の要素の最初に要素を追加する', function() {
      var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC1F';

      // 上の elementToAdd を、5 番の青色の要素の最初に追加するコードを
      // ここに記述してください。
      var element = document.querySelector('blockquote');

      // Node#appendChild だと要素の最後に追加されてしまうので、特定の要素の前に
      // 要素を追加する Node#insertBefore メソッドを使います。
      //
      // ここではまるのは、insertBefore には、追加する要素と基準となる要素の2つを
      // 引数として与えないといけないということです。しかし、blockquote 要素には
      // 基準となる要素がなさそうにみえます...
      //
      // そこで、Node の子要素を保持している Node#childNodes を見てみましょう。
      //
      // console.log(element.childNodes.length)
      //
      // どうやら、1つだけ子要素を持っているようです。
      // 中身を見てみましょう。
      //
      // console.log(element.childNodes[0]);
      //
      // なにやら文字列？らしきものが入っています（element.childNodes[0].constructor.name
      // で調べるとわかりますが Text オブジェクトです）。
      // つまり、基準となる要素にはこの Text オブジェクトを指定できそうです！
      //
      // なお、element.childNodes[0] は element.firstChild は同じ意味です。
      element.insertBefore(elementToAdd, element.firstChild);


      var blockquote = document.querySelector('blockquote');
      expect(blockquote.childNodes.length).to.equal(2);
      expect(blockquote).to.have.deep.property('childNodes[0]').equal(elementToAdd);
      expect(blockquote).to.have.deep.property('childNodes[1].textContent', '5');
    });
  });


  describe('jQuery 編', function() {
    it('6 番の要素から幽霊要素を除去する', function() {

      // チュートリアル
      //
      // jQuery でも同じことをおこなってみましょう。
      // ここに以下のコードを記述してください。
      //
      // $('.brown-ghost').remove();
      $('.brown-ghost').remove();


      var $brown = $('#brown');
      expect($brown.children()).to.have.length(0);
      expect($brown).to.have.text('6');
    });


    it('7 番の要素からインベーダー要素を除去する', function() {

      // ここにコードを記述してください。
      $('.darkorange-space-invader').remove();


      var $darkorange = $('#darkorange');
      expect($darkorange.children()).to.have.length(0);
      expect($darkorange).to.have.text('7');

      // 参考情報
      // http://api.jquery.com/category/manipulation/
    });


    it('8 番の要素の左右の幽霊要素をすべて除去する', function() {

      // ここにコードを記述してください。

      // DOM を直接扱うのに対して、非常に簡潔な表現が利用できています！
      $('.limegreen-ghosts').remove();


      var $limegreen = $('.limegreen');
      expect($limegreen).to.have.text('8\uD83C\uDF3F');
    });


    it('9 番の水色の要素の最後に要素を追加する', function() {
      var $elementToAdd = $('<span>\uD83D\uDC2C</span>');

      // 上の $elementToAdd を追加するコードをここに記述してください。
      $('.mediumturquoise').append($elementToAdd);


      var $mediumturquoise = $('.mediumturquoise');
      expect($mediumturquoise.children()).to.have.length(1);
      expect($mediumturquoise).to.have.text('9\uD83D\uDC2C');
    });


    it('10 番の青色の要素の最初に要素を追加する', function() {
      var $elementToAdd = $('<span>\uD83D\uDC1F</span>');

      // 上の $elementToAdd を追加するコードをここに記述してください。

      // insertBefore ではなく、prepend が使えます。
      $('p').prepend($elementToAdd);


      var $p = $('p');
      expect($p.children()).to.have.length(1);
      expect($p).to.have.text('\uD83D\uDC1F10');
    });
  });
});
