'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  userName: 'js',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  userName: 'jd',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  userName: 'stw',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  userName: 'ss',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// =====================================================================
// ================= PROJECT: "Bankist" App ====================================================
// =====================================================================
const formatDate = (date, locale) => {
  const nw = new Date();
  const calcPassedDays = (d1, d2) =>
    Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));

  let passedDays = calcPassedDays(date, nw);
  if (passedDays <= 1) return 'Today';
  if (passedDays === 1) return 'Yesterday';
  if (passedDays < 7) return `${passedDays} days ago`;
  if (passedDays % 7 === 0) return `${passedDays % 7} w ago`;

  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // return `${day}-${month}-${year}`;
  return Intl.DateTimeFormat(locale).format(date);
};
const formatCurrency = (value, locale, currency) => {
  const options = { style: 'currency', currency: currency };

  return new Intl.NumberFormat(locale, options).format(value);
};
const timer = (max = 120) => {
  const tick = () => {
    const minutes = String(Math.trunc(max / 60)).padStart(2, '0');
    const seconds = String(max % 60).padStart(2, '0');

    if (max === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    //  - Decrease timer
    max--;

    labelTimer.textContent = ` ${minutes}:${seconds}`;
  };
  tick();
  const timerAddress = setInterval(tick, 1000);
  return timerAddress;
};

// -147. Creating DOM Elements
function displayMovements(account, sort = false) {
  console.log(account.movements);
  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  containerMovements.innerHTML = '';

  movs.forEach(function (mov, index, movementsArr) {
    const moveType = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.movementsDates[index]);
    // const calcPassedDays = (d1, d2) =>
    //   Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const day = `${date.getDate()}`.padStart(2, 0);
    const displayDate = formatDate(date, currentAccount.locale);

    // 1)
    // const options = { style: 'currency', currency: account.currency };
    // console.log(account.currency);
    // const movWithCurrency = new Intl.NumberFormat(
    //   account.locale,
    //   options
    // ).format(mov);

    // 2)
    const movWithCurrency = formatCurrency(
      mov,
      account.locale,
      account.currency
    );
    let htmlElement = `
    <div class="movements__row">
      <div class="movements__type movements__type--${moveType}">${
      index + 1
    } deposit</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${movWithCurrency}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
}
// displayMovements(account1.movements);

// - 153. The reduce Method
function calcBalanceAndDisplay(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${account.balance.toFixed(2)}`;
  labelBalance.textContent = formatCurrency(
    account.balance,
    account.local,
    account.currency
  );
}
// calcBalanceAndDisplay(account1.movements);
// - 151. Computing Usernames
function createUserName(accounts) {
  accounts.forEach(
    account =>
      (account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map(word => word.at(0))
        .join(''))
  );
}
// createUserName(accounts);
// console.log(accounts);

//  - 155. The Magic of Chaining Methods
function calcAndDisplaySummary(account) {
  const deposit = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, current) => acc + current, 0);

  // labelSumIn.textContent = deposit.toFixed(2);
  labelSumIn.textContent = formatCurrency(
    deposit,
    account.locale,
    account.currency
  );

  const withdrawal = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, current) => acc + current, 0);

  // labelSumOut.textContent = Math.abs(withdrawal).toFixed(2);
  labelSumOut.textContent = formatCurrency(
    withdrawal,
    account.locale,
    account.currency
  );

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)

    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  // labelSumInterest.textContent = interest.toFixed(2);
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
}
// calcAndDisplaySummary(account1.movements);

