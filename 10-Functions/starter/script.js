'use strict';

/*
//127. Default Parameters
const bookings = [];
const createBooking = function(flightNo, numOfPassengers = 1, price = '100$') {
    // ES5
    // numOfPassengers = numOfPassengers || 1;
    // price = price || 200;

    // Enhanced object literal syntax
    const booking = {flightNo, numOfPassengers, price};
    // console.log(booking);
    bookings.push(booking);
};

createBooking('Airbus320');
createBooking('Boeing747', 2, 200);
createBooking('a123', undefined, 1000);


//128. How passing arguments works: Value vs Reference
const flight = 'SS234';
const manig = {
    name: 'Manikanta Ganapathiraju',
    passportNo: 'ABC12437F',
    adharNo: 2032437208
}

const checkIn = function(flightNo, passenger) {
    flightNo = 'ZZ765';
    passenger.name = 'Mr. ' + passenger.name;
    passenger.adharNo = 7148038648;
    if (passenger.passportNo === 'ABC12437F') {
        alert('Checked In.!');
    } else {
        alert('Wrong Passport.!');
    }
}
checkIn(flight, manig);
console.log(flight);
console.log(manig);
// Here this happened because flight is a primitive but for passenger its similar to this
// const passenger = manig (here these 2 are the same object in memory heap)
// Summary:(Imp) Passing a primitive value to a function is just same as creating a copy of the function so the value is simply copied.
// On the other hand when we pass an object to a function, it would be like whatever we would change in the object would be changed too.

const newPassport = function (person) {
    person.passportNo = Math.trunc(Math.random() * 100000);
};
newPassport(manig);
checkIn(flight, manig);
//JS doesn't have pass by reference, it only has pass by value.
//i.e, we pass reference to the function but we donot pass reference by a function


//129. First-Class and Higher Class Functions
//Note: JS treats functions as first-class citizens, i.e, functions are simply values and functions are just another "type" of objects in JS.
// We can store functions in variables or properties, we can pass functions as arguments to other functions, also we can return functions from other functions.
// i.e, functions are nothing but objects in JS
// Higher-Order Fns: A function(Fn) that receives another Fn as an argument, that returns a new Fn, or both. This is only possible because of first-class Fns.
// Callback function is something that will be called later by the higher-order function


//130. Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, ' ').toLowerCase();
}
const uppercaseFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
} 
//Higher order function
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
}
transformer('JavaScript is the best programming language.', uppercaseFirstWord); // here 'uppercaseFirstWord' is a callback function
transformer('Kotlin is a cool language.', oneWord); // here 'oneWord' is a callback function

//JS uses callbacks all the time
const giveHigh5 = function() {
    console.log('🙌🏼 ✋🏼');
}
document.body.addEventListener('click', giveHigh5); // here 'giveHigh5' is the callback function and 'addEventListener' is the higher-order function.

['Raj', 'Aryan', 'Malhotra'].forEach(giveHigh5);
// Callbacks allows us to do abstractions

//131. Fucntions Returning Functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};
// const greetUsingArrowFn = greeting => {return name => console.log(`${greeting} ${name}`);} 
const greetUsingArrowFn = greeting => name => console.log(`${greeting} ${name}`); // i.e, one arrow fn. returning another arrrow fn.

const greeterHey = greet('Hey'); // here this value 'greeterHey' is a function i.e, its essentially this function
//return function(name) {
//        console.log(`${greeting} ${name}`);
//    }

const greeterArrowFnHey = greetUsingArrowFn('Hey');
greeterHey('Raj');
greeterArrowFnHey('Raj');
greeterHey('Aryan');
greeterArrowFnHey('Aryan');
greeterHey('Malhotra');
greeterArrowFnHey('Malhotra');
greet('Hola')('ManiG');
greetUsingArrowFn('Hola')('ManiG');



//Practicing 'call' and 'apply' methods
// The fundamental difference is call() accepts an argument list, while apply() accepts a single array of arguments.
let myName = {
    firstname: 'Mani',
    lastname: 'Ganapathiraju',
    printFullname: function() {
        console.log(this.firstname+ ' '+this.lastname); // here this will have the reference of the parent context i.e, 'myName'
    }
}
myName.printFullname(); // Mani Ganapathiraju

let name2 = {
    firstname: 'Sachin',
    lastname: 'Tendulkar',
}
//Using call() method we can do function borrowing from other objects and use it with the data of some other objects

myName.printFullname.call(name2); // Sachin Tendulkar

let job1 = {
    schoolName: 'Drexel University',
    state: 'PA',
    phone: 1234567890,
    zip: '19104'
}
let job2 = {
    schoolName: 'Univ of Connecticut',
    state: 'CT',
    phone: 2032437208,
    zip: '06604'
}
let job3 = {
    schoolName: 'ABC Ltd',
    state: 'PA',
    phone: 7148038648,
    zip: '19104'
}

let getSchoolDetails = function() {
    console.log(this.schoolName+ ' '+this.state + ' '+ this.phone+ ' '+this.zip);
}
getSchoolDetails.call(job1);
getSchoolDetails.call(job2);
getSchoolDetails.call(job3);

let homeDetails = function(hometown, country) {
    console.log(this.firstname+ ' '+this.lastname+ ' is from ' +' '+hometown+' '+country);
}
homeDetails.call(myName, 'Ho Chi Minh City', 'Vietnam')
homeDetails.apply(myName, ['Ho Chi Minh City', 'Vietnam'])
homeDetails.call(name2,'Visakhapatnam', 'India')
homeDetails.apply(name2, ['Visakhapatnam', 'India'])

//IMP: Instead of passing the arguments individually with comma separated in a call() method, in apply() method we pass them in an array (list)
//IMP2: THe bind method is exactly the same as call() method but the only difference is that 
// bind method will keep a copy which can be invoked later.
let homeDetailsBinded = homeDetails.bind(myName, 'Ho Chi Minh City', 'Vietnam')
homeDetailsBinded();
console.log('---------------');


//132. The 'call' and 'apply' methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) { // here 'this' refers to the global object i.e, lufthansa obj. itself.
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}
lufthansa.book(1001, 'ManiG');
lufthansa.book(`007`, 'RajAryan');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const bookVariable = lufthansa.book;

// bookVariable(35, 'NovakDjokovic'); // Uncaught TypeError: Cannot read property 'airline' of undefined
// to avoid these kind of issues we can use call()
bookVariable.call(lufthansa,  '202', 'ManikantaG');
bookVariable.call(eurowings, '426', 'Adam');
const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}
bookVariable.call(swiss, '903', 'Rambabu');

//The apply() does exactly the same as call() but only difference is apply takes in an array of arguments.
const lufParams = ['202', 'ManikantaG'];
const euroParams = ['426', 'Adam'];
const swissParams = ['903', 'Rambabu'];
bookVariable.apply(lufthansa,  lufParams);
bookVariable.apply(eurowings, euroParams);
bookVariable.apply(swiss, swissParams);
// we can use call instead of apply by using a spread operator as parameters in call i.e,
// the above 3 lines with apply() can be replaced with these below:
bookVariable.call(lufthansa,  ...lufParams); // this is same as doing an apply()
bookVariable.call(eurowings, ...euroParams); // this is same as doing an apply()
bookVariable.call(swiss, ...swissParams); // this is same as doing an apply()
// i.e, with modern JS we can just use the call() and use the spread operator like this when needed


//133. The 'bind' method (this is more important than the call and apply methods)
// Just like call and apply methods, bind() also allows us to set the 'this keyword' to any function call.
// but the difference is bind() doesnot immediately call the function instead it
// returns a new function where the 'this keyword' is bound i.e, its set to whatever value we pass into bind().
// bind() method  (bookVariable.call(eurowings, '426', 'Adam');0
const bookEW = bookVariable.bind(eurowings, '101', 'Ram');
const bookLX = bookVariable.bind(swiss);
const bookLH = bookVariable.bind(lufthansa, '19'); // 2nd way of doing (Partial Form)
bookEW(); // one way of doing
bookLX('303', 'Shyam'); // 3rd way of doing
bookLH('Sam'); 
bookLH('David'); 

// With Event Listeners
lufthansa.planes = 333;
lufthansa.buyPlane = function() {
    console.log('lufthansa object: ',this);
    this.planes++; 
    console.log('lufthansa count: ',this.planes);
}

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application (meaning we can preset some conditions)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.33);
// addVat = value => value + value * 0.23;
const vatUS = addVAT(1000); 
console.log(vatUS); // 1330
const vatIndia = addVAT(300);
console.log(vatIndia); // 399
const vatSwiss = addVAT(500);
console.log(vatSwiss); // 665

const addTax2 = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTax2(0.33);
console.log(addVAT2(1000));
console.log(addVAT2(300));
*/

//134. Coding Challenge #1
const poll = {
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),
    //1.
    registerNewAnswer : function() {
        prompt(poll.question);
    }



    };
console.log(poll.registerNewAnswer());