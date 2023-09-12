function findLongestWordLength(str) {
  let split_word = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < split_word.length; i++) { // Fixed typo: "length" was misspelled as "lenght"
    if (split_word[i].length > longestWord) {
      longestWord = split_word[i].length;
    }
  }
  return longestWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
