// var reverseString = function(s) {
//     let len = s.length 
//     let halflen = Math.floor(len/2)

//     for(let i = 0; i < halflen ; i ++){
//         let temp = s[i]
//         s[i] = s[len-1- i]
//         s[len-1-i] = temp
//     }
// };
// console.log(reverseString(["h","e","l","l","o"]))

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); 