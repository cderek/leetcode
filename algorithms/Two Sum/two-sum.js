// Source : https://leetcode.com/problems/two-sum/
// Author : cderek
// Date   : 2019-05-13

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i=0; i<nums.length; i++) {
    for(var j=i+1; j<nums.length; j++) {
      if(nums[i]+nums[j] === target){
        return [i,j]
      }
    }
  }
};
