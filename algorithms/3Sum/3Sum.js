// Source : https://leetcode-cn.com/problems/3sum/
// Author : cderek
// Date   : 2020-10-29

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length === 0) {
    return []
  }
  if(nums.length >=3 && nums.every((num) => num === 0)) {
    return [[0,0,0]]
  }
  nums.sort((a, b) => a-b)
  let i=0, j = 1, k = nums.length -1;
  const countArr = []
  while(j < k) {
    const sum = nums[i] + nums[j] + nums[k];
    if(sum === 0) {
      countArr.push([nums[i], nums[j], nums[k]])
      j++
    }
    if(sum > 0) {
      k--
    }
    if(sum < 0) {
      j++
    }
    if(j >= k) {
      i++
      j=i+1
      k = nums.length - 1
    }
  }

  const obj = {}
  for(const count of countArr) {
    const sortNum = JSON.stringify(count.sort())
    if(!obj[sortNum]) {
      obj[sortNum] = true
    }
  }
  const result = Object.keys(obj).map(JSON.parse)
  return result
};
