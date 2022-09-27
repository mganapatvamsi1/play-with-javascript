"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
// LECTURES
// const currencies = new Map([
// ['USD', 'United States dollar'],
// ['EUR', 'Euro'],
// ['GBP', 'Pound sterling'],
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
// if (num > 0) console.log(`positive number: ${num}`);
// else console.log(`negative number: ${num}`);
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
// here in forEach callback function syntax: 1st parameter is: current element,
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
owner: "Manikanta Ganapathiraju", movements: [200, 450, -400, 3000, -650, -130, 70, 1300], interestRate: 1.2, // %
pin: 1111
};

const account2 = {
owner: "Tuyen Le", movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], interestRate: 1.5, pin: 2222
};

const account3 = {
owner: "Raj Aryan", movements: [200, -200, 340, -300, -20, 50, 400, -460], interestRate: 0.7, pin: 3333
};

const account4 = {
owner: "Rahul Malhotra", movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444
};

const accounts = [account1, account2, account3, account4];

/*
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function(movements) {
containerMovements.innerHTML = "";

movements.forEach(function(mov, index) {
const transactionType = mov > 0 ? "deposit" : "withdrawal";

const html = `
<div class="movements__row">
<div class="movements__type movements__type--${transactionType}">${index + 1} ${transactionType}</div>
<div class="movements__value">${mov}€</div>
</div>
`;

// need to attach this 'html' into the current container::
containerMovements.insertAdjacentHTML("afterbegin", html);
// containerMovements.insertAdjacentHTML('beforeend', html);
});

};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const createUsernames = function(accts) {
accts.forEach(function(acct) {
acct.username = acct.owner
.toLowerCase()
.split(" ")
.map(ownerName => ownerName[0])
.join("");
});
};
createUsernames(accounts);

const calcDisplayBalance = function(movements) {
const balance = movements.reduce((acc, mov) => acc + mov, 0);
labelBalance.textContent = `${balance} USD`;
};
calcDisplayBalance(account1.movements);
*/

// maximum value


// data transformations (map, filter and reduce)
console.log(`--------START DATA TRANSFORMATIONS-------------`);
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Note: map() methods returns a brand new arr.
const newArr1 = testArr.map(ele => ele * 2);
const newArr2 = testArr
.filter(ele => ele % 2 !== 0)
.map(ele => ele * 3);
console.log("newArr1:: ", newArr1);
console.log("newArr2:: ", newArr2);
const reduceFuncTest = testArr
.filter(ele => ele % 2 === 0)
.reduce((prev, next) => (prev + next), 0);
console.log("arrReduceTest:: ", reduceFuncTest);

const movementsArr = [200, 450, -400, 3000, -650, -130, 70, 1300];
const currToUsd = 1.5;
// const movementsUSD = movementsArr.map(function(mov) {
// return mov * currToUsd;
// });
const movementsUSD = movementsArr.map(mov => mov * currToUsd);
console.log("movementsUSD:: ", movementsUSD);

const movementsUSDForEach = [];
for (const mov of movementsArr) movementsUSDForEach.push(mov * currToUsd);
console.log("movementsUSDForEach:: ", movementsUSDForEach);

