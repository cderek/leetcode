// Source : https://leetcode-cn.com/problems/number-complement/
// Author : cderek
// Date   : 2020-11-24
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = num.toString(2);
    let complement = '';

    for(i = 0, len = binary.length; i < len; i++){
        complement += binary[i] ^ 1;
    }
    return parseInt(complement, 2)
};