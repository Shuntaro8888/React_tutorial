// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

// const a = 0;
// let result = a ? 10 : -10;
// console.log(result);

// const falsy = 0;
// const truthy = 1;
// console.log(Boolean(truthy)); //truesyかfaksyかを判定するにはBoolean関数
// console.log(Boolean(falsy));

// 論理積 (&&) について
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

console.log(resultA); // ""がfalsyなので""が返る
console.log(resultB); // 0がfalsyなので0が返る
console.log(resultC); // falsyが無いので最後の値4が返る

// 理論和 (||) について
const resultD = "" || "foo";
const resultE = 0 || 2 || 0; // truthyが見つかった時点で値が返る
const resultF = "foo" || 4;

console.log(resultD); // ""がfalsyなので"foo"が返る
console.log(resultE); // 2がtruthyなので2が返る
console.log(resultF); // "foo"がtruthyなので"foo"が返る
