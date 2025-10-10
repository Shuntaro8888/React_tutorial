// 計算結果を表示する
import { useCalc } from "../context/CalcContext";

export const Result = () => {
  const state = useCalc();

  return <h3>結果：{state.result}</h3>;
};
