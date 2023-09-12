class animal {
  constructor() {
    this.alive = true;
  }

  eat() {
    console.log("this animal is eating");
  }
}

class rabbit extends animal {}

class fish extends animal {}
class hawk extends animal {}

let rabit = new rabbit();
let fish_ = new fish();
let hawk_ = new hawk();
// speciaL METHODS FOR ASSiGNING PROPERTIES

class car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

class age {
  constructor(age) {
    this.age = age;
  }
}

const car_shelb = new car("shelby", "hovetl", 2023, "white");
const car_ford = new car("ford mustang", "camaro", 2023, "black");
