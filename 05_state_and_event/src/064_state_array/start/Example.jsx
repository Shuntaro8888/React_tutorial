import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    const newNums = [ ...nums ]; //配列を新しく作り、同じ要素を格納
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
