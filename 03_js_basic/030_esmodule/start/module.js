export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// デフォルトエクスポート(1つのモジュールにつき1つまで)
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

// エクスポートのオブジェクトリテラル
export { User }
