// 🔹 Problem 1: Sum of Even Numbers
let n = 10;   // change this number
let total = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log("Sum of even numbers:", total);


// 🔹 Problem 2: Multiplication Table
let num = 5;   // change this number

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// 🔹 Problem 3: Count Vowels in a String
let text = "hello world";   // change this text
let count = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if ("aeiou".includes(ch)) {
        count++;
    }
}

console.log("Number of vowels:", count);



// For lop inside for loop

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i =", i, "j =", j);
  }
}



for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += "* ";
  }
  console.log(line);
}
