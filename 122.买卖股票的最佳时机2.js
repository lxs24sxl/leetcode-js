/**
 * @param {number[]} prices
 * @return {number}
 * 暴力法
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0, len = prices.length - 1; i < len; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};
