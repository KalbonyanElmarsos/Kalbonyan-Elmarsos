'use strict';

//  Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 old
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // we can simply set to (undefined) to skip the secund parameter
*/

/*******************************************************************/

// How Passing Arguments Works: Value vs. Reference

/*
const flight = 'LH123';
const menna = {
  name: 'Menna Hassan',
  passport: 223455678,
};

const checkIn = function (flightNum, Passenger) {
  flightNum = 'LH999';
  Passenger.name = 'Mrs. ' + Passenger.name;

  if (Passenger.passport === 223455678) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, menna);
console.log(flight);
console.log(menna);

// Is the same as doing...
// const flightNum = flight;
// const Passenger = menna;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(menna);
checkIn(flight, menna);
 */

/*******************************************************************/
// Functions Accepting Callback Functions
/*******************************************************************/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);
['Menna', 'Manal', 'Jana'].forEach(high5);
 */

/*******************************************************************/
//  Functions Returning Functions
/*******************************************************************/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Menna');
greeterHey('Manal');

greet('Hello!')('Menna');

// Small Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hi 👋')('Menna');
 */

/*******************************************************************/
// The call and apply Methods
/*******************************************************************/

/*
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  booking: [],
  // book: function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Menna Hassan');
lufthansa.book(635, 'Manal Hassan');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Dose Not work
// book(23, 'Ritoo Hossam');

// Call Method
book.call(eurowings, 23, 'Ritoo Hossam');
// console.log(eurowings);

book.call(lufthansa, 239, 'Zeinab Hassan');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Ebrahim Hassan');
// console.log(swiss);

// Apply Method
const flightData = [583, 'Loaa Adel'];
book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);
 */

/***************************************************/

/*
// Bind Method
// book.call(eurowings, 23, 'Ritoo Hossam');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Rania Hassan');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Abeer Mousa');
bookEW23('Ahlam Mousa');

// with Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
 */

/*******************************************************************/
// Immediately Invoked Function Expressions (IIFE)
/*******************************************************************/

/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
*/

/*******************************************************************/
// Closures
/*******************************************************************/
/*
const secureBooking = function () {
  let PassengerCount = 0;

  return function () {
    PassengerCount++;
    console.log(`${PassengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*******************************************************************/
// CMore Closure Examples
/*******************************************************************/

/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all and ${n} passengers`);
    console.log(`There are 3 groups, each with ${preGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const preGroup = 1000;
boardPassengers(180, 3);
*/
