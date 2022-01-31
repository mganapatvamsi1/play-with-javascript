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
*/
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
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1)); // [ 'b', 'c', 'd', 'e' ] => slice() will return a new array.
// when we call the slice() without any arguments it would create a shallow copy of any array,
// just like using spread operator like below.
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]

//SPLICE
console.log(`arr before: ${arr}`);
console.log(`splice: ${arr.splice(2)}`); // splice would mutate the original array.
console.log(`arr after: ${arr}`); // here we only have the left over elements as
// splice() deletes the elements from the original array based on the call it does.
// If we want to delete some element/s from the original array we can use splice():
console.log(arr.splice(-1)); // [ 'b' ]
console.log(arr); // [ 'a' ]
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(1, 2)); // ['b', 'c']
//Note: in splice() the 2nd parameter is the number of elements we want to delete.
console.log(arr2); // ['a', 'd', 'e']

//REVERSE
let arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3.reverse()); // ['e', 'd', 'c', 'b', 'a'] // reverse() also mutates the original array
console.log(arr3); // ['e', 'd', 'c', 'b', 'a'] // the original array is reversed too as reverse() has mutated it.

//CONCAT
let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = ['f', 'g', 'h', 'i', 'j'];
const letters = array1.concat(array2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...array1, ...array2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
// join() all the elements into a string,separated by the specified separator string.

// at()
console.log(array1); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(array1[0]); // a
// console.log(array1.at(0)); // a => (commenting this as 2022 operators are not supported by node runner as of time of running this)
// getting the last element of the array
console.log(array1[array1.length - 1]); // e
console.log(array1.slice(-1)[0]); // e
console.log(array1.at(-1)); // e
// at() also works on strings
console.log('ManiG'.at(-1)); // G
console.log('ManiG'.at(0)); // M

// Looping Arrays: forEach
