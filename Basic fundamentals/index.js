
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




let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log("Total:", sum);



let str = "hello";
let reversed = "";
let i = str.length - 1;

while (i >= 0) {
  reversed += str[i];
  i--;
}

console.log(reversed); // "olleh"

