/*
 * 1. イイネボタンのclickイベントが発火したらボタンの見た目を変えてください
 * ヒント）
 * 　　ボタンの見た目を変えるにはdiabled属性をtrueにしてください
 *     （CSSはあらかじめ用意しています）
 *
 *     １つ１つのボタンにイベントリスナーを設定するのではなく、
 *     jQueryの.on()を使って１つの親要素にdelegateしてください
 *
 * 2. つぶやきの投稿フォームに文字が入力されるたびに文字カウントを更新してください
 */

/*
 * strict mode
 * JSの落とし穴にはまるのを防ぐため、許可された書き方の一部をエラーにする
 * 例外を設けたい場合は以下の様にコメントで記述できます
 * mixiのコーディングガイドラインでも新規コードはstrict mode必須となっています
 */
/*jshint browser:true, strict:true*/
/*global $j:false, _:false*/
"use strict";

/*
 * イイネボタン
 */
var LIKE_BUTTON_SELECTOR = ".likeButton";

$j(document).on("click", LIKE_BUTTON_SELECTOR, function() {
    this.disabled = true;
});

// input
var textarea = $j("textarea");
var countEl = $j(".count");
textarea.on("keyup", function() {
    var count = textarea.val().length;
    countEl.text(count);
});
