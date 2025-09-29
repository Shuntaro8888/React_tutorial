const Hello = (props) => {
  // props.name ='Bob'; //読み取り専用なので書き換えは不可
  console.log(props.name);
  const desc = Reflect.getOwnPropertyDescriptor(props,'name');
  console.log(desc);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;