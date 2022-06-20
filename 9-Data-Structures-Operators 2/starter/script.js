'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // property names doesnot have to match the calling function.
  orderDeliery: function ({ startIndex = 1,
    mainIndex = 0, time = '19:00 PM', address }) {
    console.log(`Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }


};

// property names doesnot have to match the calling function.
restaurant.orderDeliery({
  time: '22:30 PM',
  address: 'ABC main St',
  mainIndex: 2,
  startIndex: 3,
});
restaurant.orderDeliery({
  address: '622 N 5th St',
});


// const arr = [2, 3, 4, 5];
// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];
// const a4 = arr[3];
// console.log(a1, a2, a3, a4);
// console.log('------------------');
// const [w, x, y, z] = arr; // This is called destructuring assignment or destructuring the array.
// console.log(w, x, y, z);
// console.log('------------------');
const [firstRestaurantType, , thirdRestaurantType, fourthRestaurantType] = restaurant.categories;
console.log(firstRestaurantType, thirdRestaurantType, fourthRestaurantType);
let [firstMenu, , thirdMenu] = restaurant.mainMenu;
console.log(firstMenu, thirdMenu); // i.e, if we want to find first and third values for ex. we just need to skip the middle one by leaving space
console.log('------------------');
// if we want to switch
// let temp = firstMenu;
// firstMenu = thirdMenu;
// thirdMenu = temp;
// console.log(firstMenu, thirdMenu);

// switching variables using destructuring (by reassigning the values)
[firstMenu, thirdMenu] = [thirdMenu, firstMenu];
console.log(firstMenu, thirdMenu);
console.log('------------------');

// having a function return an array and we can destruct the result into different variables.
// This allows us to return multiple values from a function.
//TODO: to start the above 2 lines, we have to first write a function.
console.log(restaurant.order(3, 0)); //  2nd index of starter menu and 0th index of main menu.
const [starter, main] = restaurant.order(3, 0);
console.log(starter, main); // Here its de-structured (To receive 2 return values from a function) i.e, creating 2 variables out of 1 function call.
console.log('------------------');

// Nested destructuring (arrays)
const nested = [2, 4, [5, 6]];
const [one, , three] = nested;
console.log(one, three);
const [i, , [j, k]] = nested;
console.log(i, j, k);
console.log('------------------');

// Default values
const [p, q = 1, r = 1] = [8, 11];
console.log(p, q, r);
console.log('------------------');
// for destructuring arrays we use '[]' and for destructuring objects we use '{}'
// In objects order of elements doesn't matter
const { name, openingHours, mainMenu, categories } = restaurant;
console.log(name, openingHours, mainMenu, categories);
const { starterMenu: restaurantMenu, location: restaurantLocation } = restaurant;
console.log(restaurantMenu, restaurantLocation);
console.log('------------------');

// If the property name is not there then the default value would kick-in
const { menu = [], starterMenu: starters = [], raj = [], mainMenu: mainDishes = [], aryan = [] } = restaurant;
console.log(menu, starters, raj, mainDishes, aryan);
console.log('------------------');

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
console.log('------------------');

// Nested Objects
const { thu: { open: openThu, close: closeThu } } = openingHours;
console.log(openThu, closeThu);
const { fri: { open: openFri, close: closeFri } } = openingHours;
console.log(openFri, closeFri);
const { sat: { open: openSat, close: closeSat } } = openingHours;
console.log(openSat, closeSat);
console.log('------------------');

//Spread Operator (Used to expand an array into all its elements.)
const testArr = [7, 8, 9, 10, 11, 12, 13];
// const badNewArr = [1, 2, testArr[0], testArr[1], testArr[2]];
// console.log(badNewArr);
// The same above 3 lines could be done using ES6 spread operator like this:
const newTestArr = [1, 2, ...testArr]; // Meaning expand the array to all of its individual elements
console.log(newTestArr);
// Also, whenever we need the individual elements of an array individually then also we can use spread operator.
console.log(...newTestArr);
console.log(1, 2, 7, 8, 9, 10, 11, 12, 13);
// Spread Operator can also be used while passing multiple elements into a function.
const newMainMenu = [...restaurant.mainMenu, 'CBiryani'];
console.log(newMainMenu);
//Imp: Spread Operator is similar to destructuring because it also helps in finding elements out of arrays.
// But the big difference is the Spread Operator takes all the elements from the array and it won't create
// new variables and as a consequence we can only use it in places where we would use values separated by commas.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // This is like a shallow copy of the array

// Join 2 arrays
const allMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenus);

// Spread Operator works on all Iterables (ex: arrays, strings, maps, sets etc.), but objects are not Iterables
//.i.e, most of the built-in data structures in JS are now iterables but not Objects.

// Spread Operator usage on Strings
const myNameStr = 'ManikantaG';
console.log(...myNameStr); // M a n i k a n t a G
const letters = [...myNameStr];
console.log(letters); // ["M", "a", "n", "i", "k", "a", "n", "t", "a", "G"]
// Note: We can use Spread Operator while building an array or while passing values(arguments) into a function.

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
// prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Note: Since ES2018, Spread Operators also work on Objects even though objects are not Iterables.
// Objects
const newRestaurant = { foundedInYear: 1998, ...restaurant, founder: 'Jeff Bezos' };
console.log(newRestaurant);

// Shallow copy in Objects
const copyOfRestaurantObj = { ...restaurant };
console.log(copyOfRestaurantObj);
console.log(restaurant);
copyOfRestaurantObj.name = 'Senoiraa';
console.log(copyOfRestaurantObj.name);
console.log(restaurant.name);

if (restaurant === copyOfRestaurantObj) {
  console.log('Its a deep copy.');
} else if (restaurant == copyOfRestaurantObj) {
  console.log('Its a shallow copy.');
} else {
  console.log('Its not a copy.');
}


//106. Rest Patterns and Rest Parameters
//Part-1: De-structuring
// Rest Patterns looks similar to the Spread Operator as it has similar syntax with 3 dots '...' but it does the opposite of the spread operator.
// i.e., Rest Patterns are used to collect multiple elements and condense them into an array.
// to re-iterate spread operator is to un-pack an array whereas Rest patterns are used to pack elements to an array.

// this is SPREAD because we are using '...' on the right side of the assignment operator.
const arr = [1, 2, ...[3, 4]];

// REST Pattern (here '...' are on the left-side of the operator.)
const [aa, bb, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(aa, bb, others);
// REST Pattern collects the elements that are un-used in the destructuring assignment.
const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);
//Note: REST patterns doesn't consider the skipped ones, thats why REST pattern must always be the last in the de-structuring assignment
// otherwise JS won't know on when to collect the rest of the elements. (meaning REST element must be the last element)
// Also there should be only 1 REST operation used in any de-structuring assignment.

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log("weekend: ", sat);
console.log("weekdays: ", weekdays);

//Part-2: Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25  // if we notice about REST Pattern here, its taking multiple values and packs them all into 1 array (opposite of SPREAD)
// i.e, with REST syntax we compress whereas with SPREAD we expand.

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach', 'halapenos');
// As the first argument was stored into 'mainIngredient', the rest all will be part of 'otherIngredients'


//107. Short Circuiting (&& and ||)
// Logical operations have the following 3 properties:
// You can use ANY datatype, return ANY data type and short-circuiting
console.log(33 || 'ManikantaG');
console.log('RajAryan' && 'Malhotra');
// AND operator will be short-circuited when the first operator is falsy as it won't even check for the second operation.
// if both conditions are true in AND then the last condition would be printed.
//i.e., OR operator will return the first truthy value of all the operands or simply returns the last value if all are falsy
// on the other hand AND operator will return the first falsy value or it will return the last value if all the values are truthy.

//108. The Nullish Coalescing Operator (??) (released in ES2020)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
// this Operator (??) works with the idea of nullish values instead of falsy values. Nullish values are null and undefined
// These doesnot include 0 or '' i.e, only nullish values will short-circuit the evaluation here.
// i.e, in our example above, only if "restaurant.numGuests" is null or undefined, only then the 2nd operand is executed and returned.

//110. Looping Arrays: the for-of Loop (Introduced in ES6)

/* Both for...in and for...of statements iterate over something. The main difference between
them is in what they iterate over.
The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
The for...of statement iterates over values that the iterable object defines to be iterated over.

const testing1 = ['a', 'b', 'c', 'd', 'e'];
for (const element of testing1) {
  console.log(element);
}
const testMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const menuItem of testMenu) {
  console.log(menuItem);
}
for (const menuIndex of testMenu.entries()) {
  // console.log(menuIndex);
  console.log(`${menuIndex[0] + 1}: ${menuIndex[1]}`);
}
console.log('---------------------------------------');
for (const [key, value] of testMenu.entries()) {
  console.log(`${key + 1}: ${value}`);
}

//111. Enhanced Object Literals
// ES6 is giving 3 ways through which we can right Object Literals more easily.

1)
2) writing methods
3) We can now finally compute (calculate) the property names instead of having to
   write them out manually.

// key Shorthand
//before
const myName = 'ManiG'
const myAge = 29
const person = {
  myName: myName,
  myAge: myAge
}
console.log(person);
// after applying ES6 Key Shorthand
const updatedPerson = {
  myName,
  myAge
}
console.log(updatedPerson);

// Function Shorthand
//before
const person2a = {
  sayHi: function () {
    console.log('Hey I am learning JavaScript.')
  }
}
person2a.sayHi();
// after applying ES6 Function Shorthand
const person2b = {
  sayHi() {
    console.log('Hey I am learning JavaScript.')
  }
}
person2b.sayHi();

// Computed property names
//before
const dynamicKey = 'name'
const index = 1
const person3a = {
  [dynamicKey]: 'Aarvi',
  ['age' + index]: 1
}
console.log(person3a);
//after applying ES6 computed property names
const person3b = {}
person3b[dynamicKey] = 'Aarvi';
person3b['age' + index] = 1;
console.log(person3b);

//Before: using outside property name
const status = 'H1-B';
const gender = 'Male';
const state = 'Missouri';
const zipcode = '63301';
const person4a = {
  number: '3146303120',
  designation: 'Software Engineer',
  gender: gender,
  zipcode: zipcode,
  status: status,
  state: state,
}
console.log(person4a);
//After ES6: its declared outside but we're still able to access it inside
const person4b = {
  number: '3146303120',
  designation: 'Software Engineer',
  gender,
  zipcode,
  status,
  state,
}
console.log(person4b);


//112. Optional Chaining (?.) introduced in ES2020
// problem
let user = {};
user.address = '12561 Renault Ct, APT B 63146';
console.log(user);
console.log('user address: ', user.address);
// console.log(user.address.street); // before
console.log(user.address ? user.address.street : undefined); // after (by using ternary operator)
// ex: lets try getting user.address.street.name i.e, here we need to check both user.address and user.address.street
// for both deeper(nested) properties this appraoch gets complicated.
console.log(user.address ? user.address.street ? user.address.street.name : null : null); // this could be made a bit more readable using logical operators.
console.log(user.address && user.address.street && user.address.street.name);
// AND'ing the whole path to the property ensures that all the components exist (if not the evaluation stops),
// but it isn't ideal as property names are still duplicated in the code.
// that's why optional chaining was added to the language (JS) once and for all.
console.log(user?.address?.street?.name); // here if we see the optional chaining (?.) stops the evaluation if
// the value before '?.' is undefined or null and returns undefined.
// Note: the optional chaining works only for declated variables.
delete user?.address;
console.log('updated user address: ', user.address);
// Note: Optional Chaining is used for safe reading and deleting, but not writing.


// check whether restaurant is open on every day and log to the console.
const restaurant1a = {
  openingHours1a: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10, // Open 24 hours
      close: 24,
    },
  }
};
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // here 'day' is coming dynamically from the array
  restaurant1a.openingHours1a[day]?.open && console.log(`This restaurant is open on ${day} from ${restaurant1a.openingHours1a[day]?.open} to ${restaurant1a.openingHours1a[day]?.close}.`);
}

//113. Looping Objects: Object keys, values and entries.
console.log('-----113-----');
// PROPERTY NAMES
const properties = Object.keys(restaurant1a.openingHours1a);
console.log(properties);
let openStr = `We are open for ${properties.length} days: `;
for (const day1a of properties) {
  openStr += `${day1a}, `;
}
console.log(openStr);
// PROPERTY VALUES
const values = Object.values(restaurant1a.openingHours1a);
console.log(values);

// Entire Object
const entries = Object.entries(restaurant1a.openingHours1a);
console.log(entries);
for (const [key, value] of entries) {
  console.log(`On ${key}, we open at ${value.open} and close at ${value.close}.`);
}
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}
*/

/*
Coding Challenge #2
  Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}

const game = {
  team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5, },
};
//1.
const gamesScoredEntries = Object.entries(game.scored);
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}

//2.
const gameOddValues = Object.values(game.odds);
let sum = 0;
for (let value of gameOddValues) {
  // console.log(value);
  sum += value;
}
console.log('Average odd value is: ', sum / gameOddValues.length);

//3.
for (const [key, value] of Object.entries(game.odds)) {
  // const teamStr = key === 'team1' ? `victory ${game.team1}` : key === 'team2' ? `victory ${game.team2}` : key === 'x' ? 'draw' : null;
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr} : ${value}`);
}

