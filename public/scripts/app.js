'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};

console.log(add(55, 5, 1001));

// this keyword - no longer bound

var user = {
  name: 'Jakub',
  cities: ['Białystok', 'Ełk', 'Poznań'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // });
  }
};

console.log(user.printPlacesLived());

//challenge area

var multiplier = {
  numbers: [1, 2, 3, 4, 5, 6],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
