//値を保持する、計算を実施する
import { createContext, useContext, useReducer } from "react";

const CalcContext = createContext(); //contextを作成
const CalcDispatchContext = createContext();

export const useCalc = () => {
  return useContext(CalcContext);
}

export const useCalcDispatch = () => {
  return useContext(CalcDispatchContext);
}

//stateの更新関数
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: Number(state.a) + Number(state.b) };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
  
};

export const CalcProvider = ({ children }) => {

  const initState = { //初期値
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState); //calcステートを管理

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
        </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );

};
