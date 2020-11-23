// Source : https://leetcode-cn.com/problems/relative-ranks/
// Author : cderek
// Date   : 2020-1120


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let obj = {}
    let temp = [...nums]
    nums.sort((a, b) => b-a)

    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i + 1
    }

    for(let i = 0; i < temp.length; i++) {
        if(obj[temp[i]] === 1) {
            temp[i] = 'Gold Medal'
        }else if(obj[temp[i]] === 2) {
            temp[i] = 'Silver Medal'
        }else if(obj[temp[i]] === 3) {
            temp[i] = 'Bronze Medal'
        }else {
            temp[i] = obj[temp[i]].toString()
        }
    }
    return temp   
};