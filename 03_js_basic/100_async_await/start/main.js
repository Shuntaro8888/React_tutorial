// 非同期処理（await, async）
let a = 0;

init();
async function init() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      a = 1;
      resolve(a);
    }, 2000);
  });
  console.log(result); // 2秒後に1が出力される
  // .catch((c) => {
  //   console.log("catchが実行", c);
  // });
}

init2();
async function init2() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // a = 1;
        // resolve(a);
        reject("エラーが発生しました");
      }, 2000);
    });
    console.log(result); // 出力されない
  } catch (e) {
    console.log("catchが実行", e);
  } finally {
    console.log("必ず実行される");
  }
}