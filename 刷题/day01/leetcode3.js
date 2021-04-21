/*
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。*/
/*
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/
let lengthOfLongestSubstring = function(s) {
  if(!s) return 0;
  let arr = s.toLocaleUpperCase().split("");
  return new Set(arr).size;
};

let s = '123';
console.log(lengthOfLongestSubstring("pwwkew"));
