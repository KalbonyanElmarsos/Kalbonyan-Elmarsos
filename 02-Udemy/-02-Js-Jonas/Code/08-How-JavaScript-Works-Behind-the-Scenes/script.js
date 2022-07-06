'use strict';
// --------------------scope chaining-----------------------
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'ali';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'new output';
    }
    // console.log(str);
    // console.log(millenial);
    // add(2, 3);
  }
  printAge();
  return age;
}
const firstName = 'mahmoud';
calcAge(1991);
// console.log(age);
*/

// --------------------hoisting -----------------------
/*
// =====variables=====
console.log(me); //undefined
console.log(job); // undefined
console.log(year); // reference error can not access year before initialization, TDZ

var me = 'mahmoud';
var job = 'developer';
const year = 1991;

// =====functions=====
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // can not access addExpr before initialization
console.log(addDecl(2, 3)); // can not access addDecl before initialization
console.log(subtract(2, 3)); // subtract is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var subtract = function (a, b) {
  return a - b;
};
const addArrow = (a, b) => a + b;

//----js pitfull of var----------
if (!numProducts) deleteShoppingCart(); // delete all , as hoisting made numProducts=undefined so the condition is true {as we use var if we use le/const this pitfull will not happen}

var numProducts = 10;
function deleteShoppingCart() {
  console.log('delete all');
}

var x = 1; //will  be part from window==> window.x =1
let y = 2; // will not be part from window
const z = 3; // will not be part from window
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

// -------------------this keyword----------------------------------
/*
console.log(this); // refer to the window object
// 1) function expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined as we use strict mode and const
};
calcAge(1997);

// 2) arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // refer to window object as arrow function using this for the parent scope/ in this case its the global context
};
calcAgeArrow(1997);
// 2) Method
const mahmoud = {
  year: 1997,
  calcAge: function () {
    console.log(this); // refer to mahmoud, as mahmoud object which actually now calling the function
    console.log(2037 - this.year);
  },
};
mahmoud.calcAge();
const ali = { year: 1999 };
ali.calcAge = mahmoud.calcAge; // method borrowing
ali.calcAge(); // refer to ali, as ali object which actually now calling the function

const f = mahmoud.calcAge;
f(); // this wll be undefined as there is an owner for f func
*/

// -------------------regular Vs arrow function----------------------------------
/*
const mahmoud = {
  firstName: 'mahmoud',
  year: 1997,
  calcAge: function () {
    console.log(this); // refer to mahmoud, as mahmoud object which actually now calling the function
    console.log(2037 - this.year);

    //1) solution #1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996); // undefined, as its a regular function but inside a method
    //   console.log(self.year >= 1981 && self.year <= 1996); // the solution for this pitfull
    // };

    //2) solution #2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); // true, as it will inhirt the tis from the parent scope
    };
    isMillenial();
  },
  greet: () => console.log(`hy ${this.firstName}`), // Hey undefined, as this refer to the window object
};
mahmoud.greet();
mahmoud.calcAge();
*/

// ------------------- argument Keyword  ----------------------------------
/*
const addExp = function (a, b) {
  console.log(arguments); // [3,4]
  return a + b;
};
addExp(3, 4);
var addArrow = (a, b) => {
  console.log(arguments); //undefined it will not in arrow function
  return a + b;
};
*/

// -------------------  primitive VS objects  ----------------------------------
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = { name: 'mahmoud', age: 30 };
const friend = me;
friend.age = 33;
console.log('friend', friend); //{ name: 'mahmoud', age: 33 };
console.log('me', me); //{ name: 'mahmoud', age: 33 };

let lastName = 'mahmoud';
let oldLastName = lastName;
lastName = 'ali';
console.log(lastName, oldLastName);
const shams = {
  firstName: 'shams',
  lastName: 'ahmed',
  age: 4,
  frineds: [1, 2, 3],
};
const hend = shams;
hend.lastName = 'ali';
console.log(shams); //{ firstName: 'shams', lastName: 'ahmed', age: 4, frineds:[1,2,3] };
console.log(hend); //{ firstName: 'shams', lastName: 'ahmed', age: 4, frineds:[1,2,3] };

//  how to copy objects
const shams2 = { firstName: 'shams', lastName: 'ahmed', age: 4 };
Object.assign({}, hend2); // only copy the first, if there is nested object, it will not copied
hend2.lastName = 'ali';
console.log(shams2); //{ firstName: 'shams', lastName: 'ahmed', age: 4, frineds:[1,2,3] };
console.log(hend2); //{ firstName: 'shams', lastName: 'ali', age: 4 , frineds:[1,2,3]};
hend2.frineds.push(5); // deep object will not be copied when we use Object.assign()
console.log(shams2); //{ firstName: 'shams', lastName: 'ahmed', age: 4, frineds:[1,2,3,5] };
console.log(hend2); //{ firstName: 'shams', lastName: 'ali', age: 4 , frineds:[1,2,3,5]};
*/
