import { useState } from "react";

const Example = () => {
    console.log(<Example />);
  let [valA, setValA] = useState(0);
  const clickHandlerA = () => {
    setValA(valA + 1);
  };
  let [valB, setValB] = useState(10);
  const clickHandlerB = () => {
    setValB(valB + 1);
  };
  let [valC, setValC] = useState(100);
  const clickHandlerC = () => {
    setValC(valC + 1);
  };
  return (
    <>
      <p>ボタンAを{valA}回押しました！</p>
      <button onClick={clickHandlerA}>ボタンA</button>
      <p>ボタンAを{valB}回押しました！</p>
      <button onClick={clickHandlerB}>ボタンB</button>
      <p>ボタンCを{valC}回押しました！</p>
      <button onClick={clickHandlerC}>ボタンC</button>
    </>
  );
};

export default Example;
