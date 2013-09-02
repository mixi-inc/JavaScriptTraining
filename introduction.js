/*
 * このJSはブラウザ付属のデベロッパーツールで実行することを意図して書いてます。
 */

/*
 * 変数宣言
 */
//var 変数名 = 値;（行末には必ずセミコロン）
var a = 1;

//varは省略可能ですが、グローバルになるのでやめましょう
//（変数のスコープは後で説明します）
b = 2;

// グローバル変数はグローバルオブジェクト（ブラウザの場合はwindow）
// のプロパティとして定義されます
// （オブジェクトについては後で説明します）
a // => 1
window.a // => 1


/*
 * 型
 */
//文字列型
var string = "string";

//数値型
var number = 1000;

//ブーリアン型
var booleans = [true, false]; //[]は配列
//null型
//undefined型
var falseValues = [false, 0, "", null, undefined, NaN]; //NaNは特別値Not a Number

//オブジェクト型（重要）
//上の5つの基本型以外はすべてオブジェクト型
var obj = {}; //空のオブジェクト


/*
 * オブジェクト
 * コンソール上で写経してください！！（shift + enter で改行できます）
 */
/* 配列もオブジェクト */
var array = [0, 1, 2];
array[0]; // => 0

console.dir(array); //オブジェクトのプロパティが見れます
                    //prototypeチェーンをたどると、Arrayクラスのプロパティも見られます

array.length;  // => 3
array.push;    // => function push() { [native code] }
               // 関数も変数に代入できる（後述）
array.push(3); // ()で関数呼び出し。返り値は配列の要素数（length）なので４
array;         // => [0, 1, 2, 3]

/* 連想配列もオブジェクト */
var colors = {
    red        : "赤",
    green      : "緑",
    mediumblue : "青"  //最後にカンマをつけないこと！
};
colors.red;    // => 赤
colors["red"]; // => 赤

/* 関数もオブジェクト */
//関数宣言
function addHoge(str) {
    return str + "Hoge";
}
addHoge("test"); // => testHoge

//関数リテラル式
var addFuga = function(str) {
    return str + "Fuga";
};
addFuga("test"); // => testFuga


/* ----------------------------------------------------------------------------------- */


/*
 * 制御文
 */
// if（perlやrubyのように後置ifはありません）
var count = 3;
if (count === 1) {
    // 1
} else if (count === 2) {
    // 2
} else {
    // other
}

// === は strict equal. 型まで同じでないとtrueにならない
// == は自動で型変換する
// 例）1 == "1" はtrue だが、1 === "1" はfalse
// 基本的には === を使うこと

// switch
switch(count) {
case 1:
    // 1
    break;
case 2:
    // 2
    break;
default:
    //other
    break;
}

// for
// 配列の走査
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for in
// 連想配列の走査
for (var key in colors) {
    console.log(key + ":" + colors[key]);
}

// while
while (array.length > 0) {
    console.log( array.pop() );
}

