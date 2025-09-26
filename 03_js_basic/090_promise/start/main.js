// 非同期処理（Promise）
let a = 0;
console.log(a);

// 1秒後にaに10を代入 する
setTimeout(() => {
  a = 1;
  console.log(a); // 1
}, 1000);

console.log(a); // 0

// 1秒後にaに10を代入 する（Promiseを使う）
// resolve: 成功したときに呼ばれる関数
// reject: 失敗したときに呼ばれる関数
// then: resolveが呼ばれたときに実行される関数
// catch: rejectが呼ばれたときに実行される関数
// finally: 成功・失敗に関わらず、処理が終わったときに実行される関数
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 10;
    resolve(a);
    // reject(a);
  }, 2000);
}).then((result) => {
  console.log(result);
  return result + 10;
}).then((result2) => { // thenは繋がる。さらに10を足す
  console.log(result2);
}).catch((error) => {
  console.log('catchが実行', error); // 10
});
