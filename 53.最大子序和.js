/**
 * @param {number[]} nums
 * @return {number}
 * 方法一: 动态规划
 */
// var maxSubArray = function(nums) {
//   let prev = 0;
//   let max = nums[0];
//   let temp = 0;
//   for (let i = 0, len = nums.length; i < len; i++) {
//       temp = nums[i];
//       prev = Math.max(prev + temp, temp);
//       max = Math.max(prev, max);
//   }

//   return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 方法2，原地修改原数组，不重新定义内存
 */
var maxSubArray = function (nums) {
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
  }

  return Math.max(...nums);
};