// - 158. Implementing Login-----------------------
let currentAccount, clock;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value
  );
  if (!currentAccount) return alert('wrong user try again');
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';

    //  show UI
    containerApp.style.opacity = 100;
    let firstName = currentAccount.owner.split(' ')[0];
    labelWelcome.textContent = `Welcome baaaack ${firstName}`;

    inputLoginPin.blur();

    //  add current date
    // 178. Internationalizing Dates (Intl)--------
    const nw = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);('en-US');

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(nw);

    // const nowDate = new Date();
    // const year = nowDate.getFullYear();
    // const month = `${nowDate.getMonth() + 1}`.padStart(2, 0);
    // const day = `${nowDate.getDate()}`.padStart(2, 0);
    // const hours = `${nowDate.getHours()}`.padStart(2, 0);
    // const minutes = `${nowDate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

    //  update UI
    updateUI();

    //  setimer
    clock && clearInterval(clock);
    clock = timer();
  } else {
    alert('wrong PIN try again');
  }
  // console.log(currentAccount);
  // console.log('LOGIN');
});
// - 159. Implementing Transfers-----------------------
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  let targetUserName = inputTransferTo.value;
  let amount = inputTransferAmount.value;
  let targetAccount = accounts.find(
    account => account.userName === targetUserName
  );
  // - clear UI
  inputTransferTo.value = inputTransferAmount.value = '';

  // check transfer validation
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    targetAccount &&
    targetAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    targetAccount.movements.push(amount);

    //  add transfer time to the 2 accounts
    currentAccount.movementsDates.push(new Date().toISOString());
    targetAccount.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI();

    //  Reset timer
    clearInterval(clock);
    clock = timer();
  } else {
    alert('this is invalid transfer.... try again');
  }
});
function updateUI() {
  // - display movements
  displayMovements(currentAccount);

  //  - calcBalanceAndDisplay
  calcBalanceAndDisplay(currentAccount);

  // - calcAndDisplaySummary
  calcAndDisplaySummary(currentAccount);
}
// - 160. The findIndex Method ------------------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //  check if user is correct
  console.log(inputCloseUsername.value);
  console.log(inputClosePin.value);
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    let accountIndex = accounts.findIndex(
      account => account.userName === inputCloseUsername.value
    );

    //  remove account
    //  hint: splice mutate the original array, but slice does not as it return new array
    accounts.splice(accountIndex, 1);

    // hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  } else {
    alert('wrong user... plz try again');
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// - 161. some and every -----------------------
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let loan = +inputLoanAmount.value;

  if (loan > 0 && currentAccount.movements.some(mov => mov > loan * 0.1)) {
    setTimeout(function () {
      // add loan as a deposit
      currentAccount.movements.push(loan);
      currentAccount.movementsDates.push(new Date().toISOString());
      // update UI
      updateUI(currentAccount);

      //  Reset timer
      clearInterval(clock);
      clock = timer();
    }, 3000);
  } else {
    alert('This loan not allowed');
  }
  inputLoanAmount.value = '';
});
let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
});

labelBalance.addEventListener('click', function () {
  console.log('label');
  [...document.querySelectorAll('.movements__row')].forEach(
    (row, index, arr) => {
      console.log(arr);
      if (index % 2 === 0) row.style.backgroundColor = 'orangered';

      if (index % 2 !== 0) row.style.backgroundColor = 'red';
    }
  );
});
// */
// ------------- 157. The find Method ----------------------------------------------------------
// /*

// */
// ------------- More Closure Examples----------------------------------------------------------
// /*
// =====================================================================
// ================= PROJECT: "Bankist" App ====================================================
// =====================================================================

// ------------- 142. Simple Array Methods ----------------------------------------------------------
/*

let arr = [1, 2, 3, 4, 5, 6, , 7, 8];
//  - slice not mutate(change) the original array
console.log(arr.slice(2)); //[3,4,5,6,,7,8]]
console.log(arr.slice(2, 5)); //[3,4,5]
console.log(arr.slice(-2)); // [7,8]
console.log(arr.slice()); //[1, 2, 3, 4, 5, 6, , 7, 8];
console.log(arr.slice(2, -3)); //[3,4,5]

//  - slice  mutate(change) the original array
arr.splice(-1);
console.log(arr); //[ [1, 2, 3, 4, 5, 6, , 7]
arr.splice(2, 4);
console.log(arr); //[1,2,6,7]

// -  reverse mutate the original array

arr = [1, 2, 3, 4, 5, 6, , 7, 8];
console.log(arr.reverse()); // [8, 7, 6, 5, 4, 3, 2, 1]

// - contactinat
let arr1 = ['a', 'b'],
  arr2 = ['c', 'd'];
console.log(arr1.concat(arr2)); // ['a', 'b', 'c', 'd']

// - join --> return a string
let all = arr1.concat(arr2);
console.log(all.join('-')); // a-b-c-d
*/

// ------------- 143. The new at Method ----------------------------------------------------------
/*
let arr = ['A', 'B', 'C'];

// - getting the last element in the array
console.log(arr[arr.length - 1]); //C
console.log(arr.slice(-1)); //C
console.log(arr.at(-1)); //C

console.log('ali'.at(-1)); // i
console.log('ali'.at(1)); // l
*/

// ------------- 144. Looping Arrays: forEach ----------------------------------------------------------
/*
// - for of loop
for (const [index, el] of movements) {
  if (el > 0) {
    console.log(`${index + 1}: you deposited ${el}`);
  } else {
    console.log(`${index + 1}: you withdrew ${Math.abs(el)}`);
  }
}

//  - forEach loop

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
});
*/

// ------------- 145. forEach With Maps and Sets----------------------------------------------------------
/*
// - using forEach with map
currencies.forEach(function (value, index, map) {
  console.log(`${index}: ${value}`);
});
// - using forEach with set
const set = new Set(['USD', 'USD', 'GBP', 'EUR', 'GBP']);
set.forEach(function (value, index, set) {
  console.log(`${index}: ${value}`); // her index equal the value as set not have any values index
});
*/

// ------------- 150. The map Method ----------------------------------------------------------
/*
const eurToUsd = 1.1;
const usd = movements.map(function (mov, index, movs) {
  return mov * eurToUsd;
});
// const usd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(usd);
let usd1 = [];

// for (const mov of movements) {
//   usd1.push(mov * eurToUsd);
// }
// console.log(usd1);

let desc = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `${i + 1}: you deposited ${mov}`;
  } else {
    return `${i + 1}: you withdrew ${Math.abs(mov)}`;
  }
});
console.log(desc);
*/

// ------------- 152. The filter Method ----------------------------------------------------------
/*
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);
const depositsFor = [];
for (const mov of movements) {
  mov > 0 && depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
*/

// ------------- 153. The reduce Method ----------------------------------------------------------
/*
// const balance = movements.reduce(function (
//   accumilator,
//   current,
//   index,
//   originalArr
// ) {
//   return accumilator + current;
// },
// 0);
const balance = movements.reduce(
  (accumilator, current, index, originalArr) => accumilator + current
);

// let balanceFor = 0;
// for (const value of movements) {
//   balanceFor += value;
// }
// console.log(balanceFor);
console.log(balance);

// - reduce also used to calc max-min value
let maxMov = movements.reduce(
  (acc, current) => (acc > current ? acc : current),
  movements.at(0)
);
console.log(maxMov);
*/

// ------------- 155. The Magic of Chaining Methods ----------------------------------------------------------
/*
const eurToUsd = 1.1;
console.log(movements);
//  PIPELINE
const deposit = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(deposit);
*/
// ------------- 157. The find Method ----------------------------------------------------------
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log(account);
*/
// ------------- 161. some and every ----------------------------------------------------------
/*
console.log(movements);
console.log(movements.includes(100));

// - some() Boolean --> return true if only one element  pass the condition
console.log(movements.some(mov => mov === 100));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// - every() Boolean  --> return true if all elements  passed the condition
console.log(movements.every(mov => mov === 100));
const anyDeposits1 = movements.every(mov => mov > 0);
console.log(anyDeposits1); 

//  separate callBack
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// ------------- 162. flat and flatMap ----------------------------------------------------------
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //[1,2,3,4,5,6,7,8]

const arrTwolevels = [[[1, 2, 3], [4, 5, 6], 7], 8];
console.log(arr.flat(2)); //[1,2,3,4,5,6,7,8]

// flat----------
//  calc total balance for all movements

// 1) create one array containing all movements
const accountMovements = accounts.map(account => account.movements);
console.log(accountMovements);

// 2) flat the nested arrays to one array
const accountMovementsFlat = accountMovements.flat();
console.log(accountMovementsFlat);

// 3) calc the balance
const overAllBalance = accountMovementsFlat.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

//  chaining  the array methods in oline
const overAllBalance2 = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov => acc + mov), 0);
console.log(overAllBalance2);

//  flatMap--only one level deep only----
const overAllBalance3 = accounts
  .map(account => account.movements)
  .flatMap()
  .reduce((acc, mov => acc + mov), 0);
console.log(overAllBalance3);
*/

