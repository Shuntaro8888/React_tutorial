function print(callback) {
  console.log(callback); // 関数そのものが出力される
  const result = callback(2); // 関数を実行している
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

debugger;
print(fn); // 引数なしだとNaNとなる