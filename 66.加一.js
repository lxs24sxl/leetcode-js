/**
 * @param {number[]} digits
 * @return {number[]}
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

执行用时：
68 ms
, 在所有 JavaScript 提交中击败了
73.04%
的用户
内存消耗：
32.2 MB
, 在所有 JavaScript 提交中击败了
100.00%
的用户

 */
var plusOne = function (digits) {
  const len = digits.length;
  let temp = null;
  for (let i = len - 1; i >= 0; i--) {
    temp = digits[i];
    if (i === len - 1) {
      if (temp + 1 === 10) {
        temp++;
      } else {
        digits[i]++;
      }
    }

    if (temp === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      } else {
        digits[i - 1] = digits[i - 1] + 1;
      }
    }
  }
  return digits;
};
