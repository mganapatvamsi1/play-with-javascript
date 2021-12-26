'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("Person can drive 🏎");


//33. Functions:
function logger() {
    console.log("My name is ManiG");
}

logger(); // this is called invoking, executing, calling or running a function
logger(17);

function fruitProcessor(appleCount, orangeCount) {
    // console.log(appleCount, orangeCount);
    return `Juice with ${appleCount} apples and ${orangeCount} oranges.`;
}

const appleAndOrangeJuice = fruitProcessor(5, 10);
console.log(appleAndOrangeJuice);
// console.log(fruitProcessor(5, 10));

const appleAndOrangeJuiceNew = fruitProcessor(2, 4);
console.log(appleAndOrangeJuiceNew);


//34. Function Declarations vs Expressions:
// function declaration
const tuyenAge = calculateAge(1997);
const maniAge = calculateAge(1992);
function calculateAge(birthYear) { 
    return 2022 - birthYear;
}
console.log(tuyenAge);
console.log(maniAge);

// function expression
const calculateAge2 = function (birthYear) { // this is a function without a name (annonymous function)
    return 2022 - birthYear; 
}
// here "calculateAge2" variable holds the value of the function.
const tuyenAge2 = calculateAge2(1997);
console.log(tuyenAge2);
const maniAge2 = calculateAge2(1992);
console.log(maniAge2);
// Note: function expression works in the same way as function declaration 
// Note: we can call function declarations before they are actually defined in the code 
// but it doesn't work with function expressions as they will give an error saying "cannot access before initialization".
// and this happens because of a process called hoisting.

                    
//35. Arrow Functions 
// this is a shorthand form of writing functions
// function expression
const calculateAgeUsingFunctionExpression = function (birthYear) { 
    return 2022 - birthYear; 
}
// Arrow Function (this is  a special form of function expression)
const calculateAgeUsingArrowFunction = birthYear => 2022 - birthYear;

const tuyenAgeUsingFunctionExpression = calculateAgeUsingFunctionExpression(1997);
const tuyenAgeUsingArrowFunction = calculateAgeUsingArrowFunction(1997);
const maniAgeUsingFunctionExpression = calculateAgeUsingFunctionExpression(1992);
const maniAgeUsingArrowFunction = calculateAgeUsingArrowFunction(1992);
console.log(tuyenAgeUsingFunctionExpression, tuyenAgeUsingArrowFunction);
console.log(maniAgeUsingFunctionExpression, maniAgeUsingArrowFunction);

// how many years a person has left until retirement (65 is retirement age) when given birthYear

const yearsUntilRetirementUsingFuncExpr = function (birthYear) { 
    return 65 - (2022 - birthYear);
}
const yearsUntilRetirementUsingArrowFunc = birthYear => 65 - (2022 - birthYear);

const maniYearsLeftForRetirementUsingFuncExpr = yearsUntilRetirementUsingFuncExpr(1992); 
const maniYearsLeftForRetirementUsingArrowFunc = yearsUntilRetirementUsingArrowFunc(1992); 
const tuyenYearsLeftForRetirementUsingFuncExpr = yearsUntilRetirementUsingFuncExpr(1997); 
const tuyenYearsLeftForRetirementUsingArrowFunc = yearsUntilRetirementUsingArrowFunc(1997);
console.log(maniYearsLeftForRetirementUsingFuncExpr, maniYearsLeftForRetirementUsingArrowFunc);
console.log(tuyenYearsLeftForRetirementUsingFuncExpr, tuyenYearsLeftForRetirementUsingArrowFunc);

// if we want to say a person with name N retires in  Y years
const yearsUntilRetirement = (birthYear, firstName) => {
    const currentAge = 2022 - birthYear;
    const retirement = 65 - currentAge;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1992, 'ManiG'));
console.log(yearsUntilRetirement(1997, 'TuyenLe'));

// we can't leverage 'this' keyword with arrowFunctions but we can use 'this' using traditional functions

//36. Functions calling other functions
// function to cut fruit into multiple pieces
function cutFruitIntoPieces(fruit) {
    return fruit * 4;
}
 
function fruitProcessor(appleCount, orangeCount) {
    const totalsApplePieces = cutFruitIntoPieces(appleCount);
    const totalsOrangePieces = cutFruitIntoPieces(orangeCount);
    return `Juice with ${totalsApplePieces} pieces of apple and ${totalsOrangePieces} pieces of orange.`;
}
console.log('drivingLicenseVariable fruitProcessor:',fruitProcessor(2, 3));


