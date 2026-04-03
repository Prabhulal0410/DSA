function fibonacci(n) {
  if (n <= 1) {
    return n; // base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

// Example usage:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8