// -------------  272. Exporting and Importing in ES6 Modules----------------------------------------------------------
/*
//  Importing module
// import './shoppingCart.js';
// console.log('Importing file');
// console.log(cost); //cost is not defined, --> we have to export it first to use it externally
// import { cost, addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

import {
  cost,
  addToCart,
  totalPrice as tPrice,
  totalQuantity as tQuantity,
} from './shoppingCart.js';

console.log('Importing file');
console.log(cost); //now working fine

addToCart('banana', 22);
// console.log(totalPrice, totalQuantity);
console.log(tPrice, tQuantity);
// import * as file from  './shoppingCart.js';
// file.addToCart('banana',22)

//  Import the default value
// import file from '././shoppingCart.js';
// file('apple', 100);

*/

// ------------- 273. Top-Level await (ES2022)  ----------------------------------------------------------
/*
// console.log('start ');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(await res.json());
// console.log('end');
import * as file from './shoppingCart.js';
async function getLastPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const resJSON = await res.json();
  console.log({ title: resJSON.at(-1).title, text: resJSON.at(-1).body });
}
// getLastPost().then(console.log);
console.log('start');
const lastPost = await getLastPost();
console.log(lastPost);
console.log('end');
*/
// ------------- 274. The Module Pattern  ----------------------------------------------------------
/*
const encapsulatedData = (function () {
  const cart = [];
  const shippingCart = 100;
  const tPrice = 222;
  const tQuantity = 333;

  function addToCart(product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} && ${product}  added to Cart`);
  }
  function orderStock(product, quantity) {
    console.log(`${quantity} && ${product} order from supplier`);
  }

  return { addToCart, cart, tPrice, tQuantity };
})();

encapsulatedData.addToCart('fruits', 200);
encapsulatedData.addToCart('meat', 10);
console.log(encapsulatedData.cart);
console.log(encapsulatedData.shippingCart); // not defined
console.log(encapsulatedData);
*/
// ------------- 275. CommonJS Modules  ----------------------------------------------------------
/*
// It working only in nodejs Enviroment

// - Export
export.func = function(){}
// - Import
const {func} = require('....')
*/
// ------------- 276. A Brief Introduction to the Command Line  ----------------------------------------------------------
// /*
//  Command line commands
// ls--> listing current folder content
//  cd, cd ../ , cd ../..  --> changing current folder or file
//  mkdir --> creating new folder
//  edit --> creating new file
//  del ---> removing files
//  mv file1 folder --> moving files
// rmdir --> to remove a directory

//*/
// ------------- 277. Introduction to NPM----------------------------------------------------------
// /*
// NPM--> Node Package Manager
//*/
// -------------  ----------------------------------------------------------
/*
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'apple', quantity: 10 },
  ],
  user: { loggedIn: true },
};
const clone = Object.assign({}, state);
const clone2 = cloneDeep(state);
clone.user.loggedIn = false;
console.log(clone);
console.log(clone2);
*/

// ------------- 278. Bundling With Parcel and NPM Scripts ----------------------------------------------------------
// /*
//  npm/npx parcel index.html --> to bundle all js scripts with single command line
import cloneDeep from 'lodash-es'; // we can do this now thanks to parcel

//  keep the state as its
if (module.hot) {
  module.hot.accept();
}
//  npm i package -g --> installing a package globally
//*/
// ------------- 279. Configuring Babel and Polyfilling ----------------------------------------------------------
// /*
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const ali = new Person('Ali');

console.log('Ali' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log);

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

import 'regenerator-runtime/runtime';
