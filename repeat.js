function repeatStringNumTimes(str, num) {
    const str_split = str.split("");
    let repeatedString = "";
  
    for (let i = 0; i < num; i++) {
      repeatedString += str_split.join('');
    }
  
    // const len = repeatedString.length;
    // console.log(len);
    return repeatedString;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  