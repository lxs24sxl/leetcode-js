/**
 * Sunday算法
 * 理解网址: https://blog.csdn.net/q547550831/article/details/51860017
 * todo: KMP, BM, Horspool算法
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLen = needle.length;
  // 空字符串判断
  if (needleLen === 0) return 0;

  // 边界值判断
  const haystackLen = haystack.length;
  if (needleLen > haystackLen) return -1;

  // 记忆偏移值
  function initailOffsetMap () {
    let map = {};

    for (let i = 0; i < needleLen; i++) {
      map[needle[i]] = needleLen - i;
    }

    return s => map[s] || needleLen;
  }

  // 初始化偏移值
  const getOffset = initailOffsetMap();

  let i = 0;

  while (i <= haystackLen - needleLen) {
    let temp = 0;

    for (let j = 0; j < needleLen; j++) {
      // 当有值不匹配时，跳出判断
      if (needle[j] === haystack[i + j]) {
        temp++;
      } else {
        break;
      }
    }

    if (temp === needleLen) {
      return i;
    } else {
      // 设置偏移值
      i += getOffset(haystack[i + needleLen]);
    }
  }

  return -1;
};
