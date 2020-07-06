/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKETS_MAP = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var isValid = function (s) {
  const len = s.length;
  // 不为偶数直接出局
  if (len % 2 !== 0) return false;
  // 定义栈
  let stack = [];
  let temp = null;
  for (let i = 0; i < len; i++) {
    temp = s[i];
    if (BRACKETS_MAP[temp]) {
      stack.push(temp);
    } else if (temp !== BRACKETS_MAP[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

// 时间复杂度：O(n)

// 空间复杂度：O(n)
