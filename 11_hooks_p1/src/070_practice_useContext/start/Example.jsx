//componentを呼び出しまとめる、inputを表示する

import Input from "./components/Input";
import { Result } from "./components/Result";
import { Select } from "./components/Select";
import { CalcProvider } from "./context/CalcContext";

const Example = () => {

  return (
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
  
};

export default Example;