//4.
let scorers = {};
// So the solution is to loop over the arwray, and add the array elements as object properties,
//and then increase the count as we encounter a new occurence of a certain element
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/


//115. Sets: In DS, sets are a collection of unique values but the order of elements in a Set are irrelavent.
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  3,
  1,
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  1,
  1,
  3,
  3,
  3,
]);
console.log(orderSet); // Set(5) {"Pasta", "Pizza", 3, 1, "Risotto"}
//Note: Just like arrays, Sets are also Iterables.
console.log(new Set('ManiG')); // Set(5) {"M", "a", "n", "i", "G"}
console.log(orderSet.size); // 5
console.log(orderSet.has('Pizza') && orderSet.has('Pasta')); // true
console.log(orderSet.has('Bread')); // false (this 'has()' method is similar to the 'includes()' or 'contains()' method of arrays)
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
/* output:
Set(6) {"Pasta", "Pizza", 3, 1, "Risotto", …}
[[Entries]]
0: "Pasta"
1: "Pizza"
2: 3
3: 1
4: "Risotto"
5: "Garlic Bread"
*/
/*
orderSet.delete(1);
orderSet.delete(3);
console.log(orderSet); // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}

// Retrieving values out of a Set
console.log(orderSet.values()); // SetIterator {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
for (const item of orderSet) console.log(item);
// there's no way of getting values out of a Set because Set's have no indexes.
// also, because Set's main property is that order doesn't matter so the only thing that matters in a Set is
// if elements are unique or not and if an element is present?
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log([...new Set(staff)]); // (3) ["Waiter", "Chef", "Manager"]
const uniqueStaff = new Set(staff);
console.log(uniqueStaff); // Set(3) {"Waiter", "Chef", "Manager"}
console.log(new Set(staff).size); // 3
console.log(new Set('ManikantaG').size); // 7 (doubt: isn't this suppose to be 10 ??)
console.log(new Set('manikantag').size); // 7 (doubt: isn't this suppose to be 10 ??)


//116. Maps Fundamentals
// Its a DS thats used to map values to keys i.e, data is stored in Key-value pairs
const restaurants = new Map();
restaurants.set('rest1-name', 'Mcdonalds'); // this 'set' method in maps is similar to 'add' method in sets.
restaurants.set('rest2-name', 'Pasta House');
restaurants.set('rest3-name', 'KFC');
console.log(restaurants); // Map(3) {"rest1-name" => "Mcdonalds", "rest2-name" => "Pasta House", "rest3-name" => "KFC"}
restaurants
  .set('rest1-locations', { IL: 'Chicago', NY: 'nyc', CA: 'Bay area', WA: 'Seattle', TX: 'Austin' });
console.log(restaurants.get('rest1-locations')); // {IL: "Chicago", NY: "nyc", CA: "Bay area", WA: "Seattle", TX: "Austin"}
restaurants
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open around the clock')
  .set(false, 'We are closed now');
console.log(restaurants);
console.log(restaurants.get('categories')); // {IL: "Chicago", NY: "nyc", CA: "Bay area", WA: "Seattle", TX: "Austin"}
console.log(restaurants.get(true)); //We are open around the clock
console.log(restaurants.get('true')); //undefined

const time = 21;
console.log(restaurants.get(time > restaurants.get('open') && time < restaurants.get('close'))); // We are open around the clock
console.log(restaurants.size); //9
restaurants.clear(); // Used to remove a elements from the map.
console.log(restaurants.size, restaurants);
// we can use arrays or objects as Map keys
restaurants.set([1, 2], 'Testing Array As Key 1');
console.log(restaurants.get([1, 2])); //undefined
// the reason for getting 'undefined' is these 2 arrays are not the same in Heap, so to make it work we need to declare that array and use the same one i.e,
const arrtouse = [1, 2, 3];
restaurants.set(arrtouse, 'Testing Array As Key 2');
console.log(restaurants.get(arrtouse));
restaurants.set(document.querySelector('h1'), 'Heading');
console.log(restaurants);
// now it worked, because the 2 arrays in lines 592 and 594 referred to the same place in memory.


//117. Maps Iteration
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
};
const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'C++'],
  [3, 'Java'],
  [4, 'JavaScript'],
  [5, 'Python'],
  ['Correct', 4],
  [true, 'That\'s right 🎉 🎊 '],
  [false, 'Try again 😭'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
for (const [key, value] of hoursMap) {
  console.log(key, value);
}
// Quiz app
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log('--------------------------------------------------------');
if (question.get('Correct') === answer) console.log(`${question.get(true)}`);
else console.log(`${question.get(false)}`);
console.log('--------------------------------------------------------');
console.log(question.get(question.get('Correct') === answer));

// Converting map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());


//119. Coding Challenge-3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card']
]);
//1.
const eventsSet = new Set(gameEvents.values());
console.log(eventsSet); // Set(4) {"⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"}
const eventsArr = [...eventsSet];
console.log(eventsArr); // (4) ["⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"]

//2.
console.log('initial gameEvents: ', gameEvents.values());
console.log(gameEvents.has(64));
gameEvents.delete(64);
console.log(gameEvents.has(64));
console.log('after removing 64th min: ', gameEvents.values());

//3.
console.log(`An event occured, on average, every ${90 / gameEvents.size} minutes.`);
const timeInArr = [...gameEvents.keys()];
const latestTime = timeInArr.pop();
console.log(`An event occured, on average, every ${latestTime / gameEvents.size} minutes.`);

//4.
for (const [key, value] of gameEvents) {
  // if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  // else console.log(`[SECOND HALF] ${key}: ${value}`);
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}



//120. Working with Strings - Part1
let guestList = `Guests:
* John
* Pete
* Mary
* Adam
`;
console.log(guestList);

let str = `Hello`;
console.log(str[0]); // H
console.log(str.charAt(0)); // H
console.log(str[10]); // undefined
console.log(str.charAt(10)); // '' (an empty string)

for (let char of str) console.log(char);

str = 'Mani';
// str2[0] = 'R'; // script.js:719 Uncaught TypeError: Cannot assign to read only property '0' of string 'Mani' at...
// str[0] = 'h'; // script.js:720 Uncaught TypeError: Cannot assign to read only property '0' of string 'Hello' at...

//Note: there are 3 methods in JS to get a substring: substring, substr and slice.
str = 'stringify';
//1. 'slice' returns the part of the string from start to (but not including) end. --->> str.slice(start [, end])
console.log(str.slice(0, 6)); // 'string', the substring from 0 to 6 but not including 6.
console.log(str.slice(0, 3)); // 'str', the substring from 0 to 2 but not including 2.
console.log(str.slice(0)); // 'stringify', if there's no second argument then slice goes till the end of the string.
//Negative values for start/end are also possible, they mean the position is counted from the string end.
console.log(str.slice(-4, -1)); // 'gif', meaning start from the 4th position from the right, end at the 1st position at the right.

//2. str.subString(start [,end]) -->> Returns the part of the string between 'start' and 'end'
// i.e, Its almost the same as slice, but it allows 'start' to be greater than 'end'
console.log(str.substring(1, 3));

//120.
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // -1
console.log(airline.indexOf('Portugal')); // 8

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7));//Air

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

// Write a function that receives an airplane seat and logs to the console whether its a middle seat or not.
const checkMiddleSeat = function (seat) {
  // B and E are middle seats i.e, if the String that we receive has a 'B' or 'E' in it then thats a middle seat.
  const seatInfo = (seat.includes('B') || seat.includes('E')) ? 'a middle seat.' : 'not a middle seat.';
  console.log(`${seat} is ${seatInfo}`);

  // const s = seat.slice(-1); // last character from the seat will be removed
  // if (s === 'B' || s === 'E') {
  //   console.log('You got the middle seat 😀');
  // } else console.log('You got lucky 😊');
}
checkMiddleSeat('11B');
checkMiddleSeat('43F');
checkMiddleSeat('57E');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Whenever we call a method on a String in JS, Javascript will do the boxing meaning JS will convert the string to an object.
// And once the operation is done, the Object is converted back to the regular String.
// All String methods return primitives even if its been called on a String object.

console.log(new String('ManiG')); //String {"ManiG"}
console.log(typeof new String('ManiG')); //object
console.log(typeof new String('ManiG').slice(1)); //string
// doubt: to check the auto-boxing and auto-unboxing with strings and objects in JavaScript



//121. Working with Strings -- Part2
const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'MaNiKaNTaG' // required: Manikantag
const passengerLower = passenger.toLowerCase();
const passengerFirstLetterUpper = 'M' + passengerLower.substr(1);
const passengerFirstLetterUpper2 = passengerLower[0].toUpperCase() + passengerLower.slice(1); // correct one
console.log("lower case: " + passengerLower);
console.log("only first letter uppercase1: " + passengerFirstLetterUpper);
console.log("only first letter uppercase2: " + passengerFirstLetterUpper2);

// create a function that takes in any passenger name and returns the correct one
const passengerCorrect = function (passengerName) {
  const lowerCase = passengerName.toLowerCase();
  return lowerCase[0].toUpperCase() + lowerCase.slice(1);
}
console.log('Correct1:', passengerCorrect('RaJaRyAn'));
console.log('Correct2:', passengerCorrect('MaLhOtRa'));
console.log('Correct3:', passengerCorrect('MaNiG'));

// Comparing Emails
const email = 'mani@tuyeng.io';
const loginEmail = '  MaNi@TuYeNg.Io  \n';
const emailLowercase = loginEmail.toLowerCase();
const emailRemoveSpaces = emailLowercase.trim();
const emailRemoveSpaces2 = loginEmail.toLowerCase().trim();
console.log('Email LowerCase:' + emailLowercase)
console.log("Email Removing Spaces:" + emailRemoveSpaces);
console.log("Email Removing Spaces2:" + emailRemoveSpaces2);
console.log(email === emailRemoveSpaces);
console.log(email === emailRemoveSpaces2);

// comparing emails by passing into a function (refEmail is the one to compare)
const emailComparison = function (refEmail, secondEmail) {
  const correctEmail = secondEmail.toLowerCase().trim();
  return correctEmail === refEmail ? true : false;
}

console.log('firstTry:' + emailComparison('abc@xyz.com', '        abc@xyz.com \n \n '));
console.log('secondTry:' + emailComparison('def@pqr.com', ' def@pqrs.com \n \n '));
console.log('thirdTry:' + emailComparison('ghi@tuv.com', ' \n \n \n ghi@tuv.com \n \n '));

// Replacing parts of a String
const priceGB = '155,000#';
const priceUSA = priceGB.replace('#', '$').replace(',', '.'); // performing chaining
console.log('GB price:' + priceGB);
console.log('USA price:' + priceUSA);
// const updatedPriceUSA = priceUSA.replace(',', '.');
// console.log('Updated USA price:' + updatedPriceUSA);
const announcement = 'All passengers come to boarding door-23 as soon as the door is open for any door.';
const updatedAnnouncement = announcement.replace(announcement, 'Flights are delayed for tonight.');
console.log(updatedAnnouncement);
console.log(announcement.replaceAll('door', 'room'));
console.log(announcement.replace('door', 'room').replace('door', 'room').replace('door', 'room'));
console.log(announcement.replaceAll(/door/g, 'room')); // using regular expressions (here 'g' stands for global)

// booleans (there are 3 methods i.e, 'includes', 'startsWith' and 'endsWith')
const testStr = 'Boeing320S';
console.log('boolean1: ' + testStr.includes('320'));
console.log('boolean2: ' + testStr.startsWith('airbus'));
console.log('boolean3: ' + testStr.endsWith('S'));
console.log('boolean4: ' + testStr.includes('Boeing')); //  letters have to be case-sensitive
if (testStr.startsWith('Boeing') && testStr.endsWith('320S')) {
  console.log(`Part of the new Airbus family.`);
}

// Practice: to check if the baggage of a certain passenger is allowed to be checked in to be allowed into plane
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed to onboard.`);
  } else {
    console.log(`Welcome aboard.`);
  }
}
checkBaggage('I have a laptop, some Food and a pocker Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a Gun for protection');


//122. Working with Strings - Part 3
// 'split' and 'join'
const str = 'I+am+a+very+nice+guy';
console.log(str);
const splitStr = str.split('+'); // (6) ["I", "am", "a", "very", "nice", "guy"]
// const splitStr = str.split(str, '+');
// const splitStr = Strinxg.split('I+am+a+very+nice+guy+.', '+');
console.log(splitStr);
const splitName = console.log('Manikanta Varahala Venkatapati Raju Ganapathiraju'.split(' ')); // (5) ["Manikanta", "Varahala", "Venkatapati", "Raju", "Ganapathiraju"]

const [firstName, lastName] = 'Manikanta Ganapathiraju'.split(' ');
const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName); // Mr. Manikanta GANAPATHIRAJU

const capitalizeName = function (name) {
  const uppercaseName = name.toUpperCase().split(' ').join(' ');
  console.log(uppercaseName);
}
const capitalizeFirstCharOfAllWords = function (name) {
  const names = name.split(' ');
  const namesUppercase = [];
  for (const word of names) {
    namesUppercase.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(namesUppercase.join(' '));
}
const capitalizeFirstCharOfAllWords2 = function (name) {
  const names = name.split(' ');
  const namesUppercase = [];
  for (const word of names) {
    namesUppercase.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUppercase.join(' '));
}
capitalizeName('jessica ann smith davis taylor eddie');
capitalizeFirstCharOfAllWords('jessica ann smith davis taylor eddie');
capitalizeFirstCharOfAllWords2('jessica ann smith davis taylor eddie');
capitalizeName('martin seth collin steve mike peter');
capitalizeFirstCharOfAllWords('martin seth collin steve mike peter');
capitalizeFirstCharOfAllWords2('martin seth collin steve mike peter');

// Padding a String means to add the number of characters to the String until the String has a certain desired length
const message1 = 'Go to gate 23!'; // this string has 14 characters
// String.padStart() and String.padEnd() (first parameter takes in 'length' and 2nd parameter takes 'what to pad')
console.log(message1.padEnd(20, '#'));   // Go to gate 23!######
console.log(message1.padStart(20, '$')); // $$$$$$Go to gate 23!

//masking for creditcard usage
const maskCreditCard = function (number) {
  const str = number + ''; // const str = String(number); // as this also gives same result as above
  // console.log(typeof str); //string (4332252626132195)
  const lastFour = str.slice(-4); // 2195
  return lastFour.padStart(str.length, '*')
}
console.log(maskCreditCard(4332252626132195)); // ************2195

// 'repeat' --> this helps in repeating something multiple times
const message2 = 'Weather is Bad, Stay home safely...!';
console.log(message2.repeat(3).split('!').join('!\n'));

const planesInLine = function (n) {
  console.log(`There are ${n} planes waiting in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(7);
*/


