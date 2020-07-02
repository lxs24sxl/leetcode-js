/**
 * @param {string[]} strs
 * @return {string}
 * 63.30%
 * 6:06%
 * 太菜了
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = "";

  let index = 0;

  const firstStr = strs[0];

  let isValid = true;

  for (let s of firstStr) {
    for (let other of strs.slice(1)) {
      if (other[index] === s) {
        continue;
      } else {
        isValid = false;
        break;
      }
    }

    if (!isValid) break;

    prefix += s;
    index++;
  }

  return prefix;
};