// ------------- 163. Sorting Arrays ----------------------------------------------------------
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);

//  return < 0, currentValue, nextValue
// return > 0,  nextValue,currentValue
// ------ascending order-----
movements.sort((currentValue, nextValue) => {
  // if (currentValue > nextValue) return 1;  // if  true then keep order
  if (nextValue > currentValue) return -1; //  if true then switch order
});
console.log(movements);
//  enhanced version
// movements.sort((currentValue, nextValue) => currentValue - nextValue);

// ------descending order-----
movements.sort((currentValue, nextValue) => {
  if (currentValue > nextValue) return -1; // if  true then  switch order
  // if (nextValue > currentValue) return 1; //  if true then keep order
});
console.log(movements);
//  enhanced version
// movements.sort((currentValue, nextValue) => nextValue - currentValue);
*/

// -------------164. More Ways of Creating and Filling Arrays----------------------------------------------------------
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array((1, 2, 3, 4, 5, 6, 7, 8)));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);

x.fill(1, 2, 3);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// - Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (current, index) => index + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movUI = Array.from(document.querySelectorAll('.movements__value'), el =>
    Number(el.textContent.replace('€', ''))
  );
  console.log(movUI);

  // another way to convert to array
  const movUI2 = [...document.querySelectorAll('.movements__value')];
});
*/
// ------------- 166. Array Methods Practice ----------------------------------------------------------
/*
//  1)
const totalBalance = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov > 0)
  .reduce((sum, current) => sum + current, 0);
console.log(totalBalance);

// 2)
// const numDeposit1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov >= 1000);

const numDeposit1000 = accounts
  .flatMap(account => account.movements)
  // .reduce((sum, current) => (current > 1000 ? sum + 1 : sum), 0);
  .reduce((sum, current) => (current > 1000 ? ++sum : sum), 0);
console.log(numDeposit1000);

//  ++
let a = 10;
console.log(a++); // 10
console.log(++a); // 11

//  3)
const { deposits, withdrawal } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, current) => {
      // current > 0 ? (sums.deposits += current) : (sums.withdrawal += current);
      sums[current > 0 ? 'deposits' : 'withdrawal'] += current;
      return sums;
    },
    { deposits: 0, withdrawal: 0 }
  );
// console.log(deposits, withdrawal);

// 4)

const capitalizeTitle = function (title) {
  const capitalize = word => word.at(0).toUpperCase() + word.slice(1);
  const exceptions = ['a', 'an', 'in', 'on', 'and', 'with', 'or', 'but'];
  const capitalized = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(capitalized);
  // return capitalized;
};

console.log(capitalizeTitle('this is a Nice title'));
console.log(capitalizeTitle('this is a Nice title but not too long'));
console.log(capitalizeTitle('and here is another title with an EXAMPLE'));
*/

// ------------- 170. Converting and Checking Numbers ----------------------------------------------------------
/*
console.log(23 === 23.0); //true

console.log(0.1 + 0.2); //0.300000000004
console.log(0.1 + 0.3 === 0.3); //false

// - conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23

// - parsing
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e30', 10)); // NAN
console.log(Number.parseFloat('2.5rem')); // 2.5

// - check if value is NAN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); // false;
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(20 / 0)); //false

// - check if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(20 / 0)); //false

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.0)); //true
console.log(Number.isInteger(20 / 0)); //false
*/
// ------------- 171. Math and Rounding  ----------------------------------------------------------
/*
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(2, 10)); //10
console.log(Math.max(3, 10, '23')); //23
console.log(Math.max(3, 10, '23px')); //NaN

console.log(Math.min(2, 9)); // 2
console.log(Math.PI * Number.parseFloat('10px') ** 2);
31.1592;

// - random

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  // Math.trunc(Math.random() * (max - min)) + min; // trunc working for positive
  Math.floor(Math.random() * (max - min)) + min; // floor working for negative and positive  working for positive
console.log(randomInt(90, 100));

//  - rounding
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); // -24

// - Rounding decimals
console.log((2.7).toFixed(0)); //0
console.log((2.7).toFixed(3)); //2.700
console.log((2.363).toFixed(2)); //2.35
console.log(+(2.363).toFixed(2)); // 2.4
*/

