const Example = () => {

  //オブジェクト指向型
  const numsObj = {
    nums: [1, 2, 3], 
    sum() {
      let nums = this.nums;
      let sumNums = 0;
      for (let i = 0; i < nums.length; i++) {
        sumNums += nums[i];
      } 
      return sumNums;
    }
  }

  //関数型
  const nums = [1, 2, 3];
  const sumNums = (array) => array.reduce((accu, curr) => accu + curr )
  //第一引数accuはaccumulate値、currはcurrent値

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      
      <p>オブジェクト指向型：{numsObj.sum()}</p>
      <p>関数型：{sumNums(nums)}</p>
    </>
  );
};

export default Example;
