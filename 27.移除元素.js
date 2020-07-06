/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;
  let temp = null;

  for (let i = 0; i < len; i++) {
    temp = nums[i];

    if (temp === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
