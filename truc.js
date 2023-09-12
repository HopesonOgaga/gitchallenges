// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.substring(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function sumAll(arr) {
  // Determine the minimum and maximum values in the array
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let val_arr = [];

  for (let i = min; i <= max; i++) {
    val_arr.push(i);
  }

  return val_arr.reduce(function (acc, val) {
    return acc + val;
  }, 0); // Start with an initial value of 0
}

//compare arr

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// mutation
// function mutation(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const new_arr = arr[i].split(" ");
//     if (new_arr[0].includes(new_arr[1]) && new_arr[0] !== new_arr[1]) {
//       return true;
//     }
//   }
//   // If the loop completes without finding a match, return false.
//   return false;
// }
// mutation(["hello", "hello"]);
// index value

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

// pandolium

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Test the function
const str = "race car";
isPalindrome(str);

// usa number

function telephoneCheck(str) {
  const reg = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return reg.test(str);
}

console.log(telephoneCheck("555-555-555555"));

//roman numerals

function convertToRoman(num) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(convertToRoman(36));

function rot13(str) {
  let ans = "";
  let alphabet = "ABCDEFGHIJKMNPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 13) {
      ans += alphabet[alphabet.indexOf(str[i]) - 13];
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      ans += alphabet[alphabet.indexOf(str[i]) + 13];
    } else {
      ans += str[i];
    }
  }
  return ans;
}

console.log(rot13("SERR PBQR PNZC"));

function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
])
