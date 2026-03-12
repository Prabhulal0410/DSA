// 1️⃣ What is Time Complexity? ⏱️

// Time Complexity tells us how fast an algorithm runs when the input size increases.

// 👉 In simple words:
// How much time the code takes as the data grows.

// Example 1: Simple Loop
// function printNumbers(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// Explanation

// The loop runs n times.
// If n = 10 → runs 10 times
// If n = 1000 → runs 1000 times

// ✅ Time Complexity = O(n) (Linear time)

// Example 2: Constant Time
// function getFirstElement(arr) {
//   return arr[0];
// }

// Explanation

// No matter array size (10 or 1 million)
// Only 1 operation
// ✅ Time Complexity = O(1) (Constant time)

// Example 3: Nested Loop
// function printPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// Explanation

// First loop runs n times
// Second loop runs n times
// Total operations = n × n

// ✅ Time Complexity = O(n²)




// 2️⃣ What is Space Complexity? 💾
// Space Complexity tells us how much memory the algorithm uses.

// 👉 In simple words:
// How much extra memory the program needs.

// Example 1: Constant Space
// function sum(a, b) {
//   return a + b;
// }

// Explanation:

// Only two variables used.
// ✅ Space Complexity = O(1)

// Example 2: Linear Space
// function copyArray(arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i]);
//   }

//   return newArray;
// }

// Explanation:

// New array size grows with input size.
// If input = n → memory = n

// ✅ Space Complexity = O(n)

// 3️⃣ Common Time Complexities
// Complexity	Name	Example
// O(1)	Constant	Access array element
// O(log n)	Logarithmic	Binary Search
// O(n)	Linear	Single loop
// O(n log n)	Efficient sorting	Merge Sort
// O(n²)	Quadratic	Nested loops
// 4️⃣ Quick Real Life Example 🍕

// Imagine ordering pizza:

// Situation	Complexity
// Pick first pizza	O(1)
// Check every pizza	O(n)
// Compare every pizza with every other	O(n²)
// 5️⃣ Super Simple Rule

// 🔹 Loop → O(n)
// 🔹 Nested loops → O(n²)
// 🔹 No loop → O(1)

// ✅ Summary

// Concept	Meaning
// Time Complexity	How fast the program runs
// Space Complexity	How much memory it uses