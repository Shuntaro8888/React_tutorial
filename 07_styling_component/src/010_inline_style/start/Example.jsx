import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        width:120,
        height: 60,
        display: "block",
        fontWeight: "bold",
        "border-radius": 9999, 
        cursor: "pointer", //hoverしたときにポインターとなる
        border: "none",
        margin: "auto",
        background: isSelected ? "pink" : ""
    }
    // ::before, ::after, :hover, :active 疑似要素、疑似セレクターが使えない
    // @media (min-width: 600px) メディアクエリが使えない

    return (
        <>
            <button onClick={clickHandler} style= {style}>ボタン</button>
            <div style={{ textAlign: "center"}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
