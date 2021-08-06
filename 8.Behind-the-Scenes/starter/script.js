'use strict';

// Here calcAge is defined in the global scope.
function calcAge(birthYear) {
    const age = 2022 - birthYear;
    function printAge() {
        const output = `You are ${age} years old, born in ${birthYear}.`;
        // console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Manikanta';
calcAge(1992);

//Note: Only variables in the inner scope have access to the variables in the outer scope.
//  We cannot access the variables of the child scope from the outer scope.
//return age; // Uncaught reference error: age is not defined  --> We will get this error.
//printAge(); // Uncaught reference error: printAge is not defined  --> We will get this error.
// cosnt and let are block variables whereas var variables donot care about block scopes as all.

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    // console.log('All products are deleted.!');
}

if (!undefined) {
    // console.log('try me');
}
// "this" keyword doesNOT point to the function itself, and also NOT it its variable environment.


// Primitives are like numbers, strings, booleans etc.
let age = 30;
let oldAge = age;
age = 31;
console.log("age: ", age);
console.log("old age: ", oldAge);

const me = {
    name: 'ManiG',
    age: 29,
}
console.log("My intial values: ", me);
const girlFriend = me;
// console.log("Initial values of GF: ", girlFriend);
girlFriend.name = 'TuyenLe';
girlFriend.age = 24;
console.log("GF details: ", girlFriend);
console.log('My current values: ', me);

// Primitives --> Number, String, Boolean, Undefined, Null, Symbol, BigInt
//Note: Primitive types are stored in call stack i.e., primitives are stored in
//  the execution context in which they are declared.(Call stack is where execution context is run.)
// Objects --> Object Literal, Arrays, Functions, Many more.. (Also called as reference types)
// Note: Objects are stored in the heap.
// Note: value at a certain memory address is immutable.

