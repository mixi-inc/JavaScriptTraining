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

JavaScript の特色のひとつは、ブラウザ上で  
動作するということです。ブラウザ上で動作できる  
言語はいくつかありますが、一般的に  
JavaScript がよく使われます。


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

HTML タグは、JavaScript の世界で  
DOM 要素というオブジェクトとして扱われます。


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
取得し、このうち `div` タグから CSS 疑似セレクタ
`:last-child` にマッチするものを取得する  
という操作になります。


図にすると、このようになります。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/css-selector-example.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/css-selector-example.png)

CSS セレクタについては、[MDN のCSS リファレンス](https://developer.mozilla.org/ja/docs/Web/CSS/Reference#Selectors) が
参考になります。

仕様を見ないと我慢ならぬ！という立派な方は、  
[セレクタ Level 3 仕様](http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/) を見るとよいでしょう。


#### 実習

下のテストが green になるように、  
`public/stage1/tests.js` を  
修正してください。

[http://localhost:8000/stage1/](http://localhost:8000/stage1/)



### ステージ2

意図通りに DOM 要素のスタイルを  
変更するトレーニング


#### DOM 要素のスタイル

DOM 要素には、

- 先ほど DOM API に渡した ID 属性
- CSS クラス属性などの目印となる属性
- 見た目を操作するスタイル属性

などが付属しています。

（DOM の属性の一覧は [MDN DOM リファレンス](https://developer.mozilla.org/ja/docs/DOM/DOM_Reference) を  
参照してください）


このうち、スタイル属性を編集すると、DOM 要素の  
見た目を変化させることができます。

たとえば、Github のヘッダの octocat の  
style.color 属性を変更してみました。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/octocats.png" width="600px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/octocats.png)


このスタイル属性は CSS の仕様と対応するように  
定められています。

ただ、アニメーションを含め、見た目の変更は  
CSS クラス名の追加/編集/削除によっておこなう  
ことが推奨されてきています。

（[レンダリングエンジンによる最適化が効くのです！](https://developer.mozilla.org/ja/docs/Web/Guide/CSS/Using_CSS_animations)）

JavaScript は見た目の変更のきっかけを  
与えるだけにとどめるのが、上手な  
HTML/JavaScript/CSS 分業の基本です。


残念なお知らせですが、  
今回のトレーニングは CSS を  
書けるようになることが目的ではないので、  
レガシーな element.style を編集するやり方を  
学びます。


レガシー…  &#x1f631;


まあ、肩を落とさないでください。

レガシーとはいえ、レガシーブラウザーを  
相手にするライブラリを読み書きするときには、  
どうしても必要になります。

ちなみに、「レガシー？帰らせていただきます」は  
フロントエンドエンジニアとして大切な感覚ですので  
大事にしてください。


#### 実習

下のテストが green になるように、  
`public/stage2/tests.js` を  
修正してください。

[http://localhost:8000/stage2/](http://localhost:8000/stage2/)



### ステージ3

意図通りに DOM の構造を変更するトレーニング


#### DOM の構造

このステージでは、DOM のスタイルではなく、  
構造を変更するトレーニングをおこないます。

たとえば、書籍を検索する Web API を使って、  
書籍検索サービスを開発することを例に、  
DOM の構造を変更する必要性を考えてみます。


書籍検索サービスは、検索結果を下のように返したとしましょう。

```javascript
[
  {
    "title": "紅",
    "score": 5
  },
  {
    "title": "円環少女",
    "score": 5
  },
  {
    "title": "SHI-NO -シノ- 黒き魂の少女",
    "score": 5
  },
  ...
]
```


このとき、画面に表示するために下のような HTML を  
追加することになります。

```html
<ul>
  <li>
    <div>紅</div>
    <div>★★★★★</div>
  </li>
  <li>
    <div>円環少女</div>
    <div>★★★★★</div>
  </li>
  <li>
    <div>SHI-NO -シノ- 黒き魂の少女</div>
    <div>★★★★★</div>
  </li>
  ...
</ul>
```


サーバー側で上のような HTML を  
生成してもよいのですが、  
JavaScript による DOM 構造の操作に  
よって実現させることができれば、  
軽快な書籍検索サービスをつくることができます。

（ページのリロードが必要ないからですね！）


このように、Web サービスの使いやすさを  
追求するためには、JavaScript による  
DOM 構造の操作が重要なのです。


#### 実習

下のテストが green になるように、  
`public/stage3/tests.js` を  
修正してください。

[http://localhost:8000/stage3/](http://localhost:8000/stage3/)



### ステージ4

意図通りに DOM イベントを利用するトレーニング


### DOM イベント解説編

ユーザーがボタンを押したり、  
検索欄に入力したとき、JavaScript は  
DOM イベントをうけとることができます。

たとえば、下のボタンは click イベントを  
引きがねとして、DOM 構造を書き換えます。

<div style="font-size:200%"><button style="font-size:inherit" onclick="this.parentNode.textContent='\uD83C\uDF63'">Click me</button></div>


click イベント以外にも多様なイベントがあります：

- dblclick: 要素上でダブルクリックされたとき
- mousemove: 要素上でポインタが移動しているとき
- scroll: 画面がスクロールされたとき
- unload: 次のページに遷移する直前
- keydown: キーボードが押されたとき
- animationstart: CSS アニメーションが開始したとき
- offline: ブラウザがオフラインになったとき

ここに載っていないイベントの一覧は  
[MDN DOM イベントリファレンス](https://developer.mozilla.org/ja/docs/Web2/Reference/Events) を  
参照するとよいでしょう。


試しに、このページを制御する JavaScript が  
監視しているイベントを見てみましょう。

開発ツールを開き、Elements タブの中段にある  
Event Listeners タブを開いてみてください。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/chrome-dev-tool-event-debugging.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/chrome-dev-tool-event-debugging.png)


#### DOM イベント実装編

DOM のイベントを JavaScript 側で監視するには、  
いくつかの方法があります。

- addEventListener スタイル

	```javascript
	var button = document.getElementById('button');
	button.addEventListener('click', function(event) {
	  console.log(event);
	});
	```

- インラインイベントハンドラースタイル

	```html
	<button onclick="console.log(this)"></button>
	```

- イベント属性スタイル（レガシー）

	```javascript
	var button = document.getElementById('button');
	button.onclick = function(event) {
	  console.log(event);
	};
	```


このうち、 `addEventListener` スタイルが  
お行儀のよい方法だといわれ、  
推奨されてきました。

```javascript
// お行儀のよさ
button.addEventListener('click', function(event) {
  console.log(event);
});
```


しかし、AngularJS という最近の  
フレームワークでイベント属性スタイルを  
積極的に採用する動きもあります。

```html
<!-- AngularJS 1.x -->
<button ng-click="changeName(newname.value)"> Change Name </button>

<!-- AngularJS 2.x -->
<button (click)="changeName(newname.value)"> Change Name </button>
```

このような場合は、無理に `addEventListener` を  
使わずに、そのフレームワークのしきたりに  
従うとよいでしょう。


### DOM イベント伝搬の仕組み

次に、DOM のイベント伝搬（propagation）  
について解説します。


下のようなボタンを例に、伝搬の必要性を  
考えていきます。このボタンは、アイコンつきで  
表示されることを意図しています。

```html
<button><img src="icon.png">Click me</button>
```

この button 要素の click イベントを  
監視することを考えます。

button 要素に addEventListener すればよいように  
見えますが、アイコン画像をクリックされた場合  
どうなるのでしょうか？


実は、個要素で発生した DOM イベントは  
親要素からも監視することができます。

この仕組みが DOM イベントの伝搬です。


イベントの伝搬は4つのフェーズから構成されます。

1. capturing フェーズ

	ルート要素からイベントの対象要素まで降りていく

2. target フェーズ

	イベントの対象要素に到着

3. bubbling フェーズ

	イベントの対象要素からルート要素まで昇っていく

4. ブラウザ既定の処理がおこなわれるフェーズ

	リンクなどによる画面遷移がおこなわれる


[<img src="http://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg" style="background-color:white" height="500px">](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)


先ほどのボタンの例では、img 要素の  
click イベントは bubbling によって  
button 要素まで通知されるのです。

```html
<button><img src="icon.png">Click me</button>
```

```javascript
// button への addEventListener で OK
button.addEventListener('click', function(event) {
  // Do something
});
```


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