// ------------- 172. The Remainder Operator ----------------------------------------------------------
/*
console.log(5 % 2); //1
console.log(5 / 2); // 2.5

console.log(8 % 3); // 2
console.log(8 / 3); //2.3

console.log(6 % 2); //0
console.log(6 / 2); //3

console.log(7 % 2); //1
console.log(7 / 2); // 3.3

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(5)); //false
*/

// ------------- 173. Numeric Separators ----------------------------------------------------------
/*
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); // 230
*/

// ------------- 174. Working with BigInt ----------------------------------------------------------
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 35 + 1);
console.log(2 ** 35 + 2);
console.log(2 ** 35 + 4);
console.log(2 ** 35 + 7);

console.log(4807389758397983567857698576875896n);
console.log(BigInt(4807389));

// - Operations
console.log(20000n + 20000n); // 40000n
console.log(872897489758943893765398495n * 475787567624652346545n);

const huge = 8845783748574878597487;
const num = 23;
console.log(huge * num); // not allowed
console.log(huge * BigInt(num));

console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

console.log(huge + 'very big');
console.log(Math.sqrt(16n)); //not allowed

// - Divisions
console.log(11n / 3n);
console.log(10 / 3);
*/

// ------------- 175. Creating Dates ----------------------------------------------------------
/*
const now = new Date();
console.log(now); //Thu Apr 28 2022 10:06:39 GMT+0200 (Eastern European Standard Time)

console.log(new Date('Aug 02 2020 18:05:42')); //Sun Aug 02 2020 18:05:42 GMT+0200 (Eastern European Standard Time)
console.log(new Date('December 24,  2015')); //Thu Dec 24 2015 00:00:00 GMT+0200 (Eastern European Standard Time)
console.log(new Date(account1.movements[0])); //Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

console.log(new Date(0)); //Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

console.log(new Date(4 * 24 * 60 * 60 * 1000)); //Mon Jan 05 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

// - Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T13:23:00.000Z
console.log(future.getTime()); //2142249780000

console.log(new Date(2142249780000)); //Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
console.log(Date.now()); //1651133928889

future.setFullYear(2077);
console.log(future); //Fri Nov 19 2077 15:23:00 GMT+0200 (Eastern European Standard Time)
*/

// ------------- 177. Operations With Dates ----------------------------------------------------------
/*
const future = new Date(2034, 1, 18, 17, 23);
console.log(+future);

const calcPassedDays = (d1, d2) =>
  Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
const result = calcPassedDays(new Date(2033, 3, 4), new Date(2033, 3, 14));
console.log(result); //10
*/
// ------------- 179. Internationalizing Numbers (Intl) ----------------------------------------------------------
/*
const num = 366556756.23;

const options = {
  style: 'percent',
  // style: 'currency',
  // style: 'unit',
  unit: 'celsius',
  // unit: 'mile-per-hour',
  // useGrouping: false,
  useGrouping: true,
};

console.log('US   ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Syria:    ', new Intl.NumberFormat('en-US', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

// ------------- 180. Timers: setTimeout and setInterval  ----------------------------------------------------------
// /*

const names = ['mahmoud', 'ali'];
const time = setTimeout(name => console.log(`Heloo ${name}`), 3000, ...names);
console.log('waiting.....');

if (names.includes('ali')) clearTimeout(time);

// setInterval(() => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// */
// ------------- 170. Converting and Checking Numbers ----------------------------------------------------------
// /*

// */
// ------------- 170. Converting and Checking Numbers ----------------------------------------------------------
// /*

// */
// ------------- 170. Converting and Checking Numbers ----------------------------------------------------------
// /*

// */
