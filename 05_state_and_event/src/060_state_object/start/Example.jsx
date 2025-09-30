// プリミティブ型：
// オブジェクト型：{}，[]などのプリミティブ型以外

import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  return (
    <>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input type="text"
    onChange={(e) => setPerson(e.target.value)}>
    </input>
    <input type="text"
    onChange={(e) => setPerson(e.target.value)}>
    </input>
    <button onClick={() => setPerson()}>リセット</button>
    </>
  )
};

export default Example;
