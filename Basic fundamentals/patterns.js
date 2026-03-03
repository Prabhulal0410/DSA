// let n = 4;

// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 0; j <= n; j++) {
//     row = row + " * ";
//   }
//   console.log(row);
// }

// right angle star pattern
// let n = 4;

// for(let i = 0; i <= n; i ++){
//   let row = ""
//   for(let j = 0; j <=i;j++){
//     row = row +" * "
//   }
//   console.log(row)
// }

//right angle with num
// let n = 4;

// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

//right angle with num as per row
// let n = 4;

// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

//inverted right angle with num
// let n = 5;

// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let j = 0; j < n-i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i <= 5; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }


// let n = 5;
// let toggle = 1;
// for (let i = 0; i <= 5; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }

// pyramid
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   // spaces
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   // stars (left side)
//   for (let k = 0; k < (2 * i + 1); k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }


//inverted pyramid
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  // spaces (increase every row)
  for (let j = 0; j < i; j++) {
    row = row + " ";
  }

  // stars (decrease every row)
  for (let k = 0; k < (2 * (n - i) - 1); k++) {
    row = row + "*";
  }

  console.log(row);
}