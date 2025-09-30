import { useState } from "react";

const Example = () => {
    let [val, SetVal] = useState(0);
    console.log(val);
    const countUp = () => {
        SetVal(val + 1)
        SetVal(prevstate => {
            return prevstate + 1
        });
        console.log(val);
    }
    const countDown = () => {
        SetVal(val - 1)
    }
    return (
        <>
        <p>現在のカウント数: {val}</p>
        <button onClick={(countUp)}>+</button>
        <button onClick={(countDown)}>-</button>
        </>
    );
};

export default Example;
