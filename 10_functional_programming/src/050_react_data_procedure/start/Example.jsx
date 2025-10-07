import { useState } from "react";

//状態管理と処理を分離

const Example = () => {
  //JSXを作成する場所
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  //↓のような副作用は書かない
  //window.alert('hello')
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
