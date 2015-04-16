2日でできる JavaScriptTraining
==============================

JavaScript 初心者が JS の未来を見据えつつ、  
基礎をひととおり身に付けるための資料です。



この README は `npm run presentation` で  
再生することができます。



トレーニングの目標
------------------



このトレーニングの目標は、  
**モジュールを読み書きできるようになり、**  
自分の好きなモジュールを  
つくれるようになることです。



トレーニングの前に、セットアップを  
終わらせてしまいましょう。



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

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/fork-button.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/fork-button.png)



### 3. 必要なものをダウンロード

ここからはターミナル上での操作になります。  
リポジトリの URL をコピーし、下のコマンドを  
ターミナルで実行してください。

	git clone コピーしたURL



### 4. セットアップ

下のコマンドをターミナルで実行してください。

	cd JavaScriptTraining
	npm install



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

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/console.png" height="300px" style="background-color: white">](http://mixi-inc.github.io/JavaScriptTraining/images/console.png)



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



### 6. ブラウザオブジェクトをいじる

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



開発環境道場
------------

（あるいはポエム）



JavaScript を効率的に書けるようにするために  
最低限の開発環境を整えます。



JavaScript に精通していない人に  
「どんなツールを使ったらいいですか？」と  
聞かれることがよくあります。

私は「構文ハイライトと lint を使うといいですよ」、  
と答えることにしています。

