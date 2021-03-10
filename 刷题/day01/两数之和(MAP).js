/**
 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 你可以按任意顺序返回答案。
 */
let twoSum = function(nums, target) {
  if(!Array.of(nums) && nums.length < 1) return [];
  const m = new Map();
  for(let i = 0 ; i < nums.length ; i ++ ) {
    let num = nums[i];
    let difference = target - num;
    if(m.has(difference)) {
      return [m.get(difference),i]
    }
    m.set(num,i)
  }
};



let nums = [2,7,11,15], target = 9;

console.log(twoSum(nums, target));