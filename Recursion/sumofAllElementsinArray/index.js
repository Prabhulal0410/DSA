let arr = [3,0,0,4,9,5]

function sum (n){
    if (n == 0) return arr[n]
    return arr[n] + sum(n-1)
}
console.log(sum(arr.length-1))