// const movementDescriptions = movementsArr.map((mov, index, arr) => {
// if (mov > 0) return `mov ${index + 1}: deposited ${mov}`;
// else return `mov ${index + 1}: withdrew ${Math.abs(mov)}`;
// });
// const movementDescriptions = movementsArr.map((mov, index, arr) => {
// return `mov ${index + 1}:You've ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// });
console.log("-------------ARR MAP START-------------");
const movementDescriptions = movementsArr.map((mov, index, arr) => `mov ${index + 1}:You've ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`);
console.log("movementDescriptions:: ", movementDescriptions);
// note: map function is used to transform an array
const initialArr = [5, 1, 3, 2, 6];
console.log(`max using spread operator: `, Math.max(...initialArr));
console.log(`min using spread operator: `, Math.min(...initialArr));
const transformedDoubleArr = initialArr.map(arr => arr * 2);
const transformedTripleArr = initialArr.map(arr => arr * 3);
console.log(initialArr, transformedDoubleArr, transformedTripleArr);
// 2nd way of doing the same --> using functional paradigms.
function double(num) {
return num * 2;
}
function triple(num) {
return num * 3;
}
function binary(num) {
return num.toString(2);
}
const output_double = initialArr.map(double);
const output_triple = initialArr.map(triple);
console.log(initialArr, output_double, output_triple);
//option1: find Sum/Average/Max using traditional for loop 
console.log(`option1: using traditional forLoop`);
let sumOverall = 0;
let maxInInitialEle = Number.MIN_VALUE;
let maxInInitialEle2 = initialArr[0];
for (let i = 0; i < initialArr.length; i++) {
  sumOverall += initialArr[i];
}
for (let i = 1; i < initialArr.length; i++) {
  if (initialArr[i] > maxInInitialEle2) maxInInitialEle2 = initialArr[i];
}
for (let i = 0; i < initialArr.length; i++) {
  if (initialArr[i] > maxInInitialEle) maxInInitialEle = initialArr[i];
}
console.log(sumOverall, sumOverall/initialArr.length);
console.log(maxInInitialEle2, maxInInitialEle);
//option2: find Sum/Average/Max using for-each loop 
console.log(`option2: using forEach`);
let sumOverallForEach = 0;
initialArr.forEach(ele => sumOverallForEach += ele);
console.log(sumOverallForEach, sumOverallForEach/initialArr.length);
let maxEleForEach = Number.MIN_VALUE;
initialArr.forEach(ele => {
  if (ele > maxEleForEach) maxEleForEach = ele;
});
let maxEleForEach2 = Number.MIN_VALUE;
initialArr.forEach(ele => (ele > maxEleForEach2) ? (maxEleForEach2 = ele) : (maxEleForEach2 = Number.MIN_VALUE));
console.log(`maxElement using forEach option2a:`, maxEleForEach);
console.log(`maxElement using forEach option2b:`, maxEleForEach2);
//option3: find Sum/Average/Max using array's reduce
console.log(`option3: using reduce`);
const overallSumReduce = initialArr.reduce((accu, ele) => (accu + ele), 0);
const averageReduce1 = initialArr.reduce((accu, ele) => (accu + ele), 0) / initialArr.length;
const averageReduce2 = initialArr.reduce((accu, ele, _, arrayObj) => (accu + (ele / arrayObj.length) ), 0);
//TODO: why is the "averageReduce2" not resulting into the same 3.4 ??
console.log(overallSumReduce, averageReduce1, averageReduce2); //17 3.4 3.3999999999999995
let maxEle = Number.MIN_VALUE;
const maxElementReduce = initialArr.reduce((accu, ele) => ( (ele > maxEle) ? 
(maxEle = ele) : (maxEle = Number.MIN_VALUE) ), 0);
console.log(`maxEle:: `, maxEle)
//Note: passing '0' means default case.
// const maxElementReduce2 = initialArr.reduce((accu, ele) => ( (accu > ele) ? accu: ele ), 0);
const maxElementReduce2 = initialArr.reduce((accu, ele) => ( (accu > ele) ? accu: ele ));
console.log(`maxElementReduce:: `, maxElementReduce)
console.log(`maxElementReduce2:: `, maxElementReduce2)

const min1 = function minValue(args) {
  // const min = args.reduce((acc, ele) => (acc < ele ? acc : ele), 0);
  const min = args.reduce((acc, ele) => (acc < ele ? acc : ele));
  return min;
}

const max1 = function maxValue(args) {
  const max = args.reduce((acc, ele) => (acc > ele ? acc : ele));;
  return max;
}
console.log(`min1a: `, min1([5, 1, 3, 2, 6])); // 1
console.log(`max1a: `, max1([5, 1, 3, 2, 6])); // 6
console.log(`min1b: `, min1([5, 1, 8, -2, 6])); // -2
console.log(`max1b: `, max1([5, 1, 8, -2, 6])); // 8

