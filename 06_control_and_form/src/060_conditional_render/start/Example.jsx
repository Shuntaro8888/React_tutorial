import { useState } from "react";

// if文、&&、??（Null型演算子）、3項演算子
// A ?? B
// if(A === null || undefined) => B, else A
const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            //if文
            // if(animal ==="Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else{
            //   return <li key={animal}>{animal}</li>
            // }
            //3項演算子
            // return animal === "Dog" ? <li key={animal}>{animal}★</li> :<li key={animal}>{animal}</li>
            // return <li key={animal}>{animal + (animal === "Dog" ? "★" : "")}</li>
            //&&条件
            return <li key={animal}>{
              animal ?? "null, undefinedでした"
            }{animal === "Dog" && "★"}</li>
          })}
      </ul>
    </>
  );
};

export default Example;
