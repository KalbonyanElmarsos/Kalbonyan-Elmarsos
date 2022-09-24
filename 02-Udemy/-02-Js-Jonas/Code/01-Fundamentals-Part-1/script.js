/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Menna");
console.log(23);

let firstName = "Menna";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let Menna_hassan = "MH";
let $function = 27;

let person = "Menna";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJop = "Student";

let jop1 = "Programming";
let jop2 = "Student";

console.log(myFirstJob);
*/

/*************************************/
// Data Type
/*************************************/

/*
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Menna");

JavaScriptIsFun = "YES!";
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/***********************************************/
// Declare variable (let, const and var)
/**********************************************/

/*
let age = 16;
age = 25;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "Programming";
job = "Teacher";

lastName = "Schmedtman";
console.log(lastName);
*/

/***********************************************/
// Basic Operators
/**********************************************/

/*
//  Math operators.
const now = 2037;
const ageMenna = now - 2006;
const ageManal = now - 1996;
console.log(ageMenna, ageManal);

console.log(ageMenna * 2, ageManal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Menna";
const lastName = "Hassan";
console.log(firstName + " " + lastName);

//  Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageMenna > ageManal); // >, <, >=, <=
console.log(ageManal >= 18);

const isFullAge = ageManal >= 18;

console.log(now - 2006 > now - 1996);
*/

/***********************************************/
// Operator Precedence
/**********************************************/

/*
const now = 2037;
const ageMenna = now - 2006;
const ageManal = now - 1996;

console.log(now - 2006 > now - 1996);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageMenna + ageManal) / 2;
console.log(ageMenna, ageManal, averageAge);
*/

/*************************************************/
// Strings and Template Literals
/*************************************************/

/*
const firstName = "Menna";
const job = "student";
const birthYear = 2006;
const year = 2037;

const Menna =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Menna);

const mennaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mennaNew);

console.log(`Just a regular string.....`);

console.log(`String with \n\
Multiple \n\
Lines`);

console.log(`String
Multiple
Lines`);
*/

/*********************************************/
// If / else statements
/*********************************************/

/*
const age = 15;

if (age >= 18) {
  console.log("Sara can start driving License 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait anther ${yearsLeft} years :)`);
}

const birthYear = 2012;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*********************************************/
// Type Conversion and Coercion
/*********************************************/

/*
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

console.log(Number("Menna"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);
*/

/*********************************************/
// Truthy and flasy value
/*********************************************/

/*
// 5 Falsy values: (0, ' ', undefined, null, NaN)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Menna"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("you should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}
*/

/*********************************************/
// Equality Operators == vs ===
/*********************************************/

/*
const age = "18";
if (age === 18) console.log("you just became an adult (strict)");

if (age == 18) console.log("you just became an adult (loose)");

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is bot 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");
*/

/*********************************************/
// Logic Operators
/*********************************************/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("someone else should derive.....");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("someone else should derive.....");
}
*/

/*********************************************/
// The switch statement
/*********************************************/

/*
const day = "Monday";

switch (day) {
  case "Monday": // day === 'Monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log(" write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend :D ");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log(" write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend :D ");
} else {
  console.log("Not a valid day!");
}
*/

/*********************************************/
// Statements and Expressions
/*********************************************/

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Menna";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
/*********************************************/
// The conditional (Ternary) Operator
/*********************************************/

/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 🧊";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
