// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 时间复杂度 O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * default: 6.890ms - 7.341ms
 */

var twoSum = function (nums, target) {
  let arr = nums;
  let arrs = new Array();
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let j = 0, len = arr.length; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        arrs.push(i, j);
        return arrs
      }
    }
  }
};

/**
 * 时间复杂度 O(n*2)
 * @param {*} nums 
 * @param {*} target 
 */
var twoSumMap = function (nums, target) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || typeof target !== 'number') {
    return;
  }
  // let arr = new Set(nums);
  let arrMap = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    arrMap.set(nums[i], i)
  }

  let result = null;
  let current = null;

  for (let i = 0; i < len; i++) {
    result = target - nums[i];
    current = arrMap.get(result)

    if (arrMap.has(result) && current !== i) {
      return [i, current];
    }
  }
}

var twoSumSave = function (nums, target) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || typeof target !== 'number') {
    return;
  }
  let json = {};
  let current = null;
  let checkNum = null;
  for (let i = 0, len = nums.length; i < len; i++) {
    current = nums[i];
    checkNum = json[target - current];
    if (checkNum >= 0) {
      return [checkNum, i]
    }
    json[current] = i;
  }
}

// var twoSumRecursion = function (nums, target, i = 0, maps = {}) {
//   const map = maps;
//   let current = nums[i];
//   if (map[target - current] >= 0) {
//     return [map[target - current], i];
//   } else {
//     map[current] = i;
//     i++;
//     if (i < nums.length - 1) {
//       return twoSumRecursion(nums, target, i, map);
//     } else {
//       throw 'error: twoSum is not find'
//     }
//   }
// }

console.time()
console.log(twoSum([1, 0, 2, 7, 11, 15], 9))
console.timeEnd()

console.time()
console.log(twoSumMap([1, 0, 2, 7, 11, 15], 9))
console.timeEnd()

console.time()
console.log(twoSumSave([1, 0, 2, 7, 11, 15], 9))
console.timeEnd()

// console.time()
// console.log(twoSumRecursion([1, 0, 2, 7, 11, 15], 9))
// console.timeEnd()