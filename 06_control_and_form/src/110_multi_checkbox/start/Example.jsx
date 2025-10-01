import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => { // オブジェクトの配列(s)へ格納
      const newFruit = { ...fruit }; // 新しいオブジェクトを定義し同じものを格納
      if (newFruit.label === e.target.value) { // クリックした物を
        newFruit.checked = !fruit.checked; // ON/OFF
      }
      return newFruit; // checkedプロパティだけ更新したものを返す
    });

    setFruits(newFruits); //新しいオブジェクトの配列(s)で更新

    // forEachバージョン
    let sumVal = 0;
    newFruits.forEach(newfruit => {
      if(newfruit.checked) {
        sumVal = sumVal + newfruit.value;
      }
    });

    setSum(sumVal);
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
