function powerOfTwo(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return 2 * powerOfTwo(n - 1);
}
console.log(powerOfTwo(5));