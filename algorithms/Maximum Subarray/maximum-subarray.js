// Source : https://leetcode-cn.com/problems/maximum-subarray/
// Author : cderek
// Date   : 2020-11-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0]
    let sum = 0;
    for(const num of nums) {
        sum = sum > 0 ? sum + num : num
        ans = Math.max(ans, sum)
    }
  return ans
};