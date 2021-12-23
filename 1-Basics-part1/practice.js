'use strict';

let js1 = 'amazing';
if (js1 === 'amazing') {
    console.log('Javascript is fun.!');
} else {
    console.log('Lets find the next best language');
}
console.log(js1);

let firstName = 'Mani';
console.log(firstName); 

//Practice assignment 1. for variables and values 
const country = 'India';
const continent = 'Asia';
let population = 20000000;
console.log(`My country: ${country}`);
console.log(`My continent: ${continent}`);
console.log(`${country}'s population: ${population} Mil.`);

console.log(typeof true);
console.log(typeof 17);
console.log(typeof 'Mani');

console.log(typeof 'Mani');
console.log("initial value and type of firstName:", firstName, typeof firstName); 
firstName = false;
console.log("updated value and type of firstName:", firstName, typeof firstName);

let year; // empty variable will always take undefined as the value and its type
console.log(year);
console.log(typeof year);

year = 1992;
console.log(year);
console.log(typeof year);

console.log(typeof null); // object (this is a bug in javascript and was never fixed for legacy reasons)


//Practice assignment 2. for Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); // undefined --> because nothing is set to the language variable


// we use 'let' keyword to declare variables that can be used to change values later during the execution of the pgm.
// on the other hand we use 'const' keyword to declare variables that are not supposed to change at any point.
// i.e., variable declared with 'let' can be mutated whereas variable declared as 'const' is an immutable variable
// Also as variables declared as 'const' are immutrable so we cannot declare them as empty.
// 'var' is the old wayof declaring variables prior to ES6 so we must avoid using it but should know about it for general idea.
// Note: 'let' is block scoped and 'var' is function scoped


//Practice assignment 3: let, const and var
language = 'English';
const isIslandNew = false;
// isIslandNew = true; // this line will give the following error: Uncaught TypeError: Assignment to constant variable.


// Basic Operators:  
const maniBirthYear = 1992; 
const tuyenBirthYear = 1997; 
// Math Operators
const now = 2037; // note: currently as I am not changing the variable names later so defining them as 'const'
const ageMani = now - maniBirthYear;
const ageTuyen = now - tuyenBirthYear;
console.log(ageMani, ageTuyen, 2 ** 3); // 2 ** 3 means 2 to the power of 3 i.e, 2 * 2 * 2 = 8

const myFirstName = 'Manikanta';
const myLastName = 'Ganapathiraju';
console.log(myFirstName + ' ' + myLastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 => 25
x *= 4; // 100
console.log(x);

// Comparison operators
console.log(ageMani > ageTuyen); // this returns true as ageMani is greater than ageTuyen
// note: we use this result in variaBLE'S in real world applications


//Practice assignment 4: Basic Operations
let myCountryPopulation = population;
let firstHalfPopulation = population / 2;
let secondHalfPopulation = population / 2;
console.log(`Number of people living in the first half: ${firstHalfPopulation}`);

myCountryPopulation += 1; // or myCountryPopulation++;
console.log(`My country's updated population: ${myCountryPopulation}`);

let finlandPopulation = 6000000;
console.log("my country's population is greater than that of finland:", myCountryPopulation > finlandPopulation);

let averageCountryPopulation = 33000000;
console.log("my country's population is lesser than average country's population:", myCountryPopulation < averageCountryPopulation);

let description = `${country} is in ${continent}, and its ${myCountryPopulation} million people speak ${language}`;
console.log(description);


//Coding Challenge-1: 
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using theformula (youcanevenimplementboth
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
*/
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const mName = 'Mark';
const markMass = 78;
const johnMass = 92;
const jName = 'John';
const markHeight = 1.69;
const johnHeight = 1.95;
const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI); // 27.309968138370508 24.194608809993426 true

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// const markMass = 95;
// const johnMass = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;
// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = markBmi > johnBmi;
// console.log(markBmi, johnBmi, markHigherBMI); // 26.87867813490267 27.44059917355372 false


// String Literals (Template Literals)
const my_name = 'ManiG';
const job = 'Programmer';
const current_year = 2021;
const birth_year = 1992;
console.log(`I am ${my_name}, a ${current_year - birth_year} years old ${job}.!`);
// Note: Another advantage of using template literals is that to write multiple lines of code just with a space.
console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


// if and else Statements
const age = 15;
// const isOldEnough = age >= 18;
if (age >= 18) {
    console.log(`The person can start driving license 🏎`);
} else {
    console.log(`The person is too young and has to wait for another ${18 - age} years ☺️`);
}

const newBirthYear = 1992;
let century;

if (newBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Coding Challenge-2:
console.log(markBmi, johnBmi);
if (markBmi > johnBmi) {
    console.log(`${mName}'s BMI ${markBmi} is greater than ${jName}'s ${johnBmi}!`);
} else {
    console.log(`${jName}'s BMI ${johnBmi} is greater than ${mName}'s ${markBmi}!`);
}


// type conversion and Coercion

// type conversion
const inputYear = '1992';
console.log(Number(inputYear), inputYear); // 1992 '1992'
console.log(inputYear + 18); // 199218
console.log(Number(inputYear) + 18); //2010
console.log(Number('ManiG')); // NaN
console.log(typeof NaN); // number
console.log(typeof String(1992), typeof 1992); // string number

// type Coercion
//Note: JS does type coercion for us manually in many cases.
// Note: whenever there's an operation between number and string the number should be converted to string(type coercion)
// in the case of '+' operation where as in the case of '-' operation 
//case1: numbers are converted to strings
const numToStr = 'I am ' + 29 + ' years old.!'; // here number is converted to string
console.log(numToStr, '----', typeof numToStr); // I am 29 years old.! ---- string

const strToNum = '23' - '10' - 3; // here string is converted to number
const strToNum2 = '23' * 2;
const strToNum3 = '25' / 5;
console.log(strToNum, '----', typeof strToNum); // 10 '----' 'number'
console.log(strToNum2, '----', typeof strToNum2); // 46 '----' 'number'
console.log(strToNum3, '----', typeof strToNum3); // 5 '----' 'number'

// guess the game
let n = '1' + 1; // here number would be converted  to string i.e, this lines o/p will be: '11'
n = n - 1; // as we used '-' here so string should be converted to number i.e, 11 - 1 = 10
console.log(n, '--', typeof n); // 10 '--' 'number'

let n2 = 2 + 3 + 4 + '5'; // 9 + '5' => '95'
console.log(n2, '--', typeof n2); // 95 -- string

let n3 = '10' - '4' - '3' - 2 + '5'; 
//  6 - '3' - 2 + '5'  
//  3 - 2 + '5' (4 - '3' + '5' )
// 1 + '5' (1 + '5')
// '15' ('15')
console.log(n3, '--', typeof n3); // 15 -- string


// 21.truthy vs falsy values
// in JS there are only 6 falsy values i.e, 0, false, '', undefined, null, NaN
// everything else are truthy values i.e, something that can be converted to truthy values.
console.log(Boolean(0)); // false
console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
// anything else other than these 6 above would result into true
console.log(Boolean('ManiG')); // true

//Note: JS does type coercion automatically behind the scenes but only in 2 scenarios for boolean types:
// 1. In the case of if-else statements
// 2. When using logical operators

//1. see how type coercion works in the case of if-else statements
const money = 1;
if (money) {
    console.log("Don't spend it all 😜");
} else if (money == 0) {
    console.log(`money is ${money}`);
} else {
    console.log("You should get a job.");
}

let height;
if (height) {
    console.log('YAY! Height is defined!');
} else if (height == 0) {
    console.log(`Height is ${height}`);
} else {
    console.log('Height is undefined 😔');
}


// 22. Equality operators: == vs ===
// Note: '===' this is a strict equals operator and it doesn't perform type coercion, i.e, it will only return
// true when both values are exactly true whereas on the other hand the loose equality operator '==' does type coercion.
 const ageNew = 30;
 if (ageNew === 29) console.log("You're a complete adult now.!");
 // this below is false as its strict comparison whereas '==' in this case results to true.
 if ('18' === 18) {
    console.log('strict equality comparison passed');
 } else {
    console.log('strict equality comparison failed');
 } 
if ('18' == 18) {
    console.log('loose equality comparison passed');
} else {
    console.log('loose equality comparison failed');
}

// const favourite = prompt("What's your favourite number?");
// console.log(favourite, typeof favourite); // 2020 string
// const favouriteNumber = Number(favourite);
// console.log(favouriteNumber, typeof favouriteNumber); // 2020 'number'
// if (favouriteNumber === 2020) {
//     console.log(`Cool, ${favouriteNumber} is an amazing number.!`);
// } else {
//     console.log(`sorry, ${favouriteNumber} is not the required number.!`);
// }


// 24. Logical Operators: 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);
// person should drive if he/she has a drivers license and a good vision
const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Person is able to drive");
// } else {
//     console.log("shouldn't drive");
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Person is able to drive");
} else {
    console.log("shouldn't drive");
}

//Coding Challenge-3: 
//Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//1.
const averageScoreDolphins = (96 + 108 + 89)/3;
const averageScoreKoalas = (88 + 91 + 110)/3;
console.log(averageScoreDolphins, averageScoreKoalas);
//2.
if (averageScoreDolphins > averageScoreKoalas) {
    console.log(`Dolphins won over Koalas by having an average score of ${averageScoreDolphins}.`);
} else if (averageScoreDolphins === averageScoreKoalas) {
    console.log(`Its a draw as both Dolphins and Koalas have same average score of ${averageScoreDolphins}.`);
} else { // else if (averageScoreKoalas > averageScoreDolphins) 
    console.log(`Koalas won over Dolphins by having an average score of ${averageScoreKoalas}.`);
} 
//3. Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphins won over Koalas by having an average score of ${averageScoreDolphins}.`);
} else if (averageScoreDolphins === averageScoreKoalas) {
    console.log(`Its a draw as both Dolphins and Koalas have same average score of ${averageScoreDolphins}.`);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log(`Koalas won over Dolphins by having an average score of ${averageScoreKoalas}.`);
} else {
    console.log("No team wins the trophy");
}
//4. Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphins won over Koalas by having an average score of ${averageScoreDolphins}.`);
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Its a draw as both Dolphins and Koalas have same average score of ${averageScoreDolphins}.`);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log(`Koalas won over Dolphins by having an average score of ${averageScoreKoalas}.`);
} else {
    console.log("No team wins the trophy.");
}


//26. Switch statements
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday' (doing a strict comparison)
    case 'tuesday':
        console.log('using  kotlin  and swift and building UI IOS application');
        break; // to stop after each block
    case 'wednesday':
    case 'thursday':
        console.log('using JS, TypeScript and building react project');
        break;
    case 'friday':
        console.log('revising the past weeks effort and wrapping upo any left over past weeks project/s work');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Problem solving DS and ALGO problems to be upto date with the coding questions.');
        break;
    default:
        console.log('Not a valid day!');
}

// 27. Statements and Expressions
//Example: we can only insert an expression in a template literal but cannot pass in a whole statement


//28. The conditional (Ternary) operator 
const newMyAge = 30;
// this line below is doing both if and else in jsut 1 line
// newMyAge >= 21 ? console.log("I would be drinking wine 🍷") : console.log("I can only have water and soda for now 😪");
const drink = newMyAge >= 21 ? "wine 🍷" : "water and soda 💦🥤";
console.log(drink);

// same above thing using if and else
let drink2;
if (newMyAge >= 21) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water and soda 💦🥤";
}
console.log(drink2);

console.log(`I love to drink ${drink}`);


//Coding Challenge-4:
//Test data:
// Data 1: Test for bill values 275, 40 and 430
// let bill = 275;
// let bill = 40;
let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15  : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)  