//by TheMadDrunk
//24/06/2022

//link to problem : https://leetcode.com/problems/merge-sorted-array

//solution

var merge = function(nums1, m, nums2, n) {
    for(let i = 0;i<n;i++){
        nums1[i+m] = parseInt(nums2[i])
    }
    nums1.sort((a,b) => a-b)
    /*
    for(let i = 0;i<nums1.length;i++)
        console.log(typeof(nums1[i]))*/
};