/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法
 */
var searchInsert = function (nums, target) {
  const len = nums.length;

  if (len === 0) return 0;

  if (len === 1) return nums[0] < target ? 1 : 0;

  // 边界值判断
  if (nums[len - 1] < target) return len;
  if (nums[0] > target) return 0;

  let start = 0;
  let end = len - 1;
  let mid = null;
  while (start < end) {
    mid = (start + end) >>> 1;
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};
