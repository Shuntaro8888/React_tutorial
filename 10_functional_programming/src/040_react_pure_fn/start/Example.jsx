let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>;
};

const PureChild = ({value}) => {
  return <div>{value}</div>;
};

const Example = () => {
  let value = 0;
  return (
    <>
      <Child />
      <Child />
      <Child />
      <PureChild value={++value}/>
      <PureChild value={++value}/>
      <PureChild value={++value}/>
    </>
  );
};

export default Example;