[<img src="http://mixi-inc.github.io/JavaScriptTraining/images/syntax-error.png" width="600px">](http://mixi-inc.github.io/JavaScriptTraining/images/syntax-error.png)



ひとつエピソードを紹介します。



JavaScript には静的型検査がないことや、  
記号が多い構文や、まずい仕様がいくつもあるので、  
ミスを犯しやすい言語の一つです。



たとえば、JavaScript には `"use strict"` という  
宣言があります。この宣言は JavaScript の  
まずい仕様の一部をエラーにすることで修正を  
促す効果があり、よく記述を推奨される宣言です。



あるプロジェクトで気を利かした  
プログラマーが `"use strict"` を  
新しいスクリプトで使い始めました。

```javascript
"use strict";

// Do something...
```

これは、開発時のミスを早期発見できるように  
するよい方法です！



しかし、リリース後、新しいスクリプトとは  
関係ないはずの JavaScript による  
メニューが動作しなくなっていました。

なぜでしょうか？



これは、パフォーマンスチューニングの一環で  
複数の JavaScript ファイルを結合していたこと、  
ファイルに対する `"use strict"` を利用していた  
ことの2つが原因となって起きた不具合です。 

`"use strict"` が結合された  
すべてのファイル全体に効くように  
なり、`"use strict"` に対応していない  
古いファイルがエラーを出すように  
なってしまっていたのでした。



このエピソードは、いわゆる**初見殺し**です。

「何それどうしてそんな仕様なの&#x1f631;」  
と言いたくなりますね。



悲しいことに、このような落とし穴は  
JavaScript の仕様・文化に数多く  
潜んでいます。

これらのミスをどのようにしたら  
防げるのでしょうか？



[ESLint](http://eslint.org/) や [JSHint](http://jshint.com/)、 [JSLint](http://www.jslint.com/) のような lint を  
使いましょう。

たとえば、ESLint を実行すると  
下のような警告が出されます。これによって、  
潜在的な不具合をだいぶ減らせるようになるのです。

	Use the function form of "use strict".
	（関数形式の "use strict" を使ってね）



ミスを防ぐためには、「頑張る」とか  
「注意する」のような精神論ではなく、  
 lint によって防止することが必要です。  
あなたが JavaScript にまだ精通していないので  
あれば、真っ先にいれるべきは lint なのです。



1. lint をかけてみる

	ターミナルで下のコマンドを実行してください。
	ESLint が実行されます。

		gulp lint-stage1

2. 構文ハイライトを効かせる

	ほとんどのエディタは構文ハイライトを  
	サポートしています。Vim のように  
	構文ハイライトが選べるのであれば、  
	よりミスのわかりやすい構文ハイライトを  
	利用します。



トレーニング
------------



### ステージ1

DOM 要素を取得するトレーニング



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



他にも CSS クラスやタグ名、その他の属性から、  
DOM 要素を取得することができます。

```html
<div class="foo">foo</div>
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

というように、ID の先頭に `#` をつけた  
IDセレクタ `#foo` で、取得したい DOM 要素を指示します。



この方法の利点は、複雑な位置にある DOM 要素を  
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



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage1

警告があれば、修正してみてください。



### ステージ2

DOM 要素の属性・テキストを変更する  
トレーニング



このステージでは、スタイルの変更や  
表示文字列を変更するやり方を学びます。



#### DOM 要素の属性・テキスト

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



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage2

警告があれば、修正してみてください。



### ステージ3

DOM の構造を変更するトレーニング



#### DOM の構造

このステージでは、DOM の属性ではなく、  
構造を変更するトレーニングをおこないます。

たとえば、書籍を検索する Web API を使って、  
書籍検索サービスを開発することを例に、  
DOM の構造を変更する必要性を考えてみます。



書籍検索サービスの API は、検索結果を  
下のように返したとしましょう。

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



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage3

警告があれば、修正してみてください。



### ステージ4

DOM イベントを利用するトレーニング



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

たくさんのイベントが登録されていますね。

では、これらのイベントの使い方を解説していきます。



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



しかし、[AngularJS](https://angularjs.org/) という最近の  
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

この button 要素の `click` イベントを  
監視することを考えます。

button 要素に `addEventListener` すればよいように  
見えますが、アイコン画像をクリックされた場合  
どうなるのでしょうか？



実は、子要素で発生した DOM イベントは  
親要素からも監視することができます。

この仕組みが DOM イベントの伝搬です。



[<img src="http://www.w3.org/TR/DOM-Level-3-Events/eventflow.svg" style="background-color:white" height="500px">](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)



`addEventListener` の引数で  
1-2-4 か 1-3-4 のどちらかを選べます。

1. capturing フェーズ

	ルート要素からイベントの対象要素まで降りていく

2. target フェーズ

	イベントの対象要素に到着

3. bubbling フェーズ

	イベントの対象要素からルート要素まで昇っていく

4. ブラウザ既定の処理がおこなわれるフェーズ

	リンクなどによる画面遷移がおこなわれる



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



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage4

警告があれば、修正してみてください。



### ステージ5

非同期処理のトレーニング



JavaScript の美しい機能のひとつに  
非同期処理があります。

下のコードは 1 秒まったあとに  
`console.log(1)` を実行するコードです。

```javascript
setTimeout(function() {
  console.log(1);
}, 0);

console.log(2);
```

このコードを実行すると、`1` と `2` の  
どちらか先に表示されるでしょうか。



答えは、`2` です。`setTimeout` に登録された  
関数はいま実行途中のすべての関数が終了してから  
呼び出されます（[JavaScriptのsetTimeoutを理解する](http://blog.mouten.info/2014/09/20/article/)）。

ここでは、関数を実行するタイミングを  
後回しにすることによって、待っている間に  
別のことができる、ということを覚えてください。

この待ち時間の間に別の処理を実行する  
やり方を非同期処理と呼びます。



#### サーバーとの通信

非同期処理の代表例といえばサーバーとの通信です。

サーバーとの通信はネットワークを通過するため、  
かなりの時間がかかります。そこで、レスポンスが  
返ってくるまでの間に、別の処理をおこなうことに  
よって、時間を有効活用することが重要になります。



JavaScript にはサーバーと非同期に通信するための  
API が用意されています。

- [Fetch API](http://www.hcn.zaq.ne.jp/___/WEB/Fetch-ja.html)

	現在策定中の新しい標準仕様

- [XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest)

	jQuery.ajax のようなショートハンドが使われる  
	ことが多く、実際手で書くことはほとんどない



今回は、JavaScript の将来を見据えて、  
Fetch API によるサーバーとの通信を  
トレーニングします。



#### Fetch API

Fetch API は下のように書きます。  
このコードは、`/users.json` を  
取得します。

```javascript
fetch('/users.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    console.log('parsed json', json)
  })
  .catch(function(error) {
    console.error('parsing failed', error)
  });
```

`.then`、`.catch` という不思議なメソッドで  
つながっています。



#### Promise を使った非同期処理

さきほどの `.then`、`.catch` は、非同期処理の  
結果を、引数に渡した関数で受け取るために  
用意されています。

たとえば、`.then` を使うと、正常にレスポンスが  
受け取れた場合に関数を実行できます。

```javascript
fetch('/users.json')
  .then(function(response) {

    // /users.json を正常に取得できたときに、  
    // response をログに出力する
    console.log(response);
  });
```

エラーがあった場合は、ログ出力は実行されません。



また、`.catch` を使うと、エラーが発生した場合に  
関数を実行できます。

```javascript
fetch('/users.json')
  .catch(function(errror) {

    // /users.json の取得時にエラーがでたときに、
    // error をログに出力する
    console.error(error);
  });
```

こちらは、正常にレスポンスを受け取れた場合は、
ログ出力は実行されません。

なお、先ほどの例のように `.then` と `.catch` を  
同時につけることもできます。



サーバーと通信するだけなのに、  
なんか複雑すぎるような…？



実はこの Promise という複雑な仕組みを使う理由は、  

- 並行非同期処理
- 直列非同期処理

を書きやすくする、ということなのです。



#### Promise による平行非同期処理

`Promise.all` を使います。

```javascript
// 2つの Web API からレスポンスが欲しい！

Promise.all([
  fetch('/api/foo'),
  fetch('/api/bar')
])
.then(function(responses) {
  var responseFoo = responses[0];
  var responseBar = responses[1];
  doSomething(responseFoo, responseBar);
});
```



#### Promise による直列非同期処理

`.then` で次々に処理を連結できます。

```javascript
// Web API の結果を利用して別の API を実行したい！

fetch('/api/foo')
  .then(doSomething)
  .then(function() { return fetch('/api/bar'); })
  .then(doSomething)
  .then(function() { return fetch('/api/buz'); })
  .then(doSomething);
```



#### 実習

下のテストが green になるように、  
`public/stage5/tests.js` を  
修正してください。

[http://localhost:8000/stage5/](http://localhost:8000/stage5/)



#### 参考になる資料

- [Promise に関する参考情報](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise 参考情報（重量級）](http://azu.github.io/promises-book/)
- [Fetch API に関する参考情報](https://github.com/github/fetch)
- [Github API に関する参考情報](https://developer.github.com/v3/)



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage5

警告があれば、修正してみてください。



### ステージ6

モジュールを実装するトレーニング



JavaScript は言語機能としてモジュールの  
仕組みをもっていません。

言語機能としてのモジュールシステムを利用するには  
[ECMAScript 6](https://developer.mozilla.org/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) を待たなければなりません。



とはいっても、みんなモジュールを使いたかったので、  
さまざまなモジュールシステムとそれに付随する  
エコシステムが開発されてきました。



- bower
- component
- jam
- volo
- npm with browserify
- spm
- jspm
- duo

(source: [wilmoore/frontend-packagers](https://github.com/wilmoore/frontend-packagers))



あ…めっちゃ多い…&#x1f635;



今回は、利用方法がシンプルな「[bower](http://bower.io)」を使います。



#### bower

bower は、JavaScript、HTML、CSSなどを  
共有して使えるようにするフロントエンドの  
エコシステムです。

他の人が作ったモジュールを利用することや、  
自分が作ったモジュールを公開することも  
できます。



ただ、bower はモジュール読み込みの  
仕組みを提供していません。

この部分は RequireJS など、別の  
モジュールシステムに頼ることになります。  

どのモジュールシステムに対応するかという選択は、
bower によって読み込まれるパッケージ側に  
裁量（責務）があります。



この方針を[公式ドキュメント](http://bower.io/#getting-started)は端的に  
言い表しています。

> How you use packages is up to you.
>
> （どのようにしてパッケージを使うのかはあなた次第です）



#### 実習

まず、bower を実行することを体験してみます。  
bower の設定ファイル bower.json を対話的に  
作成します。

	cd public/stage6/sample
	bower init



あとは説明に従って選択していくと、bower の  
パッケージ設定ファイル `bower.json` が作成されます。



##### 1. name

このパッケージの名前を指定します。

パッケージとして公開する場合には、既に同じ  
パッケージ名が存在していないか確かめる必要が  
あります。

この研修では、公開/非公開を問わないので、  
お好きな名前をつけてください。



##### 2. version

このパッケージのバージョンを指定します。

バージョンの形式は [Semantic Versioning](http://semver.org/lang/ja/) に  
準拠しています。

この形式は、一般的に `X.Y.Z` と記述されます。

- `X` は major version（後方互換性がなくなる変更）
- `Y` は minor version（前方互換性がなくなる変更）
- `Z` は patch version（バグ修正など）

今回は開発版なので、0.0.0 にしておきましょう  
（major versionの 0 は開発版であることを示します）。



##### 3. description

パッケージの簡単な概要を記述します。

有名どころの説明をみてみます。

- bootstrap: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
- angular-latest: HTML enhanced for web apps
- less.js: Leaner CSS



##### 4. main file

このパッケージが外部のパッケージに公開したい  
ファイルを指定します。文字列と配列が指定できます。  
今回は空で問題ありません。



##### 5. what types of module does this package expose?

このパッケージが外部にエンドポイントを公開する  
方法を明示します。

- amd: [Asynchronouse Module Definition](https://github.com/amdjs/amdjs-api/wiki/AMD) ([参考資料](http://www.matzmtok.com/blog/?p=845))
- es6: [EcmaScript 6](http://wiki.ecmascript.org/lib/exe/fetch.php?id=harmony%3Aspecification_drafts&cache=cache&media=harmony:ecma-262_edition_6_03-17-15-releasecandidate3.pdf) ([参考資料](https://www.xenophy.com/javascript/8447#run-time-renaissance))
- globals: グローバル変数経由でエンドポイント公開
- node: [Node.js](https://nodejs.org/api/modules.html)
- yui: [YUI](http://yuilibrary.com/yui/docs/yui/create.html) (メンテ停止したのでもうやめましょう)

今回は何も選択しないで問題ありません。



##### 6. keywords

このパッケージを検索でヒットさせるための  
キーワードを指定します。



##### 7. authors

このパッケージの作者を指定します。



##### 8. license

好きなライセンスを選ぶとよいです。

デフォルトは [MIT ライセンス](http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license)です。



##### 9. homepage

このパッケージの情報が見られる URL を記述します。



##### 10. set currenttly installed components as dependencies?

既に `bower_components` に含まれている  
コンポーネントをパッケージ設定に  
含まれるようにするかどうかを指定します。

n で構いません。



##### 11. add commonly ignored files to ignore list?

`.gitignore` などのファイルから、  
パッケージに含めないファイルの指定を  
読み込むかどうか指定します。

y で読み込ませます。



##### 12. would you like to mark this package as private which prevents it from being accidentaly published to the registry?

bower のレジストリへ登録できないようにするか  
どうか指定します。

y でレジストリへの公開ができないように設定します。



##### 13. Looks good?

この設定で問題なければ y を入力します。



##### bower install

いよいよ、パッケージを追加していきます。

パッケージは [Search Bower packages](http://bower.io/search/) で  
検索することができます。



では、試しに [Buttons](https://github.com/alexwolfe/Buttons) パッケージを  
追加してみましょう。

下のコマンドによって、Buttons パッケージが、
`bower_components` 以下に配置されます。

	bower install --save Buttons



`--save` はパッケージ設定に依存ファイルを  
追記する効果があります（`bower.json` の  
内容が変化しているので、見てみてください）。

ここで設定に追記されたパッケージは、  
次回から `bower install` でまとめて  
取得することができるようになります。



今回は、簡単のために script タグで直接  
`bower_components` 以下の JavaScript/CSS を  
読み込みます。



今回の実習はテスト駆動形式ではありません。

満足のいく Web アプリケーションが書けたら、
`qualityOfYourAppliation` に `true` を  
代入してください。

[http://localhost:8000/stage6/](http://localhost:8000/stage6/)



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage6

警告があれば、修正してみてください。



### ステージ7

よくあるイディオムを読むトレーニング



このステージでは、よくある JavaScript の  
不思議な書き方を学びます。

なお、今回はヒントがありません！  
ぜひ自分で調べて、結果を確かめてみてください！



なお、興味のある方は、ステージ「闇」に  
挑戦してみてくださいね！

`.skip` を削除すれば挑戦できるようにに  
なります。



#### 実習

下のテストが green になるように、  
`public/stage7/tests.js` を  
修正してください。

[http://localhost:8000/stage7/](http://localhost:8000/stage7/)



#### クリアできたら

Lint をかけてみましょう。

    gulp lint-stage7

警告があれば、修正してみてください。



付録
----



### 解答・解説について

解答は [2015-example-solution](https://github.com/mixi-inc/JavaScriptTraining/compare/2015...2015-example-solution) で見られます！



### Promise について



#### Promise による平行非同期処理

Promise による平行非同期処理を通常のやりかたと、
Promise らしいやり方とでやってみました。

コードを比較してみてください。



```javascript
// 2つの Web API からレスポンスが欲しい！

var done = { foo: false, bar: false };
var responses = { foo: null, bar: false };
fetch('/api/foo').then(function(responseFoo) {
  if (!done.bar) {
    done.foo = true;
    responses.foo = responseFoo;
    return;
  }
  doSomething(responseFoo, responses.bar);
});
fetch('/api/bar').then(function(responseBar) {
  if (!done.foo) {
    done.bar = true;
    responses.bar = responseFoo;
    return;
  }
  doSomething(responses.foo, responseBar);
});
```

レスポンス取得の待ち合わせ処理があり、  
状態を複数もつ厄介なコードにしあがっていますね。



```javascript
// 2つの Web API からレスポンスが欲しい！

Promise.all([
  fetch('/api/foo'),
  fetch('/api/bar')
])
.then(function(responses) {
  var responseFoo = responses[0];
  var responseBar = responses[1];
  doSomething(responseFoo, responseBar);
});
```

`Promise.all` を使うと、待ち合わせ処理が  
なくスッキリ！



#### Promise による直列非同期処理

直列非同期処理についても、通常のやり方と、  
Promise らしいやり方でやってみました。

コードを比較してみてください。



```javascript
// Web API の結果を利用して別の API を実行したい！

fetch('/api/foo').then(function(responseFoo) {
  doSomething(responseFoo);
  fetch('/api/bar').then(function(responseBar) {
    doSomething(responseBar);
    fetch('/api/buz').then(function(responseBuz) {
      doSomething(responseBuz);
    });
  });
});
```

コードがネストしているので、後ろの方の  
関数のスコープが深くなってしまっています。
変数を追跡するのに手間がかかりそうです。



ネストの外に出すだけならば、終了コールバックを  
呼び出す[継続渡しスタイル](http://ja.wikipedia.org/wiki/%E7%B6%99%E7%B6%9A%E6%B8%A1%E3%81%97%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB) で  
書くことができます。

```javascript
// Web API の結果を利用して別の API を実行したい！

fetch('/api/foo').then(callbackFoo);

function callbackFoo(responseFoo) {
  doSomething(responseFoo);
  fetchBar(callbackBar);
}

function fetchBar(callback) {
  fetch('/api/bar').then(callback);
}

function callbackBar(responseBar) {
  doSomething(responseBar);
  fetchBuz(callbackBuz);
}

function fetchBuz(callback) {
  fetch('/api/buz').then(callback);
}

function callbackBuz(responseBuz) {
  doSomething(responseBuz);
}
```

流れが追いづらい！



クロージャー + 継続渡しスタイルを使うと…

```javascript
// Web API の結果を利用して別の API を実行したい！

fetch('/api/foo').then(fetchBar(fetchBuz(doSomething)));

function fetchBar(callback) {
  return function(responseFoo) {
    doSomething(responseFoo);
    fetchBar(callback);
  };
}

function fetchBuz(callback) {
  return function(responseBar) {
    doSomething(responseBar);
    fetchBuz(callback);
  };
}
```



これはこれで美しい…&#x1f60c;

（JS に慣れるまではちょっと読みづらいと思います）



Promise らしいやり方をとると `.then` で  
次々に処理を連結できます。

```javascript
// Web API の結果を利用して別の API を実行したい！

fetch('/api/foo')
  .then(doSomething)
  .then(function() { return fetch('/api/bar'); })
  .then(doSomething)
  .then(function() { return fetch('/api/buz'); })
  .then(doSomething);
```
