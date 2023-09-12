function confirmEnding(str, target) {
  if (str.includes(target)) {
    return true;
  }else {
    return false
  }
}


// function confirmEnding(str, target) {
//   if (str.endsWith(target)) {
//     return true;
//   }else {
//     return false
//   }
// }
const test = confirmEnding("Bastian", "n");
const test_2 = confirmEnding("Open sesame", "sage")
console.log(test)
console.log(test_2)