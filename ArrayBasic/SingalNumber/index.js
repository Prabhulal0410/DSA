// Method 1

// var singleNumber = function(nums) {
//     let hash = {}
//     for(let i = 0; i< nums.length; i++){
//         if(!hash[nums[i]]){
//              hash[nums[i]] = 1
//         }else{
//              hash[nums[i]] ++
//         }
//     }
//     for(let i = 0; i< nums.length; i++){
//         if(hash[nums[i]] == 1){
//             return nums[i]
//         }
//     }
// };

// console.log(singleNumber([2,5,2,6,5]))



// using ------> Bitwise xor

var singleNumber = function(nums) {
    let xor = 0;

    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i]
    }
    return xor
};
console.log(singleNumber([2,5,2,6,5,6,9]))



//Example how bitwise xor is wokrs
// Bitwise XOR (exclusive OR) is an operation that compares two bits and returns:

// 1 if the bits are different
// 0 if the bits are the same

let a = 5;  // 0101
let b = 3;  // 0011

console.log(a ^ b); // 6 (0110)