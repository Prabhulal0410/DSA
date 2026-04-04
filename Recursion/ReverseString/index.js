function reverseString(str) {
  if (str === "") {
    return ""; // base case
  }
  return reverseString(str.slice(1)) + str[0]; // recursive case
}

// Example usage:
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("recursion")); // "noisrucer"