// Source : https://leetcode-cn.com/problems/climbing-stairs/
// Author : cderek
// Date   : 2020-11-09

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)
    return Math.round(fib_n /sqrt5)
};