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
/*global jQuery:false, _:false*/

(function($j, _) {
    "use strict";

    /*
     * イイネボタン
     */
    var LIKE_BUTTON_SELECTOR = ".likeButton";

    $j(document).on("click", LIKE_BUTTON_SELECTOR, function() {
        this.disabled = true;
    });

    /*
     * つぶやき
     */
    var voiceForm = {
        element: $j("#voiceForm"),

        init: function() {
            var el = this.element;
            this.nickname = el.find("input[type='text']");
            this.text     = el.find("textarea");
            this.button   = el.find("button");
            this.count    = el.find(".count");
            return this;
        },

        clear: function() {
            this.nickname.val("");
            this.text.val("");
        },

        setEventListeners: function() {
            var self = this;

            // input
            this.text.on("keyup", function() {
                var count = self.text.val().length;
                self.count.text(count);
            });

            // post
            this.button.on("click", function() {
                $j(window).trigger("addFeed", [
                    self.nickname.val(),
                    self.text.val()
                ]);
                self.clear();
            });
        }
    };


    var feedList = {
        element: $j("#feedList"),

        renderFeed: function(nickname, text) {
            var html = [
                "<div class='feed clearfix'>",
                    "<div class='nickname'>" + nickname + "</div>",
                    "<div class='text'>"     + text     + "</div>",
                    "<button class='likeButton'></button>",
                "</div>"
            ].join("");

            this.element.prepend(html);
        },

        setEventListener: function() {
            var self = this;
            $j(window).on("addFeed", function(event, nickname, text) {
                self.renderFeed(nickname, text);
            });
        }
    };

    voiceForm.init().setEventListeners();
    feedList.setEventListener();

})(jQuery, _);
