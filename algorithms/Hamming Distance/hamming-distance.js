// Source : https://leetcode-cn.com/problems/hamming-distance/
// Author : cderek
// Date   : 2020-11-19


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let result = x ^ y;
    let sum = 0;
    while(result != 0) {
        sum += result & 1;
        result = result >>1;
    }
    return sum;

};