console.log("-------------ARR MAP END-------------");
//152. Filter method
console.log("-------------ARR FILTER START-------------");
// if the current element is > 0 then push it into a new arr. (using filter)
// const deposits = movementsArr.filter(function(mov) {return mov > 0});
const deposits = movementsArr.filter(mov => mov > 0);
console.log("movementsArr:: ", movementsArr);
console.log("deposits:: ", deposits);

// if the current element is > 0 then push it into a new arr. (using forEach)
const elementsGreaterThanZero = [];
for (const ele of movementsArr) if (ele > 0) elementsGreaterThanZero.push(ele);
console.log("elementsGreaterThanZero:: ", elementsGreaterThanZero);
// create an arr of withdrawals

// const arrOfWithdrawalsUsingFilter = movementsArr.filter(function(mov) {
// return mov <= 0;
// });
const arrOfWithdrawalsUsingFilter = movementsArr.filter(mov => mov <= 0);
console.log("arrOfWithdrawalsUsingFilter:: ", arrOfWithdrawalsUsingFilter);
const arrOfWithdrawalsUsingForEach = [];
for (const withdrawalEle of movementsArr) if (withdrawalEle <= 0) arrOfWithdrawalsUsingForEach.push(withdrawalEle);
console.log("arrOfWithdrawalsUsingForEach:: ", arrOfWithdrawalsUsingForEach);


console.log("-------------ARR FILTER END-------------");

//153. Reduce method
console.log("-------------ARR REDUCE START-------------");
// Note: we use `reduce method` to boil down all the elements in an array to one single value.
console.log(`movementsArr: ${movementsArr}`);
// adding up all the elements of movement arr => reduce
const sumOfMovsReduce1 = movementsArr.reduce(function(accumulator, current, i, arr) {
return accumulator + current;
}, 0);
const sumOfMovsReduce = movementsArr.reduce((accu, curr) => accu + curr, 0);
console.log(`sumOfMovsReduce1: ${sumOfMovsReduce1}`);
console.log(`sumOfMovsReduce2: ${sumOfMovsReduce}`);

// adding up all the elements of movement arr => forEach
let sumOfMovsForEach = 0; // this is the initial accumulator balance
for (const mov of movementsArr) sumOfMovsForEach += mov;
console.log(`sumOfMovsForEach: ${sumOfMovsForEach}`);

// find maximum value of movementsArr
let maxValueUsingForLoop = Number.MIN_VALUE;
for (const max of movementsArr) {
if (max > maxValueUsingForLoop) maxValueUsingForLoop = max;
}
console.log(`maxValue using forLoop:: ${maxValueUsingForLoop}`)
let maxValueUsingReduce = Number.MIN_VALUE;
const reduceMaxValue = movementsArr.reduce((accu, curr) => {
if (curr > maxValueUsingReduce) maxValueUsingReduce = curr;
}, 0)
console.log(`maxValue using reduce:: ${reduceMaxValue}`)

// calculate average age using arrays
let testArrUsingForLoop = [1, 2, 3, 4, 5];
let forLoopSum = 0;
//TODO: why is this not working using traditional for-loop ???
for (const ele of testArrUsingForLoop) {
forLoopSum += ele;
}
testArrUsingForLoop.forEach(ele => forLoopSum += ele);
let testArrUsingReduce = [1, 2, 3, 4, 5];
const averageArrReduce = testArrUsingReduce.reduce((accu, curr) => (accu + curr), 0) / testArrUsingReduce.length;
console.log(`avg. of first five ele's using arr reduce:: ${averageArrReduce}`);

console.log(`avg. of first five ele's using forEach loop::`, forLoopSum / testArrUsingForLoop.length);
console.log(`type of forLoopSum::`, typeof forLoopSum);
console.log(`average of first five elements using forLoop: ${forLoopSum}/${testArrUsingForLoop.length}`);
console.log(`average of first five elements using forLoop1: ${forLoopSum}`);
console.log(`average of first five elements using forLoop2: ${testArrUsingForLoop.length}`);


