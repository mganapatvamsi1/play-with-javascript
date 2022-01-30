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

const compute2 = function (num) {
  if (num < 1000) return Promise.resolve(num * 2);
  return new Promise(function (resolve, reject) {});
};
console.log(compute2(1001));

// testing spread operators:
const testArr = [7, 11, 9, 13];
console.log(
  'naive way: ',
  Math.max(testArr[0], testArr[1], testArr[2], testArr[3])
);
console.log('using spread operator: ', Math.max(...testArr));

const greet = function (name1, name2) {
  console.log(`Hello ${name1} and ${name2}.`);
};
greet('Jack', 'Jill');
const testNames = ['Tom', 'Jerry'];
// greet(testNames); // this doesn't work
greet(...testNames); // using spread operator

const names1 = ['Raj', 'Aryan', 'Malhotra'];
const names2 = ['Teddy', 'Perry'];
const namesNew = console.log([
  'Charles',
  ...names1,
  'Jimmy',
  ...names2,
  'Scott',
]);

const mani = Object.freeze({ name: 'ManiG', age: 30 });
// here the spread operator is used to spread the object
const maniOld = { ...mani, age: mani.age - 1 };
console.log('current obj: ', mani);
console.log('old obj: ', maniOld);

//default parameters:
// we can either pass just a default value or a default value with expression
// hre the expr can use the paramters that are present towards its left
const greet2 = function (name, msg = 'Howdy${name.length}') {
  // passing default parameters
  console.log(`${msg} ${name}`);
};
console.log(greet2('Raj'));
console.log(greet2('Aryan', 'Hi'));

const names3 = ['Raj', 'Aryan', 'Malhotra', 'Teddy', 'Perry', 'Charles'];
// traditional for loop (Imperative)
for (let i = 0; i < names3.length; i++)
  console.log(`traditional way: ${i}---${names3[i]}`);
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
for (const [key, value] of names3.entries()) {
  // Here we are iterating and de-structuring at the same time
  console.log(`${key}---${value}`);
}
console.log('---------------------');
const getPerson = function () {
  return ['Raj', 'Aryan', 'Malhotra', 'Charles'];
};
const [first, second, third, fourth] = getPerson();
console.log(`${first}-${second}-${third}-${fourth}`);
console.log('---------------------');

// default Parameters
const bookings = [];
const createBooking = function (flightNo, numOfPassengers = 2, price = 100.0) {
  const booking = {
    flightNo,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('22338');
createBooking('ABCDEFG', 10, 250.0);
createBooking('ABCDEFG', undefined, 250.0); // leaving the 2nd parameter as default

// Functions accepting callback functions
// const toLowerCase = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
const toLowerCase = str => str.replace(/ /g, ' ').toLowerCase();
const firstWordUpper = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// higher order function
const transform = function (str, func) {
  console.log(`Original string is: ${str}`);
  console.log(`Transformed string is: ${func(str)}`);
};
transform('Javascript is the best language', firstWordUpper);
transform('JAVA IS ONE of the MOST USED LANGUAGE', toLowerCase);
// functions calling other Functions
const greetNormal = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};
greetNormal('GoodNight')('Mani');
const greetArrow = greeting => name => console.log(`${greeting} ${name}!`);
greetArrow('GoodNight')('Mani');

// call and apply methods
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {
  // this is enhanced object syntax
  book(flightNo, name) {
    console.log(
      `${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNo}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNo}`,
      name,
    });
  },
};
lufthansa.book(217, 'ManiG');
lufthansa.book(195, 'TuyenLe');
console.log(lufthansa);

const genericBook = lufthansa.book;

const popoyes = {
  airline: 'popoyes',
  iataCode: 'PY',
  bookings: [],
};

const chickenWings = {
  airline: 'chickenWings',
  iataCode: 'CW',
  bookings: [],
};
// genericBook('2222', 'Raj Aryan'); (this doesn't work)
//note: here all the arguments after the first argument are arguments of the actual function.
// call()
genericBook.call(lufthansa, 2222, 'Raj');
console.log('lufthansa object through call:: ', lufthansa);

genericBook.call(popoyes, 5555, 'Aryan');
console.log('popoyes object through call:: ', popoyes);

genericBook.call(chickenWings, 7777, 'Malhotra');
console.log('chickenWings object through call:: ', chickenWings);

// apply() ==> apply does the same thing as call() but only difference is that
// call() takes in a list of arguments whereas apply() takes in an array.
const lufData = [2222, 'Raj'];
genericBook.apply(lufthansa, lufData);
console.log('lufthansa object through apply:: ', lufthansa);

const popoData = [5555, 'Raj'];
genericBook.apply(popoyes, popoData);
console.log('popoyes object through apply:: ', popoyes);

const chicData = [7777, 'Raj'];
genericBook.apply(chickenWings, chicData);
console.log('chickenWings object through apply:: ', chickenWings);

//but we can just use the call method instead of apply like below::
genericBook.call(chickenWings, ...chicData);
console.log('chickenWings object again through call:: ', chickenWings);

// bind() ==> just like the call(), bind() also allows us to manually set
// the 'this' keyword for any function call but the difference is that bind()
// doesn'r immediately call the function but instead it returns a new function
// where the 'this' keyword is bound.

