'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '1:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]}
       and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...other) {
    console.log(mainIngredient); //mushrooms
    console.log(other); //['onion', 'oliver', 'spinach']
  },
};

// ------------- String Methods practice----------------------------------------------------------
// /*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.replaceAll('_', '')} ${from
    .slice(0, 3)
    .toUpperCase()} ${to} (${time.replace(':', 'h')})`.padStart(30, ' ');
}
// */
// ------------- Working with strings part 3----------------------------------------------------------
/*
const fullName = 'mahmoud farag';
const [firstName, lastName] = fullName.split(' ');

const newFullName = ['Mr.', firstName, lastName].join(' ');
console.log(newFullName); // Mr. mahmoud farag

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (let name of names) {
    // nameUpper.push(name.toUpperCase() + name.slice(1));
    nameUpper.push(name.replace(name[0], name[0].topUpperCase()));
  }
  console.log(nameUpper); //Mahmoud Farag Abdelazeim
};

capitalizeName('mahmoud farag abdelazeim');

//  Padding
const message = 'helo';
console.log(message.padStart(2, '$')); // $$helo
console.log(message.padEnd(2, '#')); // helo##

const creditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};
console.log(creditCard(9785468768758)); //*********8758

//  repeat
const message2 = 'Bad weather... all Departues Delayed... ';
console.log(message2.repeat(4));

*/

// ------------- Working with strings part 2----------------------------------------------------------
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const name = 'MaHmOud';
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect); //Mahmoud

//  Comparing emails
const email = 'ali@gmail.com';
const userEmailInput = '  Ali@gmail.com \n';
const correctEmail = userEmailInput.toLowerCase().trim();
console.log(email === correctEmail); // true

// Replacing
const priceGB = '233,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.').replaceAll(3, 7);
console.log(priceUS); // 277.97$

//  Booleans
const plane = 'Airbus A230neo';
console.log(plane.includes('A230')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startWidth('Bi')); // false

if (plane.startWidth('Air') && plane.endWidth('neo')) console.log('true'); //'true'

//  Practice exercise
const checkBaggage = function (itmes) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife')) {
    console.log('You are not allowed');
  } else {
    console.log('You are allowed');
  }
};
checkBaggage('I have a laptop, some food and knife');
checkBaggage('I have mobile and camera');
*/

// ------------- Working with strings part 1 ----------------------------------------------------------
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('8132'[2]); //3

console.log(airline.length); //16
console.log(plane.length); // 3

console.log(airline.indexOf('A')); // 1
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); //-1

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1)); //Portugal

console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky;');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

// ------------- Maps fundamentals && iterations ----------------------------------------------------------
/*
// 1)fundamentals
const rest = new Map();
rest.set('name', 'egypt');
rest
  .set('name', 'egypt')
  .set('categories', ['egyptian', 'pizza'])
  .set(false, 'we are closed')
  .set(true, 'we are open')
  .set('close', 23)
  .set('open', 11);
console.log(rest.get('name'));
console.log(rest.get(true));
const time = 8;
console.log(res.get(time > rest.get('open') && time < rest.get('close')));
console.log(res.has('name'));
rest.delete(true);
console.log(rest.size);
// rest.clear()

//  2)iterations
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Js'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//  converting object to map
const openingHoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(openingHoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// ------------- Sets{a unique data structure} ----------------------------------------------------------
/*
const teams = new Set([
  'alahly',
  'alzamalek',
  'alzamalek',
  'enpy',
  'alzamalek',
]);
console.log(teams); //{'alahly', 'alzamalek',  'enpy',}
console.log(teams.size); // 3
console.log(teams.has('enpy')); // true
console.log(teams.has('haras')); // false
teams.add('haras');
console.log(teams); //{'alahly', 'alzamalek',  'enpy','haras'}
console.log(teams.delete('alzamalek'));
// teams.clear()
const teamsArr = ['alahly', 'alzamalek', 'alzamalek', 'enpy', 'alzamalek'];
const uniqueTeams = [...new Set(teamsArr)];
console.log(uniqueTeams);
['alahly', 'alzamalek', 'enpy', 'haras'];
*/

// ------------- Object looping ----------------------------------------------------------

/*
// 1) looping through keys
const keys = Object.keys(restaurant.openingHours);
console.log(keys); // ['thu', 'fri', 'sat']
for (const key of keys) {
  console.log(key);
}

// 2) looping through value
const values = Object.values(restaurant.openingHours);
console.log(values); // {open: 12,close: 22,}, {open: 11,close: 23,},{open: 0, // Open 24 hours close: 24,},
for (const value of values) {
  console.log(value);
}

// 3) looping through index and value

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

// ------------- optional chaining(?.)-----------------------------------------------------------
/*
console.log(restaurant.openingHours.fri?.open); // if exist then print open value if not then return undefined
console.log(restaurant.openingHours?.sat?.open ?? 'closed'); // if openingHours  and sat exits and open not null or undefined then print open value otherwise print undefined
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(1, 1) ?? 'Method not exist ');
console.log(restaurant.unkownFunc?.(1, 1) ?? 'Method not exist ');

// array
const users = [{ name: 'ali', email: 'ali@gmail,com' }];
console.log(users[0]?.name ?? 'name not exist');
*/

// -------------Enhance object literal-----------------------------------------------------------

/*
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1) if the property name
  // openingHours:openingHours // instead off this
  openingHours, //we use this

  // 2) now you can remove function keyword from object methods
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  // 2) now you can remove function keyword from object methods
  orderDeliver({ starterIndex = 1, mainIndex = 0, time = '1:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]}
       and ${this.mainMenu[mainIndex]} 
       will be delivered to ${address} at ${time}`
    );
  },
  // 2) now you can remove function keyword from object methods
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // 2) now you can remove function keyword from object methods
  orderPizza(mainIngredient, ...other) {
    console.log(mainIngredient); //mushrooms
    console.log(other); //['onion', 'oliver', 'spinach']
  },
};

