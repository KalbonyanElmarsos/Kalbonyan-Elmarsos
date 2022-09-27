'use strict';

/***************************************/
// Scoping in Practice
/***************************************/

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scopes scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Menna';
// calcAge(1991);
// console.log(age);
// printAge();

/***************************************/
// Hoisting and TDZ in Practice
/***************************************/
/*
// var hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Menna';
let job = 'student';
const year = 2006;

// Function  hoisting with variables

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

console.log(addExpr(5, 1));
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;


// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/***************************************/
// The this Keyword in Practice
/***************************************/

/*
console.log(this); //window

const calcAge = function (birthYear) {
  console.log(this); // undefined
  console.log(2037 - birthYear); // 31
};
calcAge(2006);

const calcAgeArrow = birthYear => {
  console.log(this); // window
  console.log(2037 - birthYear);
};
calcAgeArrow(2013);

const menna = {
  year: 2006,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
menna.calcAge();

const jana = {
  year: 2017,
};

jana.calcAge = menna.calcAge;
jana.calcAge();

const f = menna.calcAge;
f();
*/

/***************************************/
// Regular Functions vs. Arrow Functions
/***************************************/

/*
// var firstName = 'Jana';

const menna = {
  firstName: 'Menna',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or than
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
menna.greet();
menna.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

/***************************************/
// Objects vs. primitives
/***************************************/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Menna',
  age: 16,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
*/

/***************************************/
// Primitives vs. Objects in Practice
/***************************************/

/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {};

// Copying object
const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
*/
