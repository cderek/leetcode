// Source : https://leetcode-cn.com/problems/longest-common-prefix/
// Author : cderek
// Date   : 2020-11-03

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  let ans = strs[0];
  for(let i = 1; i < strs.length; i++) {
    for(j=0; j < strs[i].length; j++) {
      if(ans[j] != strs[i][j]) {
        break;
      }
    }
    ans = ans.substr(0, j);
    if(ans === "") return ans;
  }
  return ans;
};