//  3) you can compute the object keys
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const days = {
  [arr[0]]: 'mon',
  [arr[1]]: 'tue',
  [arr[2]]: 'wed',
  [arr[3]]: 'thu',
  [arr[5]]: 'fri',
  [arr[6]]: 'sat',
  [arr[7]]: 'sun',
};
*/
// ------------- for of loop-----------------------------------------------------------
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// - looping through data
for (const item of menu) console.log(item);
// - looping through data/index
for (const [index, item] of menu.entries())
  console.log(`${index + 1}: ${item}`);
*/

// ------------- logical assignment operators -----------------------------------------------------------

/*const rest1 = { name: 'cairo', numGuests: 30 };
const rest2 = { name: 'alex', owner: 'ali' };

// - Or assignment operator
rest1.numGuests = rest1.numGuests || 10; // { name: 'cairo', numGuests: 30 };
rest2.numGuests = rest2.numGuests || 10; // { name: 'alex', owner: 'ali',numGuests:10 };
//  shorthand way
rest1.numGuests ||= 10; // { name: 'cairo', numGuests: 30 };
rest2.numGuests ||= 10; // { name: 'alex', owner: 'ali',numGuests:10 };

// - Nullish assignment operator (null or undefined)
const rest1 = { name: 'cairo', numGuests: 0 };
const rest2 = { name: 'alex', owner: 'ali' };
rest1.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

//  - And assignment operator
rest1.owner &&= 'anonymous'; //{ name: 'cairo', numGuests: 0,owner:undefined };
rest2.owner &&= 'anonymous'; //{ name: 'alex', owner: 'anonymous' };
*/

// ------------- nullish coalescing operator (??) -----------------------------------------------------------
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10 , how to log out the 0 value?? by using nullish coalescing operator (??)

// - Nullish: null && undefined (Not 0 or '')
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2); //0
*/

// ------------- && and || -----------------------------------------------------------
/*
// 1)......... Or................
console.log(4 || 'ali'); // 4
console.log('' || 'ali'); // ali
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'ali' || 23); // ali

const guests = restaurant.numGuests || 10;
console.log(guests); //10
restaurant.numGuests = 20;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //20

// 2) ...........AND....................
console.log(0 && 'ali'); // 0
console.log(9 && 'ali'); // ali
console.log('ali' && 23 && undefined && 0 && ''); // undefined

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// ------------- rest parameter && pattern -----------------------------------------------------------
/*
//1) spread
// - Spread as its in the right side
const arr = [1, 2, ...[3, 4]];

// - Rest as its in the left side.
const [a, b, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a, b, other); //1 2 [3,4,5,6,7,8]
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // pizza Risotto ['Pasta','Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //fri: {open: 11,close: 23,},sat: {open: 0, // Open 24 hoursclose: 24,}

// 2) functions
const add = function (...num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
};
add(1, 2);
add(3, 4, 5);

const y = [2, 45, 2];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'oliver', 'spinach');
*/
// ------------- spread Operator-----------------------------------------------------------
/*
const arr = [1, 2, 3];
const newArr = [0, ...arr];
console.log(newArr); //[0,1,2,3]

console.log(...newArr); //0,1,2,3

const newMenu = [...restaurant.mainMenu, 'banana'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto','banana']

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//  iterables are: array, string, maps, sets but not objects
const str = 'mahmoud';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(...str);

const ingredients = [
  prompt("let's make pastas ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//  Objects
const newRestaurant = { ...restaurant, founder: 'egypt' };
console.log(newRestaurant);

// copy object
const copy = { ...restaurant };
copy.name = 'hola';
console.log(copy.name);
console.log(restaurant.name);
*/
// -------------array destructuring-----------------------------------------------------------
/*
const arr = [2, 3, 4];
// array destructuring
const [x, y, z] = arr;
console.log(x, y, z); //: 2 3 4
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainIndex] = restaurant.order(2, 0);
console.log(starter, mainIndex);

const nested = [2, 5, [7, 3]];
// const [xx, ,yx]= nested
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 2] = [8, 9];
console.log(p, q, r);
*/

// -------------object destructuring-----------------------------------------------------------
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restNames, openingHours: hours, categories: tags } = restaurant;
console.log(restNames, hours, tags);

const { menu = [], starterMenu: starter = {} } = restaurant;
console.log(menu, starter);

//  how variables mutating
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // you have to use () if you want to mutate variables
console.log(a, b);

//  Nested Objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

restaurant.orderDelivery({
  time: '10:10',
  address: 'menofia',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'menofia',
  starterIndex: 2,
});
*/
