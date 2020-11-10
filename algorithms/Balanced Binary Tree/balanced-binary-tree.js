// Source : https://leetcode-cn.com/problems/balanced-binary-tree/
// Author : cderek
// Date   : 2020-11-10
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true
    return Math.abs(depth(root.left) - depth(root.right)) <= 1
       && isBalanced(root.left) && isBalanced(root.right)
};

var depth = function (node) {
    if(!node) return -1
    return 1 + Math.max(depth(node.left), depth(node.right))
}