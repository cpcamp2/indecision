var nameVar = 'Chris';
var nameVar = 'Andrew';
console.log('nameVar', nameVar);

// You cannot redefine using Let unlike Var, but you can reassign
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

// You cannot redefine or reassign Const
const nameConst = 'Penn';
console.log('nameConst', nameConst);

// Block-level scoping

// This code example will work because Var are function scoped

//////////////////CODE EXAMPLE//////////////////

// var fullName = 'Christopher Camp';
//
// if (fullName) {
//   var firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
//
// console.log(firstName);

//////////////////CODE EXAMPLE//////////////////

// The code example below will not work because Const (same with let) is block-level scoped
// - meaning that if Const is defined in a block of code such as
// - a loop then it will not be accessable outside of said loop

//////////////////CODE EXAMPLE//////////////////

// var fullName = 'Christopher Camp';
//
// if (fullName) {
//   const firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
//
// console.log(firstName);

//////////////////CODE EXAMPLE//////////////////


// The code example will work with a let if it is defined outside of the Block
// See code example below

//////////////////CODE EXAMPLE//////////////////

const fullName = 'Christopher Camp';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

//////////////////CODE EXAMPLE//////////////////
