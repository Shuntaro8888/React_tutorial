import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState();
  const videoRef = useRef();
  return (
    <div>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button
        onClick={() => {
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "stop" : "Play"}
      </button>
    </div>
  );
};

const Case3 = () => {
  const createTimeStamp = () => new Date().getTime();
  const [state, setState] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    setState(createTimeStamp())
  }

  const updateRef = () => {
    ref.current = createTimeStamp();
    console.log(ref.current);
  }

  return (
    <div>
      <h3>ユースケース3</h3>
      <div>
        state: {state}
        <button onClick={updateState}>更新</button>
      </div>
      <div>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </div>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