console.log("-------------ARR REDUCE END-------------");


//154. coding challenge--2:
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to 
human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does 
the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are 
at least 18 years old)
3. Calculate the average human age of all adult dogs(you should already know from other challenges how
we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
*/

const dogAgeDataSet1 = [5,2,4,1,15,8,3];
const dogAgeDataSet2 = [16,6,10,5,6,1,4];
// we are given dog ages and we're trying to convert dog ages to human ages based on given use cases.

const refArr = [];
// convert this to a filter and map array function::
// for (let ele of dogAgeDataSet1) {
// //TODO: convert this to a ternary operator
// if (ele <= 2) {
// ele = 2 * ele;
// refArr.push(ele);
// } else {
// ele = 16 + ele * 4;
// refArr.push(ele);
// }
// }
dogAgeDataSet1.forEach(ele => {
//TODO: convert this to a ternary operator
if (ele <= 2) {
ele = 2 * ele;
refArr.push(ele);
} else {
ele = 16 + ele * 4;
refArr.push(ele);
}
});
console.log(`refArr is:`, refArr);
const filteredArr = refArr.filter(refEle => refEle >= 18);
// console.log(`filteredArr is: ${filteredArr}`)
console.log(`filteredArr is::`, filteredArr); // filteredArr is:: [36, 32, 76, 48, 28]
const averageAgesDataSet1 = filteredArr.reduce((accu, curr) => (accu + curr), 0) / filteredArr.length;
console.log(`averageAgesDataSet1 is::`, averageAgesDataSet1); // 44

//TODO:: why is this below func., giving error when we try to return the humanAges instead of printing it ??
const refArr_1b = function(ages) {
const humanAges = ages.map(ele => (ele <= 2 ? 2 * ele : 16 + ele * 4));
console.log(`refArr optionB is:`, humanAges);
const adultsAges = humanAges.filter(refEle => refEle >= 18);
console.log(`adultsAges optionB is:`, adultsAges);
// const averageAgesDataSet1b = adultsAges.reduce((accu, curr) => 
// (accu + curr), 0) / adultsAges.length;
const averageAgesDataSet1b = adultsAges.reduce((accu, curr, i, arr) => 
(accu + curr / arr.length), 0);
console.log(`averageAgesDataSet1b optionB is:`, averageAgesDataSet1b);
return averageAgesDataSet1b;
}
refArr_1b(dogAgeDataSet1); // 44
refArr_1b(dogAgeDataSet2); // 47.33

//155. Chaining array methods:-

const refArr_1b_chaining = function(ages) {
const averageAges_chaining = ages
.map(ele => (ele <= 2 ? 2 * ele : 16 + ele * 4))
.filter(refEle => refEle >= 18)
.reduce((accu, age, _, arr) => (accu + (age / arr.length) ), 0);
console.log(`averageAgesDataSet1b_chaining is:`, averageAges_chaining);
return averageAges_chaining;
}
console.log(refArr_1b_chaining(dogAgeDataSet1), refArr_1b_chaining(dogAgeDataSet2)); // 44 47.333333333333336

const flatMapTest1 = [1, 2, [3], [4, 5], 6, []];
const normalMap = flatMapTest1.map(num => num);
const flattenedMap = flatMapTest1.flatMap(num => num);
console.log(normalMap); // [ 1, 2, [ 3 ], [ 4, 5 ], 6, [] ]
console.log(flattenedMap); // [ 1, 2, 3, 4, 5, 6 ]]

//Note: flatMap() method returns a new array formed by applying a given callback 
// function to each element of the array, and then flattening the result by one level.

movementsArr
      .filter(movement => movement > 0);

const movementsArrNew = [200, 450, -400, 3000, [-650, -130, 70], 1300];

const flattened = movementsArrNew.flatMap(move => move);
console.log(`flattened:: `, flattened);
const mapOutput = movementsArrNew.map(move => move);
console.log(`mapOutput:: `, mapOutput);
const flattenedReplica = mapOutput.flat(1);
console.log(`flattenedReplica:: `, flattenedReplica);


