// Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    let curCount = 0;
    let maxCount = 0;

    for(let i = 0; i <nums.length; i++){
        if(nums[i] == 1){
            curCount++
        }else{
            maxCount = Math.max(curCount,maxCount)
            curCount = 0
        }
    }
    return Math.max(maxCount,curCount)
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,1,0]))