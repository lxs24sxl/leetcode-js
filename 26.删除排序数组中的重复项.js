/**
 * @param {number[]} nums
 * @return {number}
 * 暴力法
 */
// var removeDuplicates = function (nums) {
//   let map = {};
//   let temp = null;
//   let index = 0;

//   for (let i = 0, len = nums.length; i < len; i++) {
//     let temp = nums[index];
//     if (map[temp] !== 1) {
//       map[temp] = 1;
//     } else {
//       nums.splice(index, 1);
//       index--;
//     }
//     index++;
//   }

//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 双指针
 */
var removeDuplicates = function (nums) {
  let index = 0;
  let temp = null;

  for (let i = 1, len = nums.length; i < len; i++) {
    temp = nums[i];
    if (temp !== nums[i - 1]) {
      index++;
      nums[index] = temp;
    }
  }

  return index + 1;
};
