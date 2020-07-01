// 哈希
/**
 * @param {string} s
 * @return {number}
 */
const DIGIT_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let result = 0;
  let current = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    current = DIGIT_MAP[s[i]];
    if (current < DIGIT_MAP[s[i + 1]]) {
      result = result - current;
    } else {
      result = result + current;
    }
  }

  return result;
};
