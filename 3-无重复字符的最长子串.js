// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (typeof s !== 'string') return 'error parameter';

  let num = 0, j = 0, t = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    t = s.slice(j, i).indexOf(s[i]);

    if (t == -1) {
      num = Math.max(num, i - j + 1)

    } else {
      j = j + t + 1
    }
  }

  return num
};
var lengthOfLongestSubstring2 = function (s) {

  let max = 0;
  let first = 0;
  let index = 0;
  let str = '';
  for (let i = 0, len = s.length; i < len; i++ ) {
  
    index = s.slice(first, i).indexOf(s[i]);
    
    if (index != -1) {
      first = index + first + 1;
     
    } else {
      if (max <= i - first + 1) {
        str = s.slice(first, i + 1);
        max = i - first + 1
      }
    }
  }
  return {
    max,
    str
  };
}


console.time();
console.log(lengthOfLongestSubstring('abcdabcbb'));
console.timeEnd();


console.time();
console.log(lengthOfLongestSubstring('abacdabcbb'));
console.timeEnd();