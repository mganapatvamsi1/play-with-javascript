'use strict';
// default parameters
const bookingArr = [];
const createBooking = function(flightNo = 'XYZ', numPassengers = 1, price = 100) { //ES6 way of doing
    //ES5 way of doing
    // numPassengers = numPassengers || 1;
    // price = price || 100;
    const bookingObjUsingEnhancedObjLiteral = {
        flightNo,
        numPassengers,
        price
    };
    console.log(bookingObjUsingEnhancedObjLiteral);
    bookingArr.push(bookingObjUsingEnhancedObjLiteral);
}
createBooking('LH123', 5);
createBooking( undefined,5); // this is to take the default value and skip the 'flightNo' of 'flightNo' parameter


// How passing arguments works: Value vs Reference
const flight = 'LH234';
const maniObj = {
    name: 'Manikanta Ganapathiraju',
    passport: 9866603050
};
const checkIn = function(flightNo, passenger) {
    flightNo = 'LH999';
    // passenger.name = 'Mr.' + passenger.name;
    passenger.name = passenger.name.padStart(passenger.name.length+Number(3), 'Mr.');
    // if (passenger.passport === 9866603050) alert('Checked In.!');
    // else alert('Wrong Passport!');
}
checkIn(flight, maniObj);
console.log(flight); //'LH234'
console.log(maniObj);

//The below is same as copying the reference
//i.e, here we are only copying the reference to the memory heap, but they both point to the same object in memory.
const flightNum = flight;
const passenger = maniObj;
//Imp Note: In summary, passing a primitive type to a function is same as creating a copy just outside the function.

const  newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}
console.log(newPassport(maniObj)); //{name: 'Mr.Manikanta Ganapathiraju', passport: 9866603050}
console.log(checkIn(flight, maniObj)); //{name: 'Mr.Manikanta Ganapathiraju', passport: 9866603050}

//In programming there are 2 things: passing by value and passing by reference.
// Javascript does not have pass by reference, but it only has pass by value.
// i.e, we pass a reference to a function, but we do not pass by reference.


// First class and higher order functions:
/*
 JS treats functions as first class citizens. This means that functions are simply values.
 Functions are just another 'type' of object. We can also pass functions as arguments to OTHER functions.
 We can also return functions FROM functions. Also, we can call methods on functions.
 Higher Order Function: this is a function that receives another function as an argument, or a higher order function is
 something that returns a new function, or both. This is only possible because of first-class functions.
 */


// Functions Accepting Callback Functions (Higher Order Functions)
// func1: replaces all spaces in a word
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase(); // returns any string with an empty string.
}
const upperFirstWord = function(str) {
    //1 way of doing:
    // return str[0].toUpperCase() + str.slice(1); //TODO: this is not complete and need some changes to be made.

    //2nd way of doing:
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// higher-order function
const transformer = function(str, func) {
    console.log(`Original String" ${str}`);
    console.log(`Transformed String: ${func(str)}`);
    console.log(`Transformed By: ${func.name}`);
}
transformer('javascript is the best programming language!', upperFirstWord);
transformer('python is the coolest language ever!', oneWord);

//Note: JavaScript uses callbacks all the time.
const high5 = () => console.log('✋🏻');
document.body.addEventListener('click', high5);
//here 'high5' is the callback function and 'addEventListener' is the in-built higher order function.

['raj', 'aryan', 'malhotra', 'mani'].forEach(high5);
// here 'forEach' is the in-built higher order function and 'high5' is the higher order function.

//Imp Note: Callback functions allow us to create abstraction.
// Abstraction means we hide the detail of some code implementation because we don't need all that detail
// and this allows us to think about problems at a higher, more abstract level so that's why it's called an abstraction.


// Functions returning other functions
// using function expression syntax
const greetFuncExpr = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
// using arrow function syntax
const greetFuncArrw = greeting => name => console.log(`${greeting} ${name}`);

// Old and first way of calling 'greet' function.
const greetHowdy = greetFuncExpr('Howdy'); // now as the result of 'greetHowdy' function is another function
// we need to call it to return the result.
greetHowdy('ManiG');
greetHowdy('RajAryan');

// Easier and second way of calling the above 'greet' function.
greetFuncArrw('Howdy')('ManiG');
greetFuncArrw('Howdy')('RajAryan');


// 'call' and 'apply' methods:




