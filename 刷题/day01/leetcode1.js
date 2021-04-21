/**
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。
 */
let twoSum = function (nums, target) {
    if (!Array.of(nums) && nums.length < 1) return [];
    let targetIndex = [];
    outer: for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            let total = nums[j] + nums[i];
            if (total === target) {
                targetIndex.push(i, j);
                break outer;
            }
        }
    }
    return targetIndex
};

let nums = [3, 2, 4], target = 6;

let twoSum1 = function (nums, target) {
    let arr, index;
    for (let i = 0; i < nums.length; i++) {
        index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i);
        arr = [i, index]
        break;
    }
    return arr;
};

let twoSum3 = function (nums, target) {
    let map = new Map(), arr;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            arr = [map.get(target - nums[i]), i];
            break;
        }
        map.set(nums[i], i)
    }
    return arr;
}

console.log(twoSum(nums, target));