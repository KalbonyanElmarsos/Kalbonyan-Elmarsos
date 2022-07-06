// Exporting module
console.log('Exporting file / executed first');

// Blocking code
console.log('fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');

console.log('end fetching users');
export const cost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} && ${product}  added to Cart`);
}

const totalPrice = 100;
const totalQuantity = 11;
export { totalPrice, totalQuantity };

// Default exporting used to export single value
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} && ${product}  added to Cart`);
}
