"use strict";
function nerdify(txt) {
  for (let i = 0; i <= txt.length; i++) {
    if (
      txt.includes("a") ||
      txt.includes("A") ||
      txt.includes("e") ||
      txt.includes("E") ||
      txt.includes("i") ||
      txt.includes("I") ||
      //   txt.includes("L") ||
      txt.includes("l")
    ) {
      txt = txt
        .replaceAll("a", 4)
        .replaceAll("A", 4)
        .replaceAll("e", 3)
        .replaceAll("E", 3)
        // .replaceAll("L", 1)
        .replaceAll("l", 1);
    }
    return txt;
  }
}

const data_one = nerdify("Fundamentals");
console.log(data_one);

const itr = (age) => {
  return age >= 18 ? "adult" : "minor";
};
console.log(itr(11));