//37. Reviewing functions

//38. Coding Challenge-1: 
//Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log("-----------Coding Challenge-1 STARTED-------------");
//1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

//2. Usethefunctiontocalculatetheaverageforbothteams
// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);

// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
const checkWinner = function (avgDolphins, avgKoalas) {
    return avgDolphins >= 2 * avgKoalas ? console.log(`Dolphins won (${avgDolphins} vs. ${avgKoalas})`) :
    console.log(`Koalas won (${avgKoalas} vs. ${avgDolphins})`);
}

//4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// console.log(checkWinner(averageDolphins, averageKoalas));
checkWinner(averageDolphins, averageKoalas);
checkWinner(400, 150);
console.log("-----------Coding Challenge-1 DONE-------------");


//39. Introduction to Arrays
//Approach-1 (creating array using "new Array()")
const fruits = new Array('apple', 'orange', 'pineapple', 'papapa', 'watermelon');
console.log(fruits, fruits[0])
//Approach-2 (creating array using square braces "[]" syntax)
const friends = ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra'];
console.log(friends, friends[0]);
// Note: we cannot change the whole array but we can mutatae the properties or values in array exam: friends[2] = 'newV';
const firstName = 'Manikanta';
const myDetails = [firstName, 'Ganapathiraju', 2022 - 1992, 'Programmer', friends];
console.log(myDetails);

// exercise: 
const calculateAgeNew = function (birthYear) { // this is a function without a name (annonymous function)
    return 2022 - birthYear; 
}
const years = [1992, 1967, 2002, 1997, 2010, 2018];
// using calculateAgeNew function and store the results of calculating the ages for the years provided in the years array
// into the new array.
//Note: we can do this using a for loop  

// const newAge = calculateAgeNew(years[0]);
// const newAge1 = calculateAgeNew(years[1]);
// const newAge2 = calculateAgeNew(years[2]);
// const newAge3 = calculateAgeNew(years[3]);
// const newAge4 = calculateAgeNew(years[4]);
// const newAge5 = calculateAgeNew(years[5]);
// const outputArray = new Array(years.length);
// const outputArray = new Array(newAge, newAge1, newAge2, newAge3, newAge4, newAge5);
const outputArray = new Array(
calculateAgeNew(years[0]), 
calculateAgeNew(years[1]),
calculateAgeNew(years[2]),
calculateAgeNew(years[3]),
calculateAgeNew(years[4]),
calculateAgeNew(years[5])
);
console.log(outputArray); // (6) [30, 55, 20, 25, 12, 4]


//40. Basic Array Operations:    
const myFriends = ['Aman', 'Akbar'];
console.log(myFriends, myFriends.length); // ['Aman', 'Akbar'] 2
// Add elements
const newLength = myFriends.push('Anthony'); // note: here the push() would give the new length of the array in this case.
console.log(newLength); // 3 
console.log(myFriends, myFriends.length); // ['Aman', 'Akbar', 'Anthony'] 3

//Note: if we want to add something to the beginning of the array (use "unshift")
// 'unshift(element)' adds an element to the start of the array and returns the new length of the array.  
myFriends.unshift(1);
console.log(myFriends); // [1, 'Aman', 'Akbar', 'Anthony'] 3
myFriends.unshift(2);
console.log(myFriends); // [2, 1, 'Aman', 'Akbar', 'Anthony'] 
myFriends.unshift(3);
console.log('updated friends1: ',myFriends); // [3, 2, 1, 'Aman', 'Akbar', 'Anthony'] 

// Remove elements from the array
const removedElement = myFriends.pop(); // 'pop()' returns the removed element.
console.log('removedElement through pop operation: ', removedElement); // 'Anthony'
console.log('updated friends2: ', myFriends);  // [3, 2, 1, 'Aman', 'Akbar'] 

// 'shift()' removes the first element from the array and returns it.
const poppedElement = myFriends.shift();
console.log('removed element through shift operation: ',poppedElement); // 3
console.log('updated friends3: ', myFriends);  // [2, 1, 'Aman', 'Akbar'] 

