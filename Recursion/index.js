
// Defination --> Function call itself to solve smaller versions of the same problem

// Two parts of recursion
// 1 -> Base Case - Stop condition
// 2 -> Recursive Case - part where function call itself

// function printNumbers(n) {
//     if (n > 5) return;   // base case (stop)

//     console.log(n);
//     printNumbers(n + 1); // recursive call
// }

// printNumbers(1);


//Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120