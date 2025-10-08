import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      const { name, value } = payload;
      return {...state, [name]: value }; //オブジェクトのキーに変数を使う場合は角括弧がいる
    case "add":
      return {...state, result: Number(state.a) + Number(state.b)};
    case "minus":
      return {...state, result: Number(state.a) - Number(state.b)};
    case "divide":
      return {...state, result: Number(state.a) / Number(state.b)};
    case "multiply":
      return {...state, result: Number(state.a) * Number(state.b)};
    default:
      throw new Error("不明なactionです。");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    //選択した計算結果を返す
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    //+-のハンドル
    dispatch({ type: 'change', payload: { name: e.target.name, value: e.target.value }})
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map(type => {
          return (
            <option key={type} valu={type}>
              {type}
            </option>
          )
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
