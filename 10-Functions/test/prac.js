'use strict';

// promise example === creating createAudioFileAsync()
// function successCallback(result) {
//     console.log("success: ", result);
// }
// function failureCallback(reslt) {
//     console.log("failure: ", reslt);
// }
// createAudioFileAsync(audioSettings, successCallback, failureCallback);

// // if createAudioFileAsync() was rewritten to return a 
// // promise, you would attach your callbacks to return it.
// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
// //Note: callback article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);

// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => console.log('Got the final result: ' + finalResult))
// .catch(failureCallback);
//Important: Always return results, otherwise callbacks 
// won't catch the result of a previous promise

//sample promise
// const compute = function(num, callback) {
//   setTimeout(() => callback(num * 2), 3000);
// }
// compute(5, function(result) {
//   console.log(result);
// });
// compute(5, result => console.log(result)); // doing the same as above using Arrow Functions
// console.log("called already.!");

const compute2 = function(num) {
  if (num < 1000) return Promise.resolve(num * 2);
  return new Promise(function(resolve, reject) {

  });
}
console.log(compute2(1001));

// testing spread operators: 
const testArr = [7, 11, 9, 13];
console.log('naive way: ',Math.max(testArr[0], testArr[1], testArr[2], testArr[3]));
console.log('using spread operator: ',Math.max(...testArr));

const greet = function(name1, name2) {
  console.log(`Hello ${name1} and ${name2}.`);
}
greet('Jack', 'Jill');
const testNames = ['Tom', 'Jerry'];
// greet(testNames); // this doesn't work
greet(...testNames); // using spread operator

const names1 = ['Raj', 'Aryan', 'Malhotra'];
const names2 = ['Teddy', 'Perry'];
const namesNew = console.log(['Charles', ...names1, 'Jimmy', ...names2, 'Scott']);

const mani = Object.freeze({name: 'ManiG', age: 30});
// here the spread operator is used to spread the object 
const maniOld = {...mani , age: mani.age - 1}; 
console.log('current obj: ', mani);
console.log('old obj: ', maniOld);

//default parameters: 
// we can either pass just a default value or a default value with expression
// hre the expr can use the paramters that are present towards its left 
const greet2 = function(name, msg = 'Howdy${name.length}') { // passing default parameters
  console.log(`${msg} ${name}`);
}
console.log(greet2('Raj'));
console.log(greet2('Aryan', 'Hi'));

const names3 = ['Raj', 'Aryan', 'Malhotra', 'Teddy', 'Perry', 'Charles'];
// traditional for loop (Imperative)
for (let i = 0; i < names3.length; i++) console.log(`traditional way: ${i}---${names3[i]}`);
console.log('---------------------');
// for of loop (this doesn't give index)
for (const name of names3) console.log(`enhanced way: ${name}---`);
console.log('---------------------');
// for of with index
for (const entry of names3.entries()) console.log(entry);
console.log('---------------------');
// for of more generic way
for (const entry of names3.entries()) console.log(`${entry[0]}---${entry[1]}`);
console.log('---------------------');
for (const entry of names3.entries()) {
  const i = entry[0];
  const name = entry[1];
  console.log(`${i}---${name}`);
} 
console.log('---------------------');
// using de-structuring
for (const [key, value] of names3.entries()) { // Here we are iterating and de-structuring at the same time
  console.log(`${key}---${value}`);
}
console.log('---------------------');
const getPerson = function() {
  return ['Raj', 'Aryan', 'Malhotra', 'Charles'];
} 
const [first, second, third, fourth] = getPerson();
console.log(`${first}-${second}-${third}-${fourth}`);
console.log('---------------------');

// default Parameters
const bookings = [];
const createBooking = function(flightNo, numOfPassengers=2, price=100.00) {
  const booking = {
    flightNo, 
    numOfPassengers, 
    price
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking('22338');
createBooking('ABCDEFG', 10, 250.00);