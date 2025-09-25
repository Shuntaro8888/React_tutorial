const h1Element = document.querySelector("h1");

console.log(h1Element);

console.log(h1Element.textContent);

h1Element.textContent = "Hello World!";

// HTMLをJavaScript内から変更するためのオブジェクトをDOM（Document Object Model）と呼ぶ

// イベントリスナー、第二引数はコールバック関数
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", (event) => {
  console.dir(event.target); // クリックイベントのオブジェクト情報がevent変数に入っている
  console.log("button clicked!");
});

const helloFn = (e) => {
  console.log("Hello!");
  console.dir(e);
};

buttonElement.addEventListener("click", helloFn);