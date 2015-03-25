describe('ステージ7（よくあるJSのイディオムを読める）', function() {
  'use strict';

  it('クロージャー', function() {
    var createCounter = function() {
      var i = 0;

      return function() {
        return i++;
      };
    };

    var counter = createCounter();

    expect(counter()).to.equal(/* ここに値を書き込んでください */);
    expect(counter()).to.equal(/* ここに値を書き込んでください */);
    expect(counter()).to.equal(/* ここに値を書き込んでください */);
  });


  it('ショートサーキット演算', function() {
    expect(true && 'default').to.equal(/* ここに値を書き込んでください */);

    expect(false || 'default').to.equal(/* ここに値を書き込んでください */);

    expect(0 || 'default').to.equal(/* ここに値を書き込んでください */);

    expect({} || 'default').to.deep.equal(/* ここに値を書き込んでください */);

    var func = function(arg) {
      return arg || {};
    };

    expect(func({ foo: 'bar' })).to.deep.equal(/* ここに値を書き込んでください */);

    expect(func()).to.deep.equal(/* ここに値を書き込んでください */);
  });


  it('無名即時実行関数', function() {
    var num = 0;

    (function() {
      num = 1;
    })();

    expect(num).to.equal(/* ここに値を書き込んでください */);
  });


  it('setTimeout 0 パターン', function() {
    var num = 0;

    setTimeout(function() {
      num = 1;
    }, 0);

    expect(num).to.equal(/* ここに値を書き込んでください */);
  });


  it('真偽値変換', function() {
    var truthy = 1;
    var falsey = 0;

    expect(!!truthy).to.equal(/* ここに値を書き込んでください */);
    expect(!!falsey).to.equal(/* ここに値を書き込んでください */);
    expect(Boolean(truthy)).to.equal(/* ここに値を書き込んでください */);
    expect(Boolean(falsey)).to.equal(/* ここに値を書き込んでください */);
  });


  it('prototype 継承', function() {
    var GrandParent = function() {
      this.grandParent = true;
    };

    var Parent = function() {
      this.parent = true;
    };
    Parent.prototype = new GrandParent();

    var Child = function() {
      this.child = true;
    };
    Child.prototype = new Parent();

    var parent = new Parent();
    var child = new Child();

    expect(parent.grandParent).to.equal(/* ここに値を書き込んでください */);

    expect(parent.child).to.equal(/* ここに値を書き込んでください */);

    expect(child.grandParent).to.equal(/* ここに値を書き込んでください */);

    expect(child.parent).to.equal(/* ここに値を書き込んでください */);
  });
});


describe('闇', function() {
  it('== 演算子', function(){
    expect('10' == 10)
      .to.equal(/* ここに値を書き込んでください */);

    expect(null == undefined)
      .to.equal(/* ここに値を書き込んでください */);

    expect(null == false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(true == 1)
      .to.equal(/* ここに値を書き込んでください */);

    expect([0, 1] == 0)
      .to.equal(/* ここに値を書き込んでください */);

    expect([1] == 1)
      .to.equal(/* ここに値を書き込んでください */);
  });


  it('new 演算子', function(){
    expect(Boolean(false) ? true : false)
    .to.equal(/* ここに値を書き込んでください */);

    expect(Boolean(0) ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(new Boolean(0) ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect('abc' ? true : false)
    .to.equal(/* ここに値を書き込んでください */);

    expect('' ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(String(0) ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(String('') ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(new String(0) ? true : false)
      .to.equal(/* ここに値を書き込んでください */);

    expect(new String('') ? true : false)
      .to.equal(/* ここに値を書き込んでください */);
  });


  it('暗黙のキャスト', function(){
    expect(+'10' === '10').to.equal()/* ここに値を書き込んでください */;

    expect(10 === (10 + '')).to.equal(/* ここに値を書き込んでください */);
  });


  it('Array コンストラクタ', function(){
    expect(Array(3)).to.deep.equal(/* ここに値を書き込んでください */);

    expect(Array(1, 2, 3)).to.deep.equal(/* ここに値を書き込んでください */);
  });


  it('with文', function(){
    var obj = { 'foo': undefined, 'undefined': true };

    with (obj) {
      expect(obj.foo === undefined)
        .to.equal(/* ここに値を書き込んでください */);
    }
  });


  it('typeof 演算子', function(){
    expect(typeof 0).to.equal(/* ここに値を書き込んでください */);

    expect(typeof true).to.equal(/* ここに値を書き込んでください */);

    expect(typeof 'string').to.equal(/* ここに値を書き込んでください */);

    expect(typeof function() {}).to.equal(/* ここに値を書き込んでください */);

    expect(typeof {}).to.equal(/* ここに値を書き込んでください */);

    expect(typeof []).to.equal(/* ここに値を書き込んでください */);

    expect(typeof undefined).to.equal(/* ここに値を書き込んでください */);

    expect(typeof null).to.equal(/* ここに値を書き込んでください */);
  });
});
