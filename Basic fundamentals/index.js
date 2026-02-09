
// For loop

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([2,5,4]))



// While loop

let fruits = ["apple", "banana", "cherry"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}
