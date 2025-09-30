import { useState } from "react";

const Example = () => {
const [count, setCount] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Example;
