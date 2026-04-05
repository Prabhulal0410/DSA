// we can apply binary search only on array which are sorted
// divide array and try to find middle element
// when we have to move our pointers or rwusde size of array we will wirte while loop
// Time complexcity = o(log n) because we divide n/2 every time

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1
    while(right >= left){
        let middle = Math.floor((left + right)/2)

        if(target === nums[middle]){
            return middle
        }else if(target < nums[middle]){
            right = middle - 1
        }else{
            left = middle + 1
        }
    }
    return -1
};
console.log(search([2,4,10,100,102],100))