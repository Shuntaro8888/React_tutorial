/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  const hello = () => {};
  const a = hello();

  const b = true ? 'hello' : 'bye'; //三項演算子はif文の代わりに使用できる 複雑なif文を書く必要のあるときはreturnの外に書く
  console.log(1===1);
  for (let i = 1; i < 5; i++) {

  }
  return (
    <div className="component">
      <h3>式と文</h3>
      {false ? 'hello' : 'bye'}
    </div>
  );
};

export default Child;