// genericBook.call(lufthansa, 2222, 'Raj');
// genericBook.call(popoyes, 5555, 'Aryan');
// genericBook.call(chickenWings, 7777, 'Malhotra');
console.log('----------------');
const newLufthansa = genericBook.bind(lufthansa);
const newLufthansa2222 = genericBook.bind(lufthansa, 2222);
newLufthansa(2222, 'Raj');
newLufthansa2222('Raj');
console.log('----------------');
const newPopoyes = genericBook.bind(popoyes);
const newPopoyes5555 = genericBook.bind(popoyes, 5555);
newPopoyes(5555, 'Aryan');
newPopoyes5555('Aryan');
console.log('----------------');
const newChicWings = genericBook.bind(chickenWings);
const newChicWings7777 = genericBook.bind(chickenWings, 7777);
newChicWings(7777, 'Malhotra');
newChicWings7777('Malhotra');
console.log('----------------');

// bind() with eventListeners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// const addTax = (rate, value) => value + (value * rate)/100;
// console.log(addTax(10, 300));
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 300));

// to have a generic tax and use bind() to preset a fixed rate always for that:
const addGST = addTax.bind(null, 0.23); // here as the default can be any object so using it as null
// the above line is equivalent to the below:
const addGstArr = value => value + value * 0.33;
console.log('using bind: ', addGST(1000));
console.log('using arrow func: ', addGstArr(1000));

//IMP: for bind() its important to check the order of arguments i.e, if we want to preset the rate
// then it has to be the first argument in the function otherwise it cannot really work.

// doing the same as above by using a function calling other function::
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addGST3 = addTaxRate(0.33)(1000);
console.log('using func calling other func syntax: ', addGST3);

const addTaxRate2 = rate => value => value + value * rate;
const addGST4 = addTaxRate(0.33); // as this is the first one so this needs rate
const addGST5 = addGST4(1000); // this is the inner one and needs value
console.log('using func calling other func using arr func syntax: ', addGST5);

// coding challenge--1:
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. This data is stored
 in the starter 'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this: What is your favorite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For example, 
if the option is 3, increase the value at position 3 of the array by 1. 
Make sure to check if the input is a number and if the number makes sense 
(e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answerpoll" button.
3. Create a method 'displayResults' which displays the poll results.
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like 
"Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! 
So what should the this keyword look like in this situation?
Test data for bonus:
§ Data1:[5,2,3]
§ Data2:[1,5,3,9,6,1]
*/
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Kotlin', '3: Java'],
  answers: new Array(4).fill(0), // [0, 0, 0, 0]
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // console.log(answer);
    // Register or Update answer
    // if (answer < this.answers.length && typeof answer === "number") {
    //   this.answers[answer]++;
    //   console.log("valid case");
    //   console.log(this.answers);
    //   console.log(answer);
    // } else console.log("this is not a valid answer", this.answers, answer);

    // using short circuiting and operator
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  // display poll results
  displayResults(type = 'array') {
    // ES6 default parameter
    type === 'array' && console.log(this.answers);
    type === 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
    // we can use join() on a array like above line to form a string.
  },
};
// poll.registerNewAnswer();
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer);
// here this points to the current object on which this is getting called i.e, the
// querySelector object, that's why this would be undefined

document
  .querySelector('.poll')
  // here the bind() is making it point to the poll() object specifically
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// hre we need to use call method as we need a new this.. i.e, to manually set a new array.
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// As we can see if its only passing an object then we can apply both call and apply,
// however if we pass in a 'string' as a parameter then we cannot use apply but should only go with call() method
poll.displayResults.apply({ answers: [5, 2, 3] });
poll.displayResults.apply({ answers: [1, 5, 3, 9, 6, 1] });

// IIFE
(function () {
  console.log('this will only execute once');
})();
(() => console.log('this will also execute only 1 time'))();

// Closures:
// A closure is something we dont create manually but instead it happens
// automatically in certain situations and we just need to recognize those.
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};
// secureBooking()();
// secureBooking()();
// secureBooking()();
// secureBooking()();
// secureBooking()();
const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();
//IMP: Closure makes a function remember all the variables that exist
// at the birth place i.e, by the time its created.
//IMP: A function always has access to the variable environment (VE) of
// the execution context in which it was created, even after the execution context was gone.
//IMP: the scope chain is always preserved through the closure even
// when the scope has already destroyed.
//IMP: A closure gives a function access to  all the variables of its parent function,
// even after that parent function has returned. The function keeps a reference to its
// outer scope, which preserves the scope chain throughout the time.
//IMP: We don't have access to manually create closures, this is a JS feature that
// happens automatically. We can't even access closed over variables explicitly as
// a closure is not a tangible JS object.
console.dir(booker);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    //Here this callback function will wait for (wait * 1000)ms and then execute the steps under this.
    // also here this callback function is executed completely independently from the boardPassengers function but still
    // this callback function was able to use all the variables that were in the variable env. in which it was created.
    // Here the only way this callback func. has got access to the n and perGroup variables is because of closure.
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};
//IMP: the closure has priority over scope chain
const perGroup = 1000;
boardPassengers(240, 5);

// Coding Challenge-2:
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // document.querySelector('body').addEventListener('click', function () {
  //   header.style.color = 'blue';
  // });
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
      // the reason the above line's () (callback func) got access to 'header' variable is because of closure
})();
