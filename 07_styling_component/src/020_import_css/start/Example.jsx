import { useState } from "react";
import "./Example.css";
import SubButton from "./components/SubButton";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <SubButton />
      <button
        className={`btn ${isSelected ? " selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
