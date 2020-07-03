// /**
//  * @param {string[]} strs
//  * @return {string}
//  * 63.30%
//  * 6:06%
//  * 太菜了
//  * 纵向比对
//  */
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = "";

//   let index = 0;

//   const firstStr = strs[0];

//   let isValid = true;

//   for (let s of firstStr) {
//     for (let other of strs.slice(1)) {
//       if (other[index] === s) {
//         continue;
//       } else {
//         isValid = false;
//         break;
//       }
//     }

//     if (!isValid) break;

//     prefix += s;
//     index++;
//   }

//   return prefix;
// };

/**
 * @param {string[]} strs
 * @return {string}
 * 分治法
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  return LCPrefixRec(strs);
};

function LCPrefixRec(list) {
  let len = list.length;
  if (len === 1) return list[0];

  let mid = Math.floor(len / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid, len);

  return LCPrefixTwo(LCPrefixRec(left), LCPrefixRec(right));
}

function LCPrefixTwo(str1, str2) {
  let i = 0;
  for (; i < str1.length && i < str2.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) break;
  }

  return str1.substring(0, i);
}
