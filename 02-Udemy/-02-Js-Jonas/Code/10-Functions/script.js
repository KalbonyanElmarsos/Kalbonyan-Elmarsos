'use strict';
// ------------- Default paramter----------------------------------------------------------
/*
const bookings = [];
const createBooking = function (
  flightNum = 1,
  numPassengers = 1,
  price = 2 * numPassengers
) {
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LL123'); // {flightNum='LL123',numPassengers:1,price:2}
createBooking('LL123', 2, 199);
createBooking('LL123', 3);
createBooking('LL123', undefined, 10);
*/

// ------------- . How Passing Arguments Works: Value vs. Reference----------------------------------------------------------
/*
const flight = 'ee11';
const passenger = { name: 'mahmoud', passport: 47646767676676 };

function checkIn(flightNum, passenger) {
  flightNum = '11ww';
  passenger.name = 'ali';
  if (passenger.passport === 47646767676676) {
    console.log('Checked');
  } else {
    console.log('Not checked');
  }
}
checkIn(flight, passenger);
console.log(flight, passenger); // ee11 { name: 'ali', passport: 47646767676676 };

function newPassport(person) {
  // const newPassenger = Object.assign({}, person);
  // newPassenger.passport = Math.trunc(Math.random() * 10000);
  passenger.passport = Math.trunc(Math.random() * 10000);
}
newPassport(passenger);
checkIn(flight, passenger);
*/

// ------------- Functions Accepting Callback Functions----------------------------------------------------------
/*
function oneWord(str) {
  return str.replaceAll(' ', '').toLowerCase();
}

function toUpper(str) {
  const [firstWord, ...other] = str.split();
  return [firstWord.toUpperCase(), ...other].join(' ');
}

function higherOrderFunc(str, func) {
  console.log(`Original str: ${str}`);
  console.log(`Transformed str: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
}

higherOrderFunc('Quoran is the Best thing in the world', toUpper);
higherOrderFunc('Quoran is the Best thing in the world', oneWord);
console.log(oneWord);
*/

// ------------- Functions Returning Functions----------------------------------------------------------
/*
function greet(greeting) {
  return function (name) {
    console.log(`${greeting}  ${name}`);
  };
}
const hello = greet('Hello');
hello('ali'); // Hello ali
greet('hello')('hend');

// challange
greetArr = greeting => name => console.log(`${greeting}  ${name}`);
*/

// ------------- The call and apply Methods----------------------------------------------------------
/*
const cairo = {
  airline: 'cairo',
  iataCode: 'LH',
  bookings: [],
  book(flightName, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight num: ${this.iataCode} ${flightName}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightName}` });
  },
};
cairo.book(222, 'ali mohamed');

const alex = {
  airline: 'alex',
  iataCode: 'HS',
  bookings: [],
};
const book = cairo.book;
//  it will not working as this--> refer to undefined
// book(333, 'hend ali');

// - call will change  the function  context to the alex object
cairo.book.call(alex, 333, 'hend ali');
book.call(alex, 333, 'hend ali'); // this --> refer to alex now
// - Apply method
const data = [444, 'ali ali'];
book.apply(alex, data); // it accept only array of parameters
 */

// ------------- The bind Method ----------------------------------------------------------
/*
const alex = {
  airline: 'alex',
  iataCode: 'HS',
  bookings: [],
};

const cairo = {
  airline: 'cairo',
  iataCode: 'LH',
  bookings: [],
  book(flightName, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight num: ${this.iataCode} ${flightName}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightName}` });
  },
};
const book = cairo.book;

const bookAlex = book.bind(alex); // bind return a new function with explicitly new context
const bookCairo = book.bind(cairo);
bookAlex(343, 'joe joe');
bookCairo(999, 'joe joe');

alex.plane = 200;
alex.newPlane = function (plane) {
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector('.buy')
  .addEventListener('click', alex.newPlane.bind(alex));

// - Partial application
const calcTax = (rate, salary) => salary + salary * rate;
const calcTaxNew = calcTax.bind(null, 0.1); // (salary)=> salary + salary* .2
console.log(calcTaxNew(2000));
*/

// ------------- Immediately Invoked Function Expressions (IIFE) ----------------------------------------------------------
/*
(function () {
  console.log('invoke once');
})();

(() => {
  console.log('Arrow function invoke once');
})();
*/

// ------------- Closures----------------------------------------------------------
/*
const secureBooking = function () {
  let passenger = 0;
  return function () {
    passenger++;
    console.log(`${passenger} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();
booker();
console.dir(booker);
*/

// ------------- More Closure Examples----------------------------------------------------------
/*
let f;
const func1 = function () {
  const x = 100;
  f = function () {
    console.log(x + 10);
  };
};
func1();
f();
console.dir(f);
const func2 = function () {
  const y = 2000;
  f = function () {
    console.log(y + 100);
  };
};
func2();
f();
console.dir(f);

//  - another example

const flight = function (n, wait) {
  const numGroups = n / 2;
  setTimeout(() => {
    console.log(`we will now begin the flight with ${n} passengers`);
    console.log(`there are 2 groups, each with ${numGroups} passengers`);
  }, wait * 1000);
  console.log(`the flight will be start after ${wait} seconds`);
};
flight(50, 5);
*/