//123: Coding Challenge ##4
// const textarea = document.body.append(document.createElement('textarea'));
// const button = document.body.append(document.createElement('button'));
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(text);
  // console.log(rows);
  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);
    // const output = `${first}${second[0].toUpperCase() + second.slice(1)}`; //(Option-1)
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`; // (Option-2)
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
})


//124. String Methods Practice
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const rows1 = flights.split('+'); 
// console.log(rows1);
for (const row of rows1) {
// const row1 = row.replace(',', '\n');
// const row2 = row1.replace('_', ' ').replace('_', ' ');
// const row3 = row2.replace(';', ' from ').replace(';', ' to ').replace(';', ' (')
// const row4 = row3 + ')'
// console.log(row4);
const row1 = row.replace(',', '\n').replaceAll('_', ' ').replace(';', ' from ').replace(';', ' to ').replace(';', ' (') + ')';
// console.log(row1);
/*
Delayed Departure from fao93766109 to txl2133758440 (11:25)
Arrival from bru0943384722 to fao93766109 (11:45)
Delayed Arrival from hel7439299980 to fao93766109 (12:05)
Departure from fao93766109 to lis2323639855 (12:30)
*/

}

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of rows1) {
  const [type, from, to, time] = flight.split(';');
  // const output = `${type.startsWith('_Delayed') ? '⛔️' : ''}${type.replaceAll('_', ' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')})`;
    const output = `${type.startsWith('_Delayed') ? '⛔️' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);

}

