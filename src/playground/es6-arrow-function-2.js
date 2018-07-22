// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound with arrow function. (moves up to it's parent)
// in function below if we weren't using an arrow functions
// we would need to bind this to another variable and in our console.log
// use that variable to refer to this.name in the object

const user = {
  name: 'Chris',
  cities: ['Charlottesville', 'New York', 'Boulder'],
  // this would work, but lets use the ES6 method function seen below

// **Old method commented out below
// printPlacesLived: function() {

  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // Originally used forEach, but with map we can change each item in a new array

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());


// Challenge area

const multiplier = {
  // numbers - array of numbers we want to multiple
  numbers: [1,2,3,4,5,6],

  // multiplyBy - single number
  multiplyBy: 10,

  // multiply - method that returns a new array where the number have been multiplied
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
