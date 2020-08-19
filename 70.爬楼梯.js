/**
 * 记忆型递归
 */
// const memoize = (fn) => {
//   let cache = {};

//   return (...args) => {
//     let n = args[0];
//     if (n in cache) {
//       return cache[n];
//     } else {
//       let temp = fn(n);
//       cache[n] = temp;
//       return temp;
//     }
//   }
// }

// /**
// * @param {number} n
// * @return {number}
// */
// var climbStairs = memoize((n) => {
//   if (n === 1) return 1;

//   if (n === 2) return 2;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// });

/**
 * 动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev = 0;
  let next = 0;
  let result = 1;

  for (let i = 1; i <= n; ++i) {
    prev = next;
    next = result;

    result = prev + next;
  }

  return result;
};
