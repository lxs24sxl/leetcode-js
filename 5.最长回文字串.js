/**
 * 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sLen = s.length;
  if (!s || sLen < 2) return s;
  let left = 0;
  let right = 0;
  let len = 1;
  let maxLen = 0;
  let maxStart = 0;

  let temp = null;
  for (let i = 0; i < sLen; i++) {
    temp = s[i];
    left = i - 1;
    right = i + 1;

    // 左扩散
    while (left >= 0 && temp === s[left]) {
      len++;
      left--;
    }

    // 右扩散
    while (right < sLen && temp === s[right]) {
      len++;
      right++;
    }

    // 左右扩散
    while (left >= 0 && right < sLen && s[left] === s[right]) {
      len += 2;
      left--;
      right++;
    }

    if (len > maxLen) {
      maxStart = left;
      maxLen = len;
    }

    len = 1;
  }

  return s.substring(maxStart + 1, maxStart + maxLen + 1);
};
