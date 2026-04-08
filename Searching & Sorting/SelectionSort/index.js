// 👉 Find the smallest element and put it at the beginning

// Then:

// Find next smallest → put in 2nd position
// Then next → 3rd position

// ⏱ Time Complexity
// Best: O(n²)
// Worst: O(n²)
// 👉 (No optimization like Bubble Sort)


function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));