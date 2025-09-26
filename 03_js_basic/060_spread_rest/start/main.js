const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
const result2 = Math.max(...nums); // spread演算子
console.log(result);
console.log(result2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1]; // arr1を展開してコピー arr1とnewArrは別物
let newArr1 = [...arr1, ...arr2]; // arr1とarr2を展開して結合
let newArr2 = arr1; // arr1とnewArr2は同じ物を参照している

arr1.push(4); // arr1に4を追加 (参照しているnewArr2にも影響する)
console.log(newArr);
console.log(newArr1);
console.log(newArr2, arr1);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj }; // objを展開してコピー objとnewObjは別物
obj.age = 30; // objのageを30に変更
console.log(obj);
console.log(newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
