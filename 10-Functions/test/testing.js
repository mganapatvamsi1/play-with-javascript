'use strict';
// Rediscovering JS by V.S.

const sam = Object.freeze({ name: 'Sam', age: 2, facebook: 'sam@facebook.com', instagram: 'sam@instagram.com', twitter: 'sam@twitter.com' });
const newSam = {...sam, age: sam.age + 1};
console.log(sam)
console.log(newSam)

const greet = function(name, msg = 'Hi') {
    console.log(`${msg} ${name}`);
}
greet('Jerry');
greet('Tom', 'Howdy');

let names = ['ram', 'robert', 'rahim', 'romeo', 'salim'];
// Type- 1: imperative
for (let i = 0; i < names.length; i++) {
    console.log(`${i}--${names[i]}`)
}

for (const name of names) { 
    console.log(name); // problem is we don't get index with this 
}

for (const nameEntry of names.entries()) {
    console.log(nameEntry); // this nicely gives index and the value at that index in an array
}

for (const entry of names.entries()) {
    console.log(`${entry[0]}---${entry[1]}`) // this  works but code looks smelly
}

for (const entry of names.entries()) {
    const i = entry[0];
    const name = entry[1];
    console.log(`${i}--${name}`);
}

// to write the above code efficiently we can use 'destructuring'
console.log(`-destructuring-`);
for (const entry of names.entries()) {
    const [i, name] = entry; // de-structuring an array
    console.log(`${i}---${name}`);
}
// making complete use of destructuring (enhanced for-loop)
// here we are destructuring an array while parallely iterating over an array
for (const [i, name] of names.entries()) {
    console.log(`${i}-----${name}`);
}
console.log(`-destructuring-`);

//TO BE CONTINUED::: (stopped video at 1h 2ms)
//arrow functions 
// const greetNew = function(name) {
//     console.log(`Hello ${name}`);
// }
const greetNew = name => console.log(`Hello ${name}`);
greetNew('ManiG');

// Lexical Scoping:::
/* An unbounded variable is bounded to a definition in the defining scope,
you can eye ball the code and find the variable to bind to. */

// Dynamic Scoping:::
/* An unbounded variable is bounded to a variable passed in by the caller of the function. */

const stuff = 4;
// this.something = 15;
const foo = function(num) {
    console.log(num);
    console.log(stuff) // because of lexical scoping
    // console.log(this.something); // undefined because of dynamic scoping
}
foo(10);
// IMP NOTE: In a regular function, all variables are lexical scoped except
// 'this' and 'arguments' which are dynamically scoped whereas 
// in arrow functions all variables are lexically scoped including 'this' and 'arguments' too
// i.e, it makes no sense to write a method of a class using arrow functions because
// a method of a class requires dynamic binding of 'this' so if we use arrow function for a 
// method of a class it would be a disaster as we would only have lexical binding using arrow functions.
// i.e, its not an im-place replacement when we compare arrow and normal functions
foo.call({ something: 42 }, 7);
console.log('------------------')
foo.call({ something: 95 }, 7);

// const newName = 'mani';
// const newEmail = 'raj.aryan@gmail.com';
// const newAge = 30;
const name = 'mani';
const email = 'raj.aryan@gmail.com';
const age = 30;
// object literal syntax
// const samNew = { name: name, email: email, age: age }
const samNew = { name, email, age }
console.log(samNew);

//De-Structuring
//1. Array De-Structuring
//2. Object De-Structuring

//1.
const getPerson = function() {
    return ['John', 'Quicy', 'Adams'];
}
const person = getPerson();
const first = person[0];
const second = person[1];
const last = person[2];
console.log(`${first} ${second} ${last}`);
const [one, two, three] = person;
console.log(`${one} ${two} ${three}`);
const [first1, middle1, last1] = getPerson();
console.log(`${first1} ${middle1} ${last1}`);
const [first2,, last2] = getPerson();
console.log(`${first2} ${last2}`);
const [first3, ...allElse] = getPerson();
console.log(`${first3} ${allElse}`);

//2.
const getPersonObj = function() {
    return {
        firstObj: 'raj',
        middleObj: 'aryan',
        lastObj: 'malhotra',
    }
};
const personObj = getPersonObj();
const firstName = personObj.firstObj;
const middleName = personObj.middleObj;
const lastName = personObj.lastObj;
console.log(`${firstName} ${middleName} ${lastName}`);
/// {property: localVariableToBeStoredAs} == {property: value}
const { 
    firstObj: firstNameObj,
    middleObj: middleNameObj,
    lastObj: lastNameObj
} = getPersonObj();
console.log(`${firstNameObj} ${middleNameObj} ${lastNameObj}`);
const { 
    firstObj,
    middleObj,
    lastObj
} = getPersonObj();
console.log(`${firstObj} ${middleObj} ${lastObj}`);

const personObjNew = { 
    name: 'Aarvi',
    age: 2,
    address: { street: '403 Exeter St' },
    mailing: { street: '622 N 35th St' }
}
const printIt = function(person) {
    // console.log(`${person.name} is ${person.age} years old.`);
    
    // const name = person.name;
    // const age = person.age;
    // console.log(`${name} is ${age} years old.`);

    const {name, age} = person; // using destructuring
    console.log(`${name} is ${age} years old.`);
}

// using destructuring in the above by passing it in the parameter of the function
const printIt2 = function({ name, age, address: {street}, mailing: {street:mailingStreet} }) {
    console.log(`${name} is ${age} years old.`);
    console.log(`${street}`);
    console.log(`${mailingStreet}`);
}
printIt(personObjNew)
printIt2(personObjNew)

class Car {
    constructor(year, make) {
        this.yearMade = year;
        this.makeOfCar = make;
        this.miles = 0;
        this.storedColor = 'Green';
    }

    // method declaration
    drive(distance) {
        this.miles += distance;
    }

    // method
    color() {return 'Mat-Black';} 

    // getter property
    get colorProp() {
        return this.storedColor;
    } 

    // setter property
    set colorProp(value) {
        this.storedColor = value;
    } 

}
const car = new Car(2018, 'Hyundai');
console.log(car);
car.drive(20);
console.log(car);
console.log(car.color()); // Mat-Black
console.log(car.colorProp); // Green
console.log(car.colorProp = 'test'); // test

//Important Note: In JS gets are deeper but sets are shallow.




const max = function(...numbers) {
    //Imperative
    // let large = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > large) large = numbers[i];
    // }
    // return large;

    //Functional
    return numbers.reduce((large, ele) => ele > large ? ele : large);
}

console.log('max1: ',max(1, 7));
console.log('max2: ',max(3, 22, 2));
console.log('max3: ',max(1, 31, 8, 4));
