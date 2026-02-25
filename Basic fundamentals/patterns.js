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

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
