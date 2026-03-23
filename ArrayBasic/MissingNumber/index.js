var missingNumber = function(nums) {
    let n = nums.length
    let totalSum = n * (n+1) / 2

    let halfSum = 0
    for(let i = 0; i < nums.length; i ++){
        halfSum = halfSum + nums[i]
    }

    return totalSum - halfSum
};

console.log(missingNumber([2,4,5,1,0]))