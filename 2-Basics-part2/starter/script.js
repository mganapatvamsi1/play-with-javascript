//1. Activating strict mode
// strict mode is a special mode that we can activate in JS
// which makes it easier for us to write secure JS code.

// non-strict (so this works)
// foo =`testing`;
// console.log(foo);

//foo2 = 'testing2';
// console.log(foo2);

// 'use strict';
// foo3 = 'testing3';
// console.log(foo3);
// this would give an error saying Uncaught ReferenceError: foo3 is not defined

// 'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive now :)`);
// (hasDriverLicense) Uncaught ReferenceError: hasDriverLicense is not defined
// const interface = 'Audio';
// const private = 123;
// (Uncaught SyntaxError: Unexpected strict mode reserved word)
// so strict mode reserves these words

// the fundamental building block of real world JS application are 'Functions'
// 2.Functions
// 'use-strict';
// function testing() {
// console.log(`Go Goa Gone!`);
//}
// testing();
// testing();
// function logger() {
// console.log(`My name is maniG.`);
// }
// logger(); // Invoking, running or calling the function.
// logger();
// // functions are fundamental building blocks of JS programming.
// //A function can also receive data and return it back
// function fruitProcessor(numOfApples, numOfOranges) {
// // console.log(numOfApples, numOfOranges);
// const juice = `Juice with ${numOfApples} apples and ${numOfOranges} oranges.`;
// return juice;
// }
// const bothJuices = fruitProcessor(5, 1);
// console.log(bothJuices);
// const appleJuice = fruitProcessor(10, 0);
// console.log(appleJuice);
// // functions allows us to write more maintainable code, because with functions
// // we can create re-usable chunks of code instead of manually have to write the same code over and over again.
// const num = Number('217');

//assignment
// 'use-strict';
// function describeCountry(country, population, capitalCity) {
// // const result = `${country} has ${population} Million people
// // and its capital city is ${capitalCity}.`;
// // return result;
// return `${country} has ${population} Million people and its capital city is ${capitalCity}.`;
// }
// const statsFinland = describeCountry('Finland', 6, 'Helsinki');
// const statsSouthAfrica = describeCountry('SouthAfrica', 14, 'CapeTown');
// const statsIndia = describeCountry('India', 40, 'NewDelhi');
// // console.log(statsFinland);
// // console.log(statsSouthAfrica);
// // console.log(statsIndia);
// console.log(statsFinland, statsSouthAfrica, statsIndia);

//3. Function Declarations vs Expressions
// const age1 = calculateAge1(1992);
// // function to calculate age based on a given birth year.
// // function declaration
// function calculateAge1(birthYear) {
// // const age = 2021 - birthYear;
// // return age;
// return 2021 - birthYear;
// }
// // console.log(age1);
// // function expression (note: we know that expressions produce values)
// // note: function is also like a value
// const calculateAge2 = function (birthYear) { // annonymous function
// return 2021 - birthYear;
// }
// const age2 = calculateAge2(1992);
// console.log(age1, age2);
// // console.log(age2);
// // differences between function declarations and function expressions::
// // We can call funcDeclarations before there are actually defined in the code
// // but we cant do that for funcExpressions

// // assignment
// //(a),(b),(c) (using function declaration)
// function percentageOfWorld1(population) {
// return `It's about ${(population / 7900) * 100}% of world population. (declaration way).`;
// }
// const populationOfChina = percentageOfWorld1(1441);
// const populationOfIndia = percentageOfWorld1(1380);
// const populationOfUSA = percentageOfWorld1(331);
// console.log(populationOfChina, '\n', populationOfIndia, '\n', populationOfUSA);

// //(d) (using function expression)
// const percentageOfWorld2 = function (population) {
// return `It's about ${(population / 7900) * 100}% of world population. (expression way).`;
// }
// const populationOfChina2 = percentageOfWorld2(1441);
// const populationOfIndia2 = percentageOfWorld2(1380);
// const populationOfUSA2 = percentageOfWorld2(331);
// console.log(populationOfChina2, '\n', populationOfIndia2, '\n', populationOfUSA2);

