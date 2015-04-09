describe('ステージ7（よくあるJSのイディオムを読める）', function() {
  'use strict';

  describe('クロージャー', function() {
    var createCounter = function() {
      var i = 0;

      return function() {
        return i++;
      };
    };

    var counter = createCounter();


    it('1回目の値がわかる', function() {
      expect(counter()).to.equal(/* ここに値を書き込んでください */);
    });


    it('2回目の値がわかる', function() {
      expect(counter()).to.equal(/* ここに値を書き込んでください */);
    });


    it('3回目の値がわかる', function() {
      expect(counter()).to.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('ショートサーキット演算', function() {
    it("true && 'default' の結果がわかる", function() {
      expect(true && 'default').to.equal(/* ここに値を書き込んでください */);
    });


    it("false || 'default' の結果がわかる", function() {
      expect(false || 'default').to.equal(/* ここに値を書き込んでください */);
    });


    it("0 || 'default' の結果がわかる", function() {
      expect(0 || 'default').to.equal(/* ここに値を書き込んでください */);
    });


    it("{} || 'default' の結果がわかる", function() {
      expect({} || 'default').to.deep.equal(/* ここに値を書き込んでください */);
    });


    it('default 引数コードが読める1', function() {
      var func = function(arg) {
        return arg || { foo: 'foo' };
      };

      expect(func({ foo: 'bar' })).to.deep.equal(/* ここに値を書き込んでください */);
    });


    it('default 引数コードが読める2', function() {
      var func = function(arg) {
        return arg || { foo: 'foo' };
      };

      expect(func()).to.deep.equal(/* ここに値を書き込んでください */);
    });
  });


  it('無名即時実行関数が読める', function() {
    var num = 0;

    (function() {
      num = 1;
    })();

    expect(num).to.equal(/* ここに値を書き込んでください */);
  });


  it('setTimeout 0 パターンが読める', function() {
    var num = 0;

    setTimeout(function() {
      num = 1;
    }, 0);

    expect(num).to.equal(/* ここに値を書き込んでください */);
  });


  describe('真偽値変換', function() {
    var truthy = 1;
    var falsey = 0;


    it('!!truthy の結果がわかる', function() {
      expect(!!truthy).to.equal(/* ここに値を書き込んでください */);
    });


    it('!!falsey の結果がわかる', function() {
      expect(!!falsey).to.equal(/* ここに値を書き込んでください */);
    });


    it('Boolean(truthy) の結果がわかる', function() {
      expect(Boolean(truthy)).to.equal(/* ここに値を書き込んでください */);
    });


    it('Boolean(falsey) の結果がわかる', function() {
      expect(Boolean(falsey)).to.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('prototype 継承', function() {
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


    it('parent.grandParent の値がわかる', function() {
      expect(parent.grandParent).to.equal(/* ここに値を書き込んでください */);
    });


    it('parent.child の値がわかる', function() {
      expect(parent.child).to.equal(/* ここに値を書き込んでください */);
    });


    it('child.grandParent の値がわかる', function() {
      expect(child.grandParent).to.equal(/* ここに値を書き込んでください */);
    });


    it('child.parent の値がわかる', function() {
      expect(child.parent).to.equal(/* ここに値を書き込んでください */);
    });
  });
});



describe.skip('あなたの闇のJS力', function() {
  // .skip を外せば始められます

  describe('ゆるふわ == 演算子', function() {
    it("'10' == 10 の振る舞いがわかる", function() {
      expect('10' == 10)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('null == undefined の振る舞いがわかる', function() {
      expect(null == undefined)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('null == false の振る舞いがわかる', function() {
      expect(null == false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('true == 1 の振る舞いがわかる', function() {
      expect(true == 1)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('true == 10 の振る舞いがわかる', function() {
      expect(true == 10)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('[0, 1] == 0 の振る舞いがわかる', function() {
      expect([0, 1] == 0)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('[1] == 1 の振る舞いがわかる', function() {
      expect([1] == 1)
        .to.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('意図しない truthy/falsey', function() {
    it('Boolean(false) が truthy/falsey のどちらなのかわかる', function() {
      expect(Boolean(false) ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('Boolean(0) が truthy/falsey のどちらなのかわかる', function() {
      expect(Boolean(0) ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('new Boolean(0) が truthy/falsey のどちらなのかわかる', function() {
      expect(new Boolean(0) ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it("'abc' が truthy/falsey のどちらなのかわかる", function() {
      expect('abc' ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it("'' が truthy/falsey のどちらなのかわかる", function() {
      expect('' ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('String(0) が truthy/falsey のどちらなのかわかる', function() {
      expect(String(0) ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it("String('') が truthy/falsey のどちらなのかわかる", function() {
      expect(String('') ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('new String(0) が truthy/falsey のどちらなのかわかる', function() {
      expect(new String(0) ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });


    it("new String('') が truthy/falsey のどちらなのかわかる", function() {
      expect(new String('') ? true : false)
        .to.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('読めないキャスト万歳！', function() {
    it("10 + '' の値がわかる", function() {
      expect(10 + '').to.equal(/* ここに値を書き込んでください */);
    });


    it("+'10' の値がわかる", function() {
      expect(+'10').to.equal(/* ここに値を書き込んでください */);
    });


    it("'10.1'|0 の値がわかる", function() {
      expect('10.1'|0).to.equal(/* ここに値を書き込んでください */);
    });


    it("Array.prototype.slice.call({ length: 2, 0: 'foo', 1: 'bar' }) の値がわかる", function() {
      var obj = { length: 2, 0: 'foo', 1: 'bar' };

      expect(Array.prototype.slice.call(obj))
        .to.deep.equal(/* ここに値を書き込んでください */);
    });


    it('+(new Date()) の型がわかる', function() {
      expect(typeof +(new Date()))
        .to.equal(/* ここに値を書き込んでください */);
    });


    it('(new Date()) + 0 の型がわかる', function() {
      expect(typeof ((new Date()) + 0))
        .to.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('ダブルスタンダード Array コンストラクタ', function() {
    it('Array(3) が作成する配列の長さがわかる', function() {
      expect(Array(3)).to.have.length(/* ここに値を書き込んでください */);
    });


    it('Array(3) が作成する配列の0番目の要素がわかる', function() {
      expect(Array(3)[0]).to.equal(/* ここに値を書き込んでください */);
    });


    it('Array(3) が作成する配列がわかる', function() {
      expect(Array(3)).to.deep.equal(/* ここに値を書き込んでください */);
    });


    it('Array(1, 2, 3) が作成する配列の長さがわかる', function() {
      expect(Array(1, 2, 3)).to.have.length(/* ここに値を書き込んでください */);
    });


    it('Array(1, 2, 3) が作成する配列の0番目の要素がわかる', function() {
      expect(Array(1, 2, 3)[0]).to.equal(/* ここに値を書き込んでください */);
    });


    it('Array(1, 2, 3) が作成する配列がわかる', function() {
      expect(Array(1, 2, 3)).to.deep.equal(/* ここに値を書き込んでください */);
    });
  });


  describe('静的検査スレイヤー with 文', function() {
    it("with ({ 'foo': 'bar' }) のもとで foo の値がわかる", function() {
      var obj = { foo: 'bar' };

      with (obj) {
        expect(foo).to.equal(/* ここに値を書き込んでください */);
      }
    });


    it("with ({ 'foo': 'bar', 'undefined': 'bar' }) のもとで foo === undefined の結果がわかる", function() {
      var obj = { 'foo': 'bar', 'undefined': 'bar' };

      with (obj) {
        expect(foo === undefined).to.equal(/* ここに値を書き込んでください */);
      }
    });


    it("with ({ 'foo': 'bar', 'null': 'bar' }) のもとで foo === null の結果がわかる", function() {
      var obj = { 'foo': 'bar', 'null': 'bar' };

      with (obj) {
        expect(foo === null).to.equal(/* ここに値を書き込んでください */);
      }
    });
  });


  describe('JavaScript のゆるふわ型判定', function() {
    it('typeof 0 の結果がわかる', function() {
      expect(typeof 0).to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof true の結果がわかる', function() {
      expect(typeof true).to.equal(/* ここに値を書き込んでください */);
    });

    it("typeof 'string' の結果がわかる", function() {
      expect(typeof 'string').to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof function() {} の結果がわかる', function() {
      expect(typeof function() {}).to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof {} の結果がわかる', function() {
      expect(typeof {}).to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof [] の結果がわかる', function() {
      expect(typeof []).to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof undefined の結果がわかる', function() {
      expect(typeof undefined).to.equal(/* ここに値を書き込んでください */);
    });

    it('typeof null の結果がわかる', function() {
      expect(typeof null).to.equal(/* ここに値を書き込んでください */);
    });
  });
});
