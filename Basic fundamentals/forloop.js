// 🔹 Problem 1: Sum of Even Numbers
// let n = 10;   // change this number
// let total = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         total += i;
//     }
// }

// console.log("Sum of even numbers:", total);


// 🔹 Problem 2: Multiplication Table
// let num = 5;   // change this number

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }


// 🔹 Problem 3: Count Vowels in a String
// let text = "hello world";   // change this text
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     let ch = text[i].toLowerCase();
//     if ("aeiou".includes(ch)) {
//         count++;
//     }
// }

// console.log("Number of vowels:", count);



// For lop inside for loop

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("i =", i, "j =", j);
//   }
// }



// for (let row = 1; row <= 3; row++) {
//   let line = "";
//   for (let col = 1; col <= 3; col++) {
//     line += "* ";
//   }
//   console.log(line);
// }


// Printing Numbers Twice
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log("i =", i, "j =", j);
//   }
// }


// for (let i = 1; i <= 2; i++) {
//   console.log("Outer loop:", i);

//   for (let j = 1; j <= 3; j++) {
//     console.log("  Inner loop:", j);
//   }
// }



//write a function that count of digits in a number
function count(n){
  let numCount = 0
  while(n > 0){
    n = Math.floor(n / 10)
    numCount++
  }
  return numCount
}

let number = 213343556746;
let result = count(number)
console.log(result)


// check if number is palnindrome or not
var isPalindrome = function(n){
    let copy = n
    let reverseNumber = 0;
    while(n>0){
        rem = n % 10
        reverseNumber = (10*reverseNumber) + rem
        n = Math.floor(n/10);
    }
    if(copy === reverseNumber){
       return true
    }else{
        return false
    }
}