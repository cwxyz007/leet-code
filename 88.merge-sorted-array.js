/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m, maxLen = nums1.length; i <= maxLen; i++) {
    nums1[i] = nums2[i - m]
  }

  nums1.splice(m + n)
  nums1.sort((a, b) => (a > b ? 1 : -1))
}
