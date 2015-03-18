JavaScript Training
===================

JavaScript 初心者が JS の未来を見据えつつ、  
基礎をひととおり身に付けるための資料です。



セットアップ
------------


### 1. 環境をセットアップ

この研修では [Google Chrome](https://www.google.co.jp/chrome/browser/desktop/index.html) を利用します。  
上のリンクから Chrome をインストールしてください。

[Node.js](http://nodejs.jp/nodejs.org_ja/) も利用しています。  
こちらも上のリンクからインストールしてください。


### 2. JavaScriptTraining を fork

JavaScriptTraining の学習履歴を残すために、  
JavaScriptTraining リポジトリを fork します。

画面右上にある fork ボタンを押してください。


### 3. 必要なものをダウンロード

ここからはターミナル上での操作になります。  
リポジトリの URL をコピーし、下のコマンドを  
ターミナルで実行してください。

	git clone コピーしたURL


### 4. セットアップ

下のコマンドをターミナルで実行してください。

	cd JavaScriptTraining
	npm run setup


### 5. webサーバーを立ち上げる

下のコマンドをターミナルで実行してください。

なお、トレーニング中はこのコマンドを  
終了しないでください。

	npm run serve


### 6. トップページにアクセスする

ブラウザから [http://localhost:8000](http://localhost:8000) へ  
アクセスしてください。

トレーニングの一覧が表示されていれば完了です。



トレーニング前レクチャー
------------------------


### JavaScript とは

> JavaScript はウェブの言語です。
>
> ウェブページにある特定の要素を  
> 操作する手段として始まりましたが、  
> 途方もなく成長しました。
>
> (JavaScript パターン, O'Reilly)


### JavaScript のすごいところ

> クラスというものがなく、  
> 第一級オブジェクトである関数が  
> 多くの仕事に使われます。
>
> (JavaScript パターン, O'Reilly)


> Java や PHP が追加しはじめた  
> クロージャーや無名関数といった  
> 機能は、JavaScript 開発者が  
> 楽しんできた機能であり、  
> あるのが当然だと思われていました。
>
> (JavaScript パターン, O'Reilly)


### 楽しんできた機能？？？

```javascript
['Foo', 'Bar', 'Buz'].forEach(function(name) {
  console.log('hello ' + name);
});
```

（クロージャーはトレーニングで扱います）


### JavaScript はどこで動くのか

- Web ブラウザ
- Node.js, io.js


### いつ JavaScript を使うのか

- Web ページに独自の動きをつけたいとき

	（一部は CSS でできます）

- ページ遷移なしにサーバーと通信したいとき
- パフォーマンスチューニング
- フロントエンドエコシステム使いたいとき

	（タスクランナーとかパッケージマネージャ）


### JavaScript を使うと…

- アニメーションの例: [Si digital](http://sidigital.co/)
- インタラクションの例: [Vim.js](http://coolwanglu.github.io/vim.js/emterpreter/vim.html)
- Web API の例: [Google Map](https://www.google.co.jp/maps)



JavaScript に会いにいこう
-------------------------


### 1. 開発ツールを開く

Chrome で [http://localhost:8000](http://localhost:8000) を開きます。

Web ページの適当な場所で  
右クリック > 要素の検証

または

- Mac の人： ⌘ + ⌥ + i
- Windows の人：Ctrl + Shift + i


### 2. Console を開く

開発ツールを選択し、Esc キーを  
数回おしてみてください。

すると、下に Console が出てきます。  
この Console から、JavaScript を  
実行することができます。


### 3. 何か実行してみる

試しに `alert('Foo');` と実行してみてください。

アラートポップアップが表示されます。


### 4. 計算させてみる

`1 + 1` や `'Foo' + 'Bar'` なども実行できますね。


### 5. 変数代入・参照してみる

変数代入・参照もできますね。

```javascript
var foo = 'bar';
foo;
```


### 6. ブラウザオブジェクトをいじってみる

ブラウザオブジェクトもいじってみましょう。

```javascript
document.title = 'あなたとjava 今すぐダウンロード';
```

Chrome のタブ名が書き変わりました。


### 7. ページを再読み込みすると戻る

ページを再読み込みしてみてください。

これまでの変更はすべてリセットされます。  
（つまり、この方法で本番リリースは  
できないということですね！）


### 8. JavaScript とここで会える

- スクリプト読み込みパターン（推奨）

	&lt;script src="foo.js"&gt;&lt;/script&gt;

- インラインパターン

	&lt;script&gt;alert('inline!');&lt;/script&gt;

- インラインイベントハンドラーパターン

	&lt;img src="buz.png" onerror="alert('onerror!')"&gt;

- ブックマークレットパターン

	&lt;a href="javascript: alert('bookmarklet!')"&gt;&lt;/a&gt;



トレーニング
------------



### ステージ1

意図した DOM 要素を取得するトレーニング


#### DOM とは

Web ページは HTML のタグによって  
構成されています。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/github.png" height="300px">](http://mixi-inc.github.io/JavaScriptTraining/images/github.png)
[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/github-elements.png" height="300px">](http://mixi-inc.github.io/JavaScriptTraining/images/github-elements.png)

この 3D ビューを見ると、複数の HTML タグから
Web ページが構成されていることがよくわかります。


この HTML タグは下のような木構造をとっています。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/github-elements.png" height="300px">](http://mixi-inc.github.io/JavaScriptTraining/images/github-elements.png)
[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/github-tree.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/github-tree.png)

実際に、[mixi-inc/JavaScriptTraining](https://github.com/mixi-inc/JavaScriptTraining) を開き、  
開発コンソールのElement タブに表示されている  
構造を確認してみてください。


DOM (Document Object Model) は、この HTML のタグを  
JavaScript の世界で操作することができる API です。

JavaScript の世界にもってこられた HTML タグは、  
DOM 要素と呼ばれています。


[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/github-tree.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/github-tree.png)

HTML のタグを JavaScript 側で操作するためには  
HTML のタグを HTML 文書から取り出し、  
JavaScript の世界へと取ってこなければなりません。

このステージでは、HTML から DOM 要素を  
取得するという操作について学びます。


HTML タグには、目印となるいくつかの情報が  
付属しています。たとえば、下の div タグには  
ID 属性が付属しています。

```html
<div id="foo">foo</div>
```

JavaScript はこの目印を DOM API に渡すことで、  
DOM 要素を取得することができます。

```javascript
var div = document.getElementById('foo');
```


他にも CSS クラスやタグ名、

```html
<div class="foo">foo</div>
```

その他の属性から、DOM 要素を取得することが  
できます。

```html
<a href="foo">foo</a>
```


#### CSS セレクタについて

また、目印の指定の仕方のひとつに、  
CSS セレクタがあります。

たとえば、`foo` という ID のついたタグであれば、

```html
<div id="foo">foo</div>
```

```javascript
var div = document.querySelector('#foo');
```

というように、ID の先頭に ID セレクタ `#`  
をつけることで、取得したい DOM 要素を指示します。


この方法の利点は、複雑な目印を使って DOM 要素を  
取得することができるということでしょう。  

下の HTML の bar を包む `div` タグにあたる  
DOM 要素を取得する場合、

```html
<div class="foo">
  <div>foo</div>
  <div>bar</div>
</div>
```

```javascript
var div = document.querySelector('.foo div:last-child');
```

というように、CSS クラスセレクタ `.foo` に  
該当する要素の子要素を子孫セレクタ (スペース) で  
取得し、このうち、CSS 疑似セレクタ `:last-child` に  
マッチするものを取得するという操作になります。


CSS セレクタについては、[MDN のCSS リファレンス](https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors) が
参考になります。


#### 実習

下のテストが green になるように、  
`public/stage1/tests.js` を  
修正してください。

[http://localhost:8000/stage1/](http://localhost:8000/stage1/)



### ステージ2

意図通りに DOM 要素のスタイルを変更するトレーニング


#### 実習

下のテストが green になるように、  
`public/stage2/tests.js` を  
修正してください。

[http://localhost:8000/stage2/](http://localhost:8000/stage2/)



### ステージ3

意図通りに DOM の構造を変更するトレーニング


#### 実習

下のテストが green になるように、  
`public/stage3/tests.js` を  
修正してください。

[http://localhost:8000/stage3/](http://localhost:8000/stage3/)



### ステージ4

意図通りに DOM イベントを利用するトレーニング


#### 実習

下のテストが green になるように、  
`public/stage4/tests.js` を  
修正してください。

[http://localhost:8000/stage4/](http://localhost:8000/stage4/)



### ステージ5

意図通りにサーバーと通信するトレーニング


#### 実習

下のテストが green になるように、  
`public/stage5/tests.js` を  
修正してください。

[http://localhost:8000/stage5/](http://localhost:8000/stage5/)



### ステージ6

意図通りにモジュールを実装するトレーニング


#### 実習

下のテストが green になるように、  
`public/stage6/tests.js` を  
修正してください。

[http://localhost:8000/stage6/](http://localhost:8000/stage6/)



### ステージ7

よくあるイディオムを読み書きするトレーニング


#### 実習

下のテストが green になるように、  
`public/stage6/tests.js` を  
修正してください。

[http://localhost:8000/stage6/](http://localhost:8000/stage6/)
