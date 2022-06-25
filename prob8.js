//by TheMadDrunk
//25/06/2022

//link to problem : https://leetcode.com/problems/intersection-of-two-arrays-ii

//solution

var intersect = function(nums1, nums2) {
    let lookup = new Map();
    let out = new Array();
    for(let i =0;i<nums1.length;i++){
        if(lookup.has(nums1[i])){
            let oldval = lookup.get(nums1[i]);
            lookup.set(nums1[i],oldval+1);
        }
        else lookup.set(nums1[i],1);
    }
    console.log(lookup)
    for(let i = 0;i<nums2.length;i++){
        if(lookup.has(nums2[i])){
            let oldval = lookup.get(nums2[i]);
            if(oldval==1)
                lookup.delete(nums2[i])
            else 
                lookup.set(nums2[i],oldval-1);
            out.push(nums2[i]);
        }
    }
    return out;
};