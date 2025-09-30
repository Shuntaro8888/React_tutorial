const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };
  const clickHandler2 = () => {
    console.log("ボタンがクリックされました。");
  };
  return (
    <div>
      <button onClick={clickHandler} id="test">
        クリックしてね
      </button>
      <button onClick={clickHandler2} id="test2">
        クリックしてね
      </button>
    </div>
  );
};

export default Example;
