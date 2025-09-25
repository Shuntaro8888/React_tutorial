function fn(number) {
  return number * 2;
}

console.log(fn(4)); // 8

const fnArrow = (number) => {
  console.log('arrow function');
  return number * 2;
}

const fnArrowShort = number => number * 2; //引数１つの場合は()省略可　returnのみの場合は{}とreturn省略可

console.log(fnArrow(4)); // 8

const fnArrowObj = number => ({ double: number * 2 }); //オブジェクトを返す場合は()で囲む

console.log(fnArrowObj(4)); // { double: 8 }

