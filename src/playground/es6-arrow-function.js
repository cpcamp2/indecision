function square(x) {
  return x * x;
};

console.log(square(3));

// Example of arrow function

// const squareArrow = (x) => {
//   return x * x;
// };

// This is a code example that's identical to last arrow function,
// but since this only has one expression it is implicitly returned

const squareArrow = (x) => x * x;

console.log(squareArrow(10));

///////// Challenge /////////

const fullName = 'Chris Camp';

///////// Full arrow function /////////

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };
//
// console.log(getFirstName(fullName))

///////// Shorthand arrow function /////////

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName))
