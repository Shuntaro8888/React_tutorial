// プリミティブ型：
// オブジェクト型：{}，[]などのプリミティブ型以外

import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  console.log({...person});
  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value})}
      ></input>
      <input
        type="text"
        value={person.age}
        onChange={(e) => setPerson({ name: person.name, age: e.target.value })}
      ></input>
      <div>
        <button onClick={() => setPerson({ name:"", age:""})}>リセット</button>
      </div>
    </>
  );
};

export default Example;