//'indexOf()' returns the index of first occurence of a value in the given array or -1 if its not present.
//'includes()' determines whether an array includes a certain element, returning true or false as appropriately.
//Note: 'includes()' does strict type equality i.e, it doesn't do type coercion.
//Note: we can also use 'includes()' in conditionals like if() 
console.log(myFriends.indexOf('100'), myFriends.includes('100')); // -1 false
console.log(myFriends.indexOf(2), myFriends.includes(2)); // 0 true
console.log(myFriends.indexOf('Akbar'), myFriends.includes('Akbar')); // 3 true
console.log(myFriends.indexOf('ManiG'), myFriends.includes('ManiG')); // -1 false


// 41. Coding Challenge-2:
//1.
// using function expression syntax
//  const calculateTip = function (billValue) {
//      return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
//  }

// using arrow function syntax
 const calculateTip = (billValue) => (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.20;
 console.log(calculateTip(100));
//2.
const bills = new Array(125, 555, 44);
const tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2])
];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(bills, tips, totals);

// 42. Introduction to Objects: 
const maniArray = [
    'Manikanta',
    'Ganapathiraju', 
    2022 - 1992,
    'Programmer',
    ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra']
];

// object literal syntax
const maniObject = {
    firstName: 'Manikanta',
    lastName: 'Ganapathiraju', 
    age: 2022 - 1992,
    job: 'Programmer',
    friends: ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra']
};
// here "maniObject" is an object with 5 key-value pairs.
// Note: In an array the order in which we specify the elements matters a lot  because thats how we access elements
// in an array (ordered elements) whereas in an object the order of these values doesn't matter at all when we want
// to retrieve them (un-structured elements)

// 43. Objects: Dot vs Bracket Notation
console.log(maniObject.firstName, maniObject['firstName']);
console.log(maniObject.lastName, maniObject['lastName']);
console.log(maniObject.age, maniObject['age']);
console.log(maniObject.job, maniObject['job']);
console.log(maniObject.friends, maniObject['friends']);

const nameKey = "Name";
console.log(maniObject["first" + nameKey]); // Manikanta
console.log(maniObject["last" + nameKey]); // Ganapathiraju

const interestedIn = prompt("What do you want to know about Mani? Choose between firstName, lastName, age, job and friends");
if (maniObject[interestedIn]) {
    console.log(maniObject[interestedIn]); // truthy value
} else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job and friends');
}
// console.log('Initial object: ', maniObject);
maniObject.location = 'Seattle, WA, USA';
maniObject['company'] = 'ExpediaGroup';
maniObject['phone'] = 2032437208;
console.log('updated object: ', maniObject);

// Challenge: Mani has 3 friends and his best friend is raj.
console.log(`${maniObject.firstName} has ${maniObject.friends.length} friends, and his best friend is called ${maniObject.friends[0]}`);

// 44. Object Methods
const maniObject2 = {
    firstName: 'Manikanta',
    lastName: 'Ganapathiraju', 
    birthYear: 1992,
    job: 'Programmer',
    friends: ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    
    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    // most efficient solution
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    gettotalSummary: function() {
        // const drivingLicenseVariable = this.hasDriversLicense === true ? 'a' : 'no';
        const drivingLicenseVariable = this.hasDriversLicense ? 'a' : 'no';
        
        // return `${this.firstName} is a ${this.age} year old ${this.job} and he has ${drivingLicenseVariable} driver's license.`;
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${drivingLicenseVariable} driver's license.`;
    }
};

// console.log(maniObject2.calcAge(1992), maniObject2['calcAge'](1992)); // both of these are right
// Note: In every method, JS gives us access to a special variable called 'this'
console.log(maniObject2.calcAge(), maniObject2['calcAge']()); // 30 30
console.log(maniObject2.age);
console.log(maniObject2.age);
console.log(maniObject2.age);

// Challenge: write a method called 'gettotalSummary()' and the method should return a string that should totalSummarize the 
// data about the whole mani object
//Example: Manikanta is a 30 year old programmer and he has a/no driver's license;
console.log('challenge str result: ', maniObject2.gettotalSummary());


// 45. Coding Challenge-3:
//Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const markObj = {
    fullName: 'Mark Miller', 
    firstName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const johnObj = {
    fullName: 'John Smith', 
    firstName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
    // we will learn in OOProgramming on how to avoid using duplicate code as 'calcBMI' in this case
};
markObj.calcBMI() > johnObj.calcBMI() ? console.log(`${markObj.firstName}'s BMI (${markObj.bmi}) 
is higher than ${johnObj.firstName}'s (${johnObj.bmi})`) : console.log(`${johnObj.firstName}'s BMI (${johnObj.bmi}) 
is higher than ${markObj.firstName}'s (${markObj.bmi})`);


