'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
// LECTURES
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1)); // [ 'b', 'c', 'd', 'e' ] => slice() will return a new array.
// when we call the slice() without any arguments it would create a shallow copy of any array,
// just like using spread operator like below.
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log('-----END OF SLICE-----')

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
console.log('-----END OF SPLICE-----')

//REVERSE
let arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3.reverse()); // ['e', 'd', 'c', 'b', 'a'] // reverse() also mutates the original array
console.log(arr3); // ['e', 'd', 'c', 'b', 'a'] // the original array is reversed too as reverse() has mutated it.
console.log('-----END OF REVERSE-----')

//CONCAT (Doesn't mutate original array)
let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = ['f', 'g', 'h', 'i', 'j'];
const letters = array1.concat(array2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...array1, ...array2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log('-----END OF CONCAT-----')

//JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
// join() method joins all the elements into a string,separated by the specified separator string.
console.log('-----END OF JOIN-----')

// at()
// console.log(array1); // [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(array1[0]); // a
// console.log(array1.at(0)); // a => (commenting this as 2022 operators are not supported by node runner as of time of running this)
// // getting the last element of the array
// console.log(array1[array1.length - 1]); // e
// console.log(array1.slice(-1)[0]); // e
// console.log(array1.at(-1)); // e
// // at() also works on strings
// console.log('ManiG'.at(-1)); // G
// console.log('ManiG'.at(0)); // M
// console.log('ManiG'.at(1)); // a
console.log('-----END OF AT-----');

// Looping Arrays: forEach
const testArr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 6, 7, 8, 9, 10, -6, -7, -8, -9, -10];
// for (const num of testArr) {
//   if (num > 0) console.log(`positive number: ${num}`);
//   else console.log(`negative number: ${num}`);
// }

const movementsArr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const num of movementsArr) {
  // accessing counter in the forOf loop
for (const [i, num] of movementsArr.entries()) {
  if (num > 0) console.log(`At index ${i}: deposited ${num}`);
  else console.log(`At index ${i}: withdrew ${num}`);
}

//IMP NOTE: forEach is a higher order function which requires 
// a callback function in order to tell it what to do
// testArr.forEach(ele => console.log(ele));
// testArr.forEach(console.log);
// testArr.filter(ele => ele % 2 == 0).forEach(ele => console.log(ele));
// here the callback func is receiving the 'num' as the argument in each iteration
console.log(`using forEach loop`)
// here  in forEach callback function syntax: 1st parameter is: current element, 
// 2nd parameter is index, 3rd and last parameter is the complete array.
movementsArr.forEach(function(num, index, completeArr) {
    if (num > 0) console.log(`At index ${index}: deposited ${num}`);
    else console.log(`At index ${index}: withdrew ${num}`);
    if (index === completeArr.length - 1) console.log(`complete arr:: `, completeArr)
})
//IMP NOTE: the 'continue' and 'break' statements don't work in forEach 
// at all where as we can use them in 'for of loop' i.e, 'forEach' loop always
// loops around a complete array.
const currencyMap = [
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]
const currencies = new Map(currencyMap);
currencies.forEach(function(entry, index, allEntries) {
  console.log(`entry ${index}: ${entry}`);
  // if(index === currencyMap.entries().length - 1) console.log(`all entries: `, allEntries)
  if(index === 'GBP') console.log(`all entries: `, allEntries)
})

const currenciesSet = ['USD', 'INR', 'GBP', 'VNR', 'EUR', 'EUR', 'INR', 'USD']
const currenciesUnique = new Set(currenciesSet)
// console.log(`unique values: ${currenciesUnique}`); //this is only returning an object but not the elements of set ?? 
// console.log(currenciesUnique); // this is working
// currenciesUnique.forEach(function(value, key, fullSet) {
currenciesUnique.forEach(function(value, _, fullSet) {
  // console.log(`${key}: ${value}`);
  console.log(`${value}: ${value}`);
  // console.log(`completeSet:: `, fullSet);
})
// IMP NOTE: the 2nd parameter i.e, 'key' for a 'set' doesn't make any sense as sets don't have keys.

// converting a for loop to a forEach loop 
const items = ['item1', 'item2', 'item3'];
const copyItems = [];
const copyItemsNew = [];
console.log(`initial state of copyItems:: `, copyItems)
console.log(`initial state of copyItemsNew:: `, copyItemsNew)
//previous way:
for (let i = 0; i < items.length; i++) copyItems.push(items[i]);
console.log(`updated state of copyItems:: `, copyItems)

// current way:
items.forEach((ele) => copyItemsNew.push(ele))
console.log(`updated state of copyItemsNew using forEach:: `, copyItemsNew)

console.log('-----END OF FOREACH-----');
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data
const account1 = {
  owner: 'Manikanta Ganapathiraju',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Tuyen Le',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Raj Aryan',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Rahul Malhotra',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function(movements) {
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, index) {
//     const transactionType = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${transactionType}">${index + 1} ${transactionType}</div>
//       <div class="movements__value">${mov}€</div>
//     </div>
//     `;
    
//     // need to attach this 'html' into the current container::
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//     // containerMovements.insertAdjacentHTML('beforeend', html);
//   });

// }
// displayMovements(account1.movements)
// console.log(containerMovements.innerHTML)

// data transformations (map, filter and reduce)
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Note: map() methods returns a brand new arr. 
const newArr1 = testArr.map(ele => ele * 2);
const newArr2 = testArr
                    .filter(ele => ele % 2 !== 0)
                    .map(ele => ele * 3);
console.log('newArr1:: ', newArr1);
console.log('newArr2:: ', newArr2);
const reduceFuncTest = testArr
                          .filter(ele => ele % 2 === 0)
                          .reduce((prev, next) => (prev + next), 0)
console.log('arrReduceTest:: ', reduceFuncTest);

const movementsArr = [200, 450, -400, 3000, -650, -130, 70, 1300];
const currToUsd = 1.5;
// const movementsUSD = movementsArr.map(function(mov) {
//   return mov * currToUsd;
// });
const movementsUSD = movementsArr.map(mov => mov * currToUsd);
console.log('movementsUSD:: ', movementsUSD);

const movementsUSDForEach = [];
for (const mov of movementsArr) movementsUSDForEach.push(mov * currToUsd);
console.log('movementsUSDForEach:: ', movementsUSDForEach);


// const movementDescriptions = movementsArr.map((mov, index, arr) => {
//   if (mov > 0) return `mov ${index + 1}: deposited ${mov}`;
//   else return `mov ${index + 1}: withdrew ${Math.abs(mov)}`;
// });
// const movementDescriptions = movementsArr.map((mov, index, arr) => {
// return `mov ${index + 1}:You've ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// });
const movementDescriptions = movementsArr.map((mov, index, arr) => `mov ${index + 1}:You've ${mov > 0 ? 'deposited' 
: 'withdrew'} ${Math.abs(mov)}`);
console.log('movementDescriptions:: ', movementDescriptions);