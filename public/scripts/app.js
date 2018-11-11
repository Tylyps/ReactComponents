'use strict';

var square = function square(x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

var x = 4;
console.log(square(x), squareArrow(x));

var fullName = 'Jakub Chmielewski';

var getFirstNameRegular = function getFirstNameRegular(fullName) {
  return fullName.split(' ')[0];
};

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName(fullName), getFirstNameRegular(fullName));
