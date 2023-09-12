// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(booWho(false));

// function titleCase(str) {
//     const str_split = str.split(' '); // Split the string into an array of words
//     const str_cap = str_split.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
//     return str_cap.join(' '); // Join the modified words back into a string
// }

// console.log(titleCase("I'm a little tea pot"));

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${this.numLegs} legs`;
  },
};

console.log(dog.sayLegs());



for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

