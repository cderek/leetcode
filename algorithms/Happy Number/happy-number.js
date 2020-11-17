// Source : https://leetcode-cn.com/problems/happy-number/
// Author : cderek
// Date   : 2020-11-17

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true
    const list = new Set()
    while(!list.has(n)) {
        list.add(n)
        let sum = 0
        while(n) {
            const value = n % 10
            sum += (value * value)
            n = parseInt(n / 10)
        }
        if (sum === 1) return true
        n = sum
    }
    return false
}