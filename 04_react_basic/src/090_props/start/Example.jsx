import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = {
    color: "red",
    num: 123,
  }; // スプレッド演算子でこれらを展開
  return (
    <>
      <Child 
        {...o}
        fn={hello}
        bool
        obj={{ name: "tom", age: 18 }}
      />
      {/* <Child color="red" /> */}
    </>
  );
};
export default Example;
