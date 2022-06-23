//by TheMadDrunk
//23/06/2022

//link to problem : https://leetcode.com/problems/maximum-subarray

//solution

var maxSubArray = function(nums) {
    let cmax =nums[0];
    let best =nums[0];
    for(let i =1;i<nums.length;i++){
        cmax = Math.max(nums[i],cmax+nums[i])
        best = Math.max(cmax,best)
    } 
    return best;
};