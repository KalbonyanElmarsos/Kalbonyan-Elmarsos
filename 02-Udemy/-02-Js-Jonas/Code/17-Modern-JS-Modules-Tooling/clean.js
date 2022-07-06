'strict mode';
// Hint: Object.freeze allowing only first level freezing not nested

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.ali = 'ali'; //clean.js:20 Uncaught TypeError: Cannot add property ali, object is not extensible
// console.log(spendingLimits);/{jonas: 1500,matilda: 100}

const getLimit = (limits, user) => limits?.[user] ?? 0;
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const copyUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;
  const limit = getLimit(limits, user);
  // if (value <= limit) {
  //   // budget.push({ value: -value, description: description, user: user });
  //   budget.push({ value: -value, description, user: copyUser });
  // }

  return value <= limit
    ? [...state, { value: -value, description, user: copyUser }]
    : state;
};

// addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Going to movies 🍿', 'Matilda');
// addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
const newBudget = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget);
const newBudget2 = addExpense(
  newBudget,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

console.log(budget);

// const checkExpenses = function (state, limits) {
//   return state.map(function (item) {
//     return item.value < -getLimit(limits, item.user)
//       ? { ...item, flag: 'limit' }
//       : item;
//   });

// PURE FUNCTION NOT MUTATE ANY STATE
const checkExpenses = (state, limits) =>
  state.map(item =>
    item.value < -getLimit(limits, item.user)
      ? { ...item, flag: 'limit' }
      : item
  );
// for (const entry of budget) {
//   // let lim;
//   // if (spendingLimits[entry.user]) {
//   //   lim = spendingLimits[entry.user];
//   // } else {
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits?.[entry.user] ?? 0;
//   // const limit = getLimit(entry.user);
//   if (entry.value < -getLimit(limitsentry.user)) {
//     entry.flag = 'limit';
//   }
// }
// };
const newBudget3 = checkExpenses(newBudget2, spendingLimits);

console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(item => item.value <= -bigLimit)
    .map(item => item.description.slice(-2))
    .join('/');
  return bigExpenses;
  // let output = '';
  // for (const entry of budget) {
  //   //   if (el.value <= -bigLimit) {
  //   //     output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   //   }
  //   // }

  //   if (entry.value <= -bigLimit) {
  //     output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
const expenses = logBigExpenses(newBudget3, 200);
console.log(expenses);