//46. Iteration: The for Loop
// Note: Loops allow us to automate repetitive tasks
// Note: forLoop keeps running while each of these condition/s is TRUE
// for loop has 3 parts: 
// 1. Initial value of a counter: example: for(let rep = 1;)
// 2. Logical condition that's evaluated before each iteration of the loop: example: for(let rep = 1; rep <= 10;)
// 3. incremental/decremental counter operation: example: for(let rep = 1; rep <= 10; rep++)
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// 47. Looping Arrays, Breaking and Continuing
const maniArray2 = [
    'Manikanta',
    'Ganapathiraju', 
    2022 - 1992,
    'Programmer',
    ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra'],
    true
];
const types = [];
console.log('Initial types array: ', types);

// print all elements of this array
//Note: here element is starting from 0 because array is 0 based.
for (let element = 0; element < maniArray2.length; element++) {
    // reading from 'maniArray2' array.
    console.log(maniArray2[element], typeof maniArray2[element]);
    
    // Filling 'maniArray2' array types.
    // types[i] = typeof maniArray2[element]; (this line and its below line would do the same thing)
    types.push(typeof maniArray2[element]);
}
console.log('updated types array: ', types);

const agecalc2 = function (birthYear) {
    return 2022 - birthYear; 
}
const years2 = [1992, 1967, 2002, 1997, 2010, 2018];
const ages = [];
// calculate ages for all these birthYears and to store them in a new array.
for (let i = 0; i < years.length; i++) {
    // const resultBirthYears = agecalc2(years2[i]);
    // outputArray2.push(resultBirthYears);
    
    // outputArray2.push(agecalc2(years2[i]));
    
    ages.push(2022 - years2[i]);
}
console.log('Updated output array: ',ages);

// continue and break statememts
// continue is to exit the current iteration of the loop and continue to the next one whereas break is used to
// completely terminate the whole loop.
// here intention is to only log strings to the console, which means everything else needs to be skipped.
console.log("-----ONLY STRINGS (CONTINUE)-----")
for (let i = 0; i < maniArray2.length; i++) {
    if (typeof maniArray2[i] !== 'string') continue;
    console.log(maniArray2[i], typeof maniArray2[i]);
}

// requirement is to log no other elements after a number is found (so we can use break there as break can terminate the whole execution once called).
console.log("-----STOP AFTER NUMBER (BREAK)-----")
for (let i = 0; i < maniArray2.length; i++) {
    if (typeof maniArray2[i] === 'number') break;
    console.log(maniArray2[i], typeof maniArray2[i]);
}

// 48. Looping Backwards and Loops in Loops
console.log("-----48-----")
const maniArray3 = [
    'Manikanta',
    'Ganapathiraju', 
    2022 - 1992,
    'Programmer',
    ['jaimin', 'hemanth', 'raj', 'aryan', 'malhotra']
];
// Printing elements backwards in an array
for (let i = maniArray3.length - 1; i >= 0; i--) {
    console.log(maniArray3[i], typeof maniArray3[i]);
}
// Loops in Loops
for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------- Starting Exercise ${exercise}`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
}


//49. The while loop  
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
//Note: while(condition)
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

// PROBLEM: we will roll a dice and keep rolling a dice until we roll a 6
// and then when we roll a 6, we stop.

// the roll of a dice is a number between 1 and 6 
// let diceRollDecimal = Math.random() * 6;
// // console.log(diceRollDecimal, Math.floor(diceRollDecimal));
// let dice = Math.floor(diceRollDecimal);
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop will end now');
}


//50. Coding Challenge-4:
const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsNew = [];
const totalNew = [];
// arrow function syntax
const calcTipNew = (billValue) => 
(billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.20;

for (let bill = 0; bill < billsNew.length; bill++) {
    const tip = calcTipNew(billsNew[bill]);

    tipsNew.push(tip);
    totalNew.push(billsNew[bill] + tip)
}
console.log(billsNew, tipsNew, totalNew);

// function expression syntax
// this function takes in an arr and calculates the average of all the elments in that given arr.
const calcAvg = function (arr) {
    let totalSum = 0;
    for (let ele = 0; ele < arr.length; ele++) {
        totalSum += arr[ele];
    }
    return totalSum / arr.length;
}
console.log(calcAvg([5, 10, 15, 20])); // 12.5
console.log(calcAvg(totalNew)); // 275.19
console.log(calcAvg(tipsNew)); // 42.89
console.log('testing live server plugin if enabled properly or not');