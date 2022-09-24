"use strict";

/***************************************/
// Activating Strict Mode
/***************************************/

/*
let hasDriversLicense = false;
const pastTeat = true;

if (pastTeat) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 345;
*/

/***************************************/
// Function
/***************************************/

/*
function logger() {
  console.log("My name is Menna");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/***************************************/
// function declaration vs expression
/***************************************/

/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(2006);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2006);

console.log(age1, age2);
*/

/***************************************/
// Arrow function
/***************************************/

/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} reties in ${retirement} years`;
};

console.log(yearsUntilRetirement(2006, "Menna"));
console.log(yearsUntilRetirement(1996, "Manal"));
*/

/***************************************/
// Function calling other function
/***************************************/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} Pieces of apples and ${orangePieces} Pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/***************************************/
// Reviewing Functions
/***************************************/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} reties in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already reties `);
    return -1;
  }
};

console.log(yearsUntilRetirement(2006, "Menna"));
console.log(yearsUntilRetirement(1950, "Manal"));
*/

/***************************************/
// Array
/***************************************/

/*
const friend1 = "Jana";
const friend2 = "Loaa";
const friend3 = "Ritoo";

const friends = ["Jana", "Loaa", "Ritoo"];
console.log(friends);

const y = new Array(1996, 1998, 2006, 2013);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Manar";
console.log(friends);
// friends = ["Sally", "Marim"]; *That would be illegal (Error).

const firstName = "Menna";
const menna = [firstName, "Hassan", 2037 - 2006, "student", friends];
console.log(menna);
console.log(menna.length);

// Exercise

function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1996, 1998, 2006, 2013, 1987];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/***************************************/
// Basic Array Operations (method)
/***************************************/

/*
const friends = ["Jana", "Loaa", "Ritoo"];

// Add elements
const newLength = friends.push("Aya");
console.log(friends);
console.log(newLength);

friends.unshift("Heba");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Loaa"));
console.log(friends.indexOf("Ritoo"));

friends.push(23);
console.log(friends.includes("Loaa"));
console.log(friends.includes("Ritoo"));
console.log(friends.includes(23));

if (friends.includes("Loaa")) {
  console.log("you have a friend called Loaa");
}
*/

/***************************************/
// Objects
/***************************************/

/*
const mennaArray = [
  "Menna",
  "Hassan",
  2037 - 2006,
  "student",
  ["Jana", "Loaa", "Ritoo"],
];

const menna = {
  firstName: "Menna",
  lastName: "Hassan",
  age: 2037 - 2006,
  jop: "student",
  friends: ["Jana", "Loaa", "Ritoo"],
};
*/

/***************************************/
//  Dot (.) vs. Bracket Notation ([])
/***************************************/

/*
let menna = {
  firstName: "Menna",
  lastName: "Hassan",
  age: 2037 - 2006,
  job: "student",
  friends: ["Jana", "Loaa", "Ritoo"],
};

console.log(menna);

console.log(menna.firstName);
console.log(menna["lastName"]);

const nameKey = "Name";
console.log(menna["first" + nameKey]);
console.log(menna["last" + nameKey]);
// console.log(menna."last" + nameKey ); we can't write this

const interestedIn = prompt(
  "what do you want to know about Jonas? choose between first name, last name, age, job and friends"
);

if (menna[interestedIn]) {
  console.log(menna[interestedIn]);
} else {
  console.log(
    "wrong request choose between first name, last name, age, job and friends"
  );
}

menna.location = "Egypt";
menna["twitter"] = "@mennahali";
console.log(menna);

// challenge //

// Menna has 3 friends and his best friend is called Jana

console.log(
  `${menna.firstName} has ${menna.friends.length} friends, and his best friend is called ${menna.friends[0]}`
);
*/

/***************************************/
// object methods
/***************************************/

/*
const menna = {
  firstName: "Menna",
  lastName: "Hassan",
  birthYear: 2006,
  job: "student",
  friends: ["Jana", "Loaa", "Ritoo"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-years old, ${
      menna.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(menna.calcAge()); // 46
// console.log(menna["calcAge"](2006)); // 46

console.log(menna.age);
console.log(menna.age);
console.log(menna.age);

console.log(menna.getSummary());
*/

/***************************************/
// The for loop
/***************************************/

/*
// console.log("Lifting weights repetition 1 ");
// console.log("Lifting weights repetition 2 ");
// console.log("Lifting weights repetition 3 ");
// console.log("Lifting weights repetition 4 ");
// console.log("Lifting weights repetition 5 ");
// console.log("Lifting weights repetition 6 ");
// console.log("Lifting weights repetition 7 ");
// console.log("Lifting weights repetition 8 ");
// console.log("Lifting weights repetition 9 ");
// console.log("Lifting weights repetition 10 ");

// for loop keeps running, while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}
*/

/*************************************************/
// looping Array,Breaking and Continuing
/**********************************************/

/*
const menna = [
  "Menna",
  "Hassan",
  2037 - 2006,
  "student",
  ["Jana", "Loaa", "Ritoo"],
  true,
];

const types = [];

for (let i = 0; i < menna.length; i++) {
  // Reading from Menna array
  console.log(menna[i]);

  // Filling the types array
  types.push(typeof menna[i]);
}
console.log(types);

/////////////////////

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

console.log("--- ONLY STRING ---");
for (let i = 0; i < menna.length; i++) {
  if (typeof menna[i] !== "string") continue;

  console.log(menna[i], typeof menna[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < menna.length; i++) {
  if (typeof menna[i] === "number") break;

  console.log(menna[i], typeof menna[i]);
}
*/

/*************************************************/
// Looping Backwards and Loops in Loops
/**********************************************/

/*
const menna = [
  "Menna",
  "Hassan",
  2037 - 2006,
  "student",
  ["Jana", "Loaa", "Ritoo"],
  true,
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = menna.length - 1; i >= 0; i--) {
  console.log(i, menna[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------- STARTING EXERCISE ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}
*/

/******************************************/
// The While loop
/******************************************/

/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} `);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end......");
}
*/
