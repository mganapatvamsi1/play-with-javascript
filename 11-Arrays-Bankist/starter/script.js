'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/*
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
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
*/

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// function iterate(item) { console.log(item); }
// arr.forEach(iterate);
// console.log(arr.slice(1));

// Async - await
// make a function to handle error
function handleError(fun) {
  return function (...params) {
    return fun(...params).catch(function (err) {
      console.error(`Oops`, err);
    });
  };
}
// re-writing the same above function using arrow functions
const handleError2 =
  fun =>
  (...params) =>
    // fun(...params).catch(err => console.error(`Oops again!`, err));
    fun(...params).catch(console.error);

const catchErrors1 = fn => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

//hot shot
const catchErrors2 = fn => (req, res, next) => fn(req, res, next).catch(next);

console.log(`person1: shows ticket`);
console.log(`person2: shows ticket`);

const promiseMyWifeBringTicket = new Promise((resolve, reject) => {
  setTimeout(() => resolve(`ticket`), 4000);
});

// promiseMyWifeBringTicket
//   .then(t => console.log(`person3: shows ${t}.`))
//   .catch(console.error);
// .catch(err => console.error(`oops error occurred: ${err}`));

const getPopCorn = promiseMyWifeBringTicket
  .then(t => {
    console.log(`------START OF POPCORN------`);
    console.log(`wife: I got the tickets`);
    console.log(`hus: we should walk in`);
    console.log(`wife: I am hungry so need some popcorn`);
    console.log(`------END OF POPCORN------`);
    return new Promise((resolve, reject) =>
      resolve(`we got ${t} and popcorn now.`)
    );
  })
  .catch(console.error);

const getButterAndDrink = getPopCorn
  .then(t => {
    console.log(`------START OF BUTTER AND DRINK------`);
    console.log(`hus: Popcorn's ready`);
    console.log(`hus: now shall we go inside`);
    console.log(`wife: I want some butter on my popcorn and a soda`);
    console.log(`------END OF BUTTER AND DRINK------`);
    return new Promise((resolve, reject) =>
      resolve(
        `ok wifu.. now we have ticket, popcorn with butter added and coke too.`
      )
    );
  })
  .catch(console.error);

getButterAndDrink.then(console.log).catch(console.error);

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);
