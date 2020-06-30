/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   const SIGN = Math.sign(x);

//   if (SIGN === -1) return false

//   let result = 0;

//   const ORIGIN_X = x;

//   while (x !== 0) {
//     result = result * 10 + x % 10;
//     x = Math.floor(x / 10);
//   }

//   return !!(result === ORIGIN_X)
// };


// 双指针不转字符串法
const getNumByDigit = (num, n) => {
  return Math.floor(num % Math.pow(10, n) / Math.pow(10, n - 1));
}

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0) return false

  if (x < 10) return true

  let right = 1;
  let left = 0;

  let temp = x;
  while (temp >= 1) {
    temp /= 10;
    left++;
  }

  if (getNumByDigit(x, left) === 0) return false

  while (left > right) {
    if (getNumByDigit(x, left) !== getNumByDigit(x, right)) return false
    left--;
    right++;
  }

  return true;
};
