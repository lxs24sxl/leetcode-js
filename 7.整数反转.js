// /**
//  * 暴力法
//  * @param {number} x
//  * @return {number}
//  */
// const POW_2_TO_31 = Math.pow(2, 31);
// const MAX = POW_2_TO_31 - 1;
// const MIN = -POW_2_TO_31;

// var reverse = function (x) {
//   const SIGN = Math.sign(x);

//   x = Math.abs(x);

//   x = +((x + '').split('').reverse().join(''));

//   if (x > MAX || x < MIN) return 0;

//   return SIGN * x;
// };

/**
 * 优化法
 * @param {number} x
 * @return {number}
 */
const POW_2_TO_31 = Math.pow(2, 31);
const MAX = POW_2_TO_31 - 1;
const MIN = -POW_2_TO_31;

var reverse = function (x) {
  const SIGN = Math.sign(x);

  let result = 0;

  while (x !== 0) {
    result = result * 10 + x % 10;
    x = SIGN === 1 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }

  if (result > MAX || result < MIN) return 0;

  return result
};
