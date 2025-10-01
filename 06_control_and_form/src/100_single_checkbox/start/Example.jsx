import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = () => {
    setIsChecked(prev => !prev);
  }

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>

      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => toggleChecked()}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