// 4. Arrow Functions (added in ES6)
// Function Expression
// const calcAgeFuncExpression = function (birthYear) {
// return 2021 - birthYear;
// }
// const calcAgeFuncArrow = (birthYear) => { return 2021 - birthYear };
// const calcAgeFuncArrow = birthYear => 2021 - birthYear; // return happens here implicitly
// // const ageFuncExpression = calcAgeFuncExpression(1997);
// const ageFuncArrow = calcAgeFuncArrow(1997);
// console.log(ageFuncArrow);
// // const yearsUntilRetirement = function (birthYear) {
// // const currentAge = 2021 - birthYear;
// // return 65 - currentAge
// // }
// // const testing = yearsUntilRetirement(1992);
// // console.log(testing);
// const yearsUntilRetirement = birthYear => {
// const currentAge = 2021 - birthYear;
// return 65 - currentAge;
// }
// // const noOfYearsLeft = yearsUntilRetirement(1992);
// // console.log(noOfYearsLeft);
// console.log(yearsUntilRetirement(1992));
// const yearsUntilRetirementAndFirstName = (birthYear, firstName) => {
// const age = 2021 - birthYear;
// const retirement = 65 - age;
// return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirementAndFirstName(1992, 'Manikanta'));
// console.log(yearsUntilRetirementAndFirstName(1997, 'TuyenGiang'));
// // note: arrow functions donot get 'this' keyword

// // assignment
// const percentageOfWorld3 = population => `It's about ${(population / 7900) * 100}% of world population. (arrowFunc way). `;
// const populationOfChina3 = percentageOfWorld3(1441);
// const populationOfIndia3 = percentageOfWorld3(1380);
// const populationOfUSA3 = percentageOfWorld3(331);
// console.log(populationOfChina3, '\n', populationOfIndia3, '\n', populationOfUSA3);

// 5. Functions calling other functions
// function cutFruitPieces(fruit) {
// return fruit * 4;
// }
// function fruitPricessor(numOfApples, numOfMangoes) {
// const totalApplePieces = cutFruitPieces(numOfApples);
// const totalMangoPieces = cutFruitPieces(numOfMangoes);
// const juice = `Juice with ${totalApplePieces} pieces of apples and ${totalMangoPieces}
// pieces of mangoes.`;
// return juice;
// }
// console.log(fruitPricessor(2, 3));

// assignment
// const percentageOfWorldNew = function (population) {
// return (population / 7900) * 100;
// }
// const describePopulation = function (country, population) {
// const result = percentageOfWorldNew(population);
// return `${country} has ${population} million people, which is about ${result}% of the world.`;
// }
// console.log(describePopulation('China', 1441),
// '\n', describePopulation('India', 1380), '\n', describePopulation('America', 331));

// 6. Reviewing functions
// const calculateAge = function(year) {
//     return 2021 - year;
// }
// const yearsUntilRetirement = function(birthyear, firstName) {
//     //TesterOld
//     // const age = 2021 - birthyear;
//     const age = calculateAge(birthyear);
//     const retirement = 65 - age;
//     // return `${firstName} retires in ${retirement} years.`;
//     // return 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//    } else {
//         console.log(`${firstName} has already expired.`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1992, 'Manikanta')); // 36
// console.log(yearsUntilRetirement(1950, 'TesterOld')); // -6

//$$1. Coding Challenge
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function(avgDolphins, avgKoalas) {
//     // const resultDolphins = calcAverage
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if(avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return `No team wins.!`;
//     }
// }
// const averageScoreDolphins1 = calcAverage(44, 23, 71);
// const averageScoreDolphins2 = calcAverage(85, 54, 41);
// const averageScoreKoalas1 = calcAverage(65, 54, 49);
// const averageScoreKoalas2 = calcAverage(23, 34, 27);
// let averageScoreDolphins = calcAverage(44, 23, 71);
// let averageScoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(averageScoreDolphins, averageScoreKoalas));
// averageScoreDolphins = calcAverage(85, 54, 41);
// averageScoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(averageScoreDolphins, averageScoreKoalas));
// // console.log(averageScoreDolphins1, averageScoreKoalas1);
// // console.log(averageScoreDolphins2, averageScoreKoalas2);
// console.log(checkWinner(576, 111));

// 7. Introduction to Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// friends.push('Adam');
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// const years = new Array(1992, 1994, 1997, 2008, 2020);
// console.log(years);
// console.log(years.length);
// console.log(years[years.length - 1]);
// friends[3] = 'Sam';
// console.log(friends);
// // anything that we give declare as 'const' is immutable
// // but it only applies for primitives (i.e., only primitive values are immutable)
// // an array is not a primitve value so we can also mutate it
// //Also,we can mutate elements in an array but can't change wholearray(for 'const')
// // friends = ['ram', 'rahul', 'robert']; // this throws error
// const myStuff = ['Manikanta', 'Ganapathiraju', 1992, true, 2021 - 1992];
// console.log(myStuff);
// myStuff.push(friends);
// console.log(myStuff);
// console.log(myStuff[myStuff.length - 1]);
// exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// // console.log(calcAge(years)); // NaN
// const age1 = console.log(years[0]);
// const age2 = console.log(years[1]);
// const age3 = console.log(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [console.log(years[0]), console.log(years[1]),
// console.log(years[years.length - 1])];
// console.log(ages);

