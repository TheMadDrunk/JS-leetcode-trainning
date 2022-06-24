//by TheMadDrunk
//24/06/2022

//link to problem : https://leetcode.com/problems/binary-search

//solution

var search = function(nums, target) {
    let update = (l,r) => Math.floor((l+r)/2)
    let left=0,right=nums.length-1,mid=update(left,right);
    let found = false;
    do{
        console.log(left,mid,right);
        if(nums[mid]<target){
            left = mid+1;
            if(nums[left]==target)return left;
            mid = update(left,right);
        }
        else if(nums[mid]>target){
            right = mid-1;
            if(nums[right]==target)return right;
            mid = update(left,right);
        }
        else return mid;
        
    }while(left<=right);

    return -1;
};