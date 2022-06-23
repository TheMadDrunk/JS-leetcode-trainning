//by TheMadDrunk
//23/06/2022

//link to problem : https://leetcode.com/problems/contains-duplicate/

//solution 1 :

var containsDuplicate = function(nums) {
    nums.sort();
    for(let i =1;i<nums.length;i++){
        if(nums[i-1] == nums[i]) return true;
    }
    return false;
};


//solution 2 : 

var containsDuplicate = function(nums) {
    dict = {};
    for(let i = 0;i<nums.length;i++){
        if(dict.hasOwnProperty(nums[i])){
            return true;
        }
        dict[nums[i]] = 1;
    }
    console.log(dict);
    return false;
};