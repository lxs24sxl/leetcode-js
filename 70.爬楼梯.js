/**
 * 记忆型递归
 */
const memoize = (fn) => {
  let cache = {};

  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let temp = fn(n);
      cache[n] = temp;
      return temp;
    }
  }
}

/**
* @param {number} n
* @return {number}
*/
var climbStairs = memoize((n) => {
  if (n === 1) return 1;

  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
});
