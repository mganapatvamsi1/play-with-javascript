'use strict';

//DE-STRUCTURING ARRAYS:
//Note: destructuring is an ES6 feature and is a way of un-packing values from an array or value into separate values
const arr = [2, 4, 6, 8];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a, b, c, d);
// now using de-structuring we can use all these above 4 values at the same time as below:
const [e, f, g, h] = arr; // this is called de-structuring (un-packing) assignment
console.log(e, f, g, h);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};
const [firstCategory, secondCategory] = restaurant.categories;
console.log(firstCategory, secondCategory); // Italian Pizzeria
let [firstMenu, , thirdMenu] = restaurant.starterMenu; // because of keeping space it would skip that element from the middle
console.log(firstMenu, thirdMenu); // Focaccia Garlic Bread
// switch variables (firstMenu and thirdMenu items) without de-structuring:
// const tempVar = firstMenu;
// firstMenu = thirdMenu;
// thirdMenu = tempVar;
// console.log(firstMenu, thirdMenu); // Garlic Bread Focaccia
// switch variables (firstMenu and thirdMenu items) with de-structuring:
[firstMenu, thirdMenu] = [thirdMenu, firstMenu]; // re-assigning the values of these 2 variables without using any temporary variable in the middle
console.log(firstMenu, thirdMenu); // Garlic Bread Focaccia

//Note: another trick with de-structuring is:
// We can have a function return an array, and then we can immediately de-struct the result
// into different variables, which allows us to return multiple values from a function.
// Receiving 2 return values from a function
console.log(restaurant.order(0, 2)); // ["Focaccia", "Risotto"]
const [starter, main] = restaurant.order(0, 2); // de-structuring assignment
console.log(starter, main); // Focaccia Risotto
console.log(restaurant.order(2, 0)); // ["Garlic Bread", "Pizza"]
const [starterNew, mainNew] = restaurant.order(2, 0); // de-structuring assignment
console.log(starterNew, mainNew); // Garlic Bread Pizza

// nested de-structuring
const nestedArr = [2, 4, [5, 6]];
// how to get [2, [5, 6]]
const [firstValue, , innerArr] = nestedArr;
console.log(firstValue, innerArr); // 2 > Array(2) [5, 6]
// what if we want all the values inside the array
const [i, , [j, k]] = nestedArr;
console.log(i, j, k); // 2 5 6

// DEFAULT VALUES: We can also set default values for the variables when we extract them
// as that would be very useful in the case when we don't know the length of the array.
const [p, q = 1, r = 1] = [5, 10];
console.log(p, q, r); // 5 10 1


//DE-STRUCTURING OBJECTS:
// to desturuct objects we use curly braces
const restaurantObj = {
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
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    // orderDelivery: function(object) {
    //     console.log(object);
    // }
    orderDelivery: function ({mainIndex = 2, starterIndex = 1, address, time = '17:50'}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },
    orderPasta: function (ingredient1, ingredient2, ingredient3) {
        console.log(`Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}.`);
    }
};

// const {name, openingHours, categories} = restaurantObj;
// console.log(name, openingHours, categories);
const {name: restaurantName, openingHours: restaurantOpeningHours, categories: restaurantCategories} = restaurantObj;
console.log(restaurantName, restaurantCategories, restaurantOpeningHours);

const {menu: myMenu = [], starterMenu: starters = []} = restaurantObj;
// default values: providing default values in case if the provided field is not present
console.log(myMenu, starters); // Array(0) [] Array(4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
//note: without keeping this default (= []) we would get undefined as the result in case if we don't have any value for that variable

// Mutating variables while de-structuring objects
let a1, b1 = 1;
const obj = {a1: 10, b1: 20, c1: 30};
({a1 = [], b1 = []} = obj);  //  to wrap de-structuring assignment into parenthesis
console.log(a1, b1); // 10  20

// nested objects destructuring
let {openingHours: {thu, fri, sat}} = restaurantObj;
console.log(thu, fri, sat);

let open, close;
({openingHours: {thu: {open, close}, fri: {open, close}, sat: {open, close}}} = restaurantObj);
console.log(open, close);


const {thu: thursday} = restaurantObj.openingHours;
console.log(thursday);
const {thu: {open: thuOpening, close: thuClosing}} = restaurantObj.openingHours;
console.log(thuOpening, thuClosing);


const {fri: friday} = restaurantObj.openingHours;
console.log(friday);
const {fri: {open: friOpening, close: friClosing}} = restaurantObj.openingHours;
console.log(friOpening, friClosing);

const {sat: saturday} = restaurantObj.openingHours;
console.log(saturday);
const {sat: {open: satOpening, close: satClosing}} = restaurantObj.openingHours;
console.log(satOpening, satClosing);

const testing1 = restaurantObj.orderDelivery({
    time: '17:50',
    address: '403 Exeter St, Bridgeport, CT, 63303',
    mainIndex: 2,
    starterIndex: 1
});
const testing2 = restaurantObj.orderDelivery({
    address: '403 Exeter St, Bridgeport, CT, 63303'
});
console.log(testing1 === testing2); //true


// SPREAD OPERATOR
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const final = [...first, ...second];
console.log(final);
const arrNew = [7, 8, 9];
const oldStyleNewArr = [1, 2, arrNew[0], arrNew[1], arrNew[2]];
const newArr = [1, 2, ...arrNew]; // Spread Operator
console.log(oldStyleNewArr);
console.log(newArr); // Array(5) [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurantObj.mainMenu, 'ChickenBiryani', 'PaneerMasala']; // Here we are writing a new array but using the 'spread operator' syntax.
console.log(newMenu);
console.log(...newMenu);
//Imp: Spread Operator is similar to destructuring because it also helps in finding elements out of arrays.
// But the big difference is the Spread Operator takes all the elements from the array, and it won't create
// new variables and as a consequence we can only use it in places where we would use values separated by commas.

// shallow copies of array use-case
const mainMenuCopy = [...restaurantObj.mainMenu];
console.log(mainMenuCopy);
// join 2 arrays (combination of mainMenu and starterMenu)
const totalMenu = [...restaurantObj.starterMenu, ...restaurantObj.mainMenu];
console.log(totalMenu);

//Note: Spread operator works on all iterables: Iterables are things like all arrays, strings, maps, sets but not objects
//note: i.e, most of the built-in objects are iterables but not objects
const firstNameStr = 'Manikanta';
const allLetters = [...firstNameStr, ' ', '.G'];
console.log(allLetters);
//Note: Multiple values separated by a comma are only expected (We can only use spread operator)
// when we pass arguments (values) to a function or when we built a new array.
// console.log(`${...firstNameStr} Ganapathiraju`);

// const ingredients = [
//     prompt('Let\'s make pasta! Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

//old way of doing things:
// restaurantObj.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// the same above line could be leveraged using spread operator as:
// restaurantObj.orderPasta(...ingredients);

// Since 2018 spread operator also works on objects, even though objects are not iterables.
const newRestaurantObj = {zip: 98109, ...restaurantObj, phone: 2032437208, city: 'Seattle', state: 'WA'};
console.log(newRestaurantObj);

// shallow copy objects
const restaurantObjCopy = {...restaurantObj};
restaurantObjCopy.name = 'Bawarchi';
console.log(restaurantObjCopy.name); // Bawarchi
console.log(restaurantObj.name); // Classico Italiano


// Rest Pattern and Parameters
// Rest Patterns looks similar to the Spread Operator as it has similar syntax with 3 dots '...'
// but it does the opposite of the spread operator.i.e., Rest Patterns are used to collect multiple elements
// and condense them into an array, to re-iterate spread operator is to un-pack an array
// whereas Rest patterns are used to pack elements to an array.

//PART-1: De-Structuring
// SPREAD because its on the right-hand side of '='
const arrSpread = [1, 2, ...[3, 4]];

// REST because on the left side of '='
const [one, two, ...others] = [1, 2, 3, 4, 5];
console.log(one);
console.log(two);
console.log(others);
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
const [pizza, , risotto, ...allStarters] = [...restaurantObj.mainMenu, ...restaurantObj.starterMenu];
console.log(pizza); // Pizza
console.log(risotto); // Risotto
console.log(allStarters); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//IMP Note: the REST pattern must always be the last element in the de-structuring assignment otherwise JS won't know
// upto when it should keep collecting the rest of the array.
//IMP Note: There should only be 1 REST pattern in any de-structuring assignment.

// Objects
// collect only weekend (sat) in our open and close timings object
const {sat: satNew, ...weekdays} = restaurantObj.openingHours;
console.log(satNew);  // Object {open: 0, close: 24}
console.log(weekdays); // Object {thu: Object, fri: Object}

//PART-2: Functions
const addUsingArguments = function () {
// function addUsingArguments() {
    // console.log(arguments);
    let sum = 0;
    for (let i1 = 0; i1 < arguments.length; i1++) {
        sum += arguments[i1];
    }
    console.log(sum);
    return sum;
}
addUsingArguments(2, 3); // 5
addUsingArguments(5, 1, 4); // 10
addUsingArguments(10, 20, 30, 40, 50); // 150
addUsingArguments(5, 15, 25, 35, 45, 55, 65, 75, 85); // 405

//IMP Note: In order to use a function that accepts any no of parameters in JS we have to use:
// either of parameters option (ES5) or REST pattern (ES6).
//IMP  Note:  With spread operator we expand, whereas with REST pattern syntax we compress.

const addUsingRest = function (...numbers) {
    // console.log(numbers); // here the REST pattern is packing all the numbers into 1 array.
    let sum = 0;
    for (let r1 = 0; r1 < numbers.length; r1++) {
        sum += numbers[r1];
    }
    console.log(sum);
    return sum;
}
addUsingRest(2, 3); // 5
addUsingRest(5, 1, 4); // 10
addUsingRest(10, 20, 30, 40, 50); // 150
addUsingRest(5, 15, 25, 35, 45, 55, 65, 75, 85); // 405

const x = [23, 5, 7];
// passing the above values as parameters to thr add function (by using SPREAD operator)
addUsingRest(...x); // 35

const restaurantObjRest = {
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
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    // orderDelivery: function(object) {
    //     console.log(object);
    // }
    orderDelivery: function ({mainIndex = 2, starterIndex = 1, address, time = '17:50'}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },
    orderPasta: function (ingredient1, ingredient2, ingredient3) {
        console.log(`Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}.`);
    },
    // atleast 1 ingredient is mandatory and remaining are optional.
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log('main: ', mainIngredient);
        console.log('others: ', otherIngredients);
    }
};

restaurantObjRest.orderPizza('mushrooms', 'onions', 'olives', 'cheese', 'pizza');
// Note: Here the first argument would be considered as the mainIngredient i,e., 'mushrooms' in this case and
// remaining would come under otherIngredients i.e., because of REST Pattern syntax.
restaurantObjRest.orderPizza('butter');
//IMP Note: the SPREAD syntax is used on the right side where usually we use values separated by comma whereas
// we use REST Pattern syntax on the left side where we use variable names separated by commas.


// Short Circuiting (&& and ||):
// Note: Up until this point we've only used logical operators to combine boolean values but the truth is
// we can do a lot more with '&&' and '||' operators.

// using non-boolean values as operands
// Result of '&&' or/and '||' operators doesn't always have to be boolean.
//Imp Note: we can use any datatype, return any data type, and they can do short-circuiting (short-circuit evaluation)
// In the case of '||' (OR) if the first value is a truthy value, it would immediately return the first truthy value
// which in this case is the first value.
console.log('---------OR---------');
console.log(17 || 'ManiG'); // 17
console.log(17 && 'ManiG'); // ManiG

restaurantObjRest.numGuests = 10;
const restaurantGuests1 = restaurantObjRest.numGuests ? restaurantObjRest.numGuests : 5;
console.log(restaurantGuests1); // 10
const restaurantGuests2 = restaurantObjRest.numGuests || 5; // this is a better way to follow in this case.
console.log(restaurantGuests2); // 10
//Imp Note: the above 2 cases won't work when the numGuests is '0' as zero is a falsy value, so it would ignore, but we
//want to consider that (so in the case of '0' we shouldn't use this but follow another approach from a later video)
console.log(null || 0); // 0
console.log(null || 0 || 'raj'); // raj
console.log('---------AND---------');
//Note: AND operator short-circuits as soon as the first value is falsy and immediately returns that falsy
// value without evaluating the second value.
console.log(0 && 'Mani'); // 0
//Note: when the first value is true then the evaluation continues, and it returns the last truthy value of evaluation
// (if there are multiple values provided)
console.log('Raj' && 'Mani'); // Mani
console.log('Howdy' && 23 && 57 && true && null && 'mani'); // null
console.log(null && 0); // null
console.log(null && 0 && 'raj'); // null
//traditional way
if (restaurantObjRest.orderPizza) {
    restaurantObjRest.orderPizza('CHEESE', 'BACON', 'PINEAPPLE');
}
// using shortCircuiting 'AND'
restaurantObjRest.orderPizza && restaurantObjRest.orderPizza('CHEESE', 'BACON', 'PINEAPPLE');
//Summary: OR operator would return the first truthy value of all operands or the last value if all operands are falsy.
// whereas AND operator would return the first falsy value or the last value if all values are truthy.


// Nullish Coalescing Operator (??)
restaurantObjRest.numGuests = 0;
const restaurantGuestsWrong = restaurantObjRest.numGuests || 5;
console.log(restaurantGuestsWrong); // 5 (this should be '0' but short-circuited 'OR' operator is giving wrong result)
const restaurantGuestsRight = restaurantObjRest.numGuests ?? 5;
console.log(restaurantGuestsRight); // 0 (this is the correct answer)
// Imp Note: this worked because nullish Coalescing Operator works with the concept of nullish values
// instead of falsy values  and Nullish values are null and undefined but don't include 0 and '' (empty string)
//i.e, this operator would only check the second condition in the case of null or undefined values as first condition.


// Logical Assignment Operators
const restaurant1 = {
    name: 'SarvanaBavan',
    noOfGuests: 20
};
const restaurant2 = {
    name: 'Mirchi',
    owner: 'ShivaNaidu'
};
// to set a default no of guests (10) for all the restaurant objects that do not have that property
const restaurant1GuestsA = restaurant1.noOfGuests || 10; // using short-circuited OR operator
const restaurant1GuestsB = restaurant1.noOfGuests ?? 10;
console.log(restaurant1GuestsA); // 20
console.log(restaurant1GuestsA); // 20
const restaurant2GuestsA = restaurant2.noOfGuests || 10; // using short-circuited OR operator
const restaurant2GuestsB = restaurant2.noOfGuests ?? 10; // using Nullish Coalescing operator
console.log(restaurant2GuestsA); // 10
console.log(restaurant2GuestsB); // 10

//1. OR assignment operator: this operator assigns value to a variable if that variable is currently falsy.
// restaurant1.noOfGuests = restaurant1.noOfGuests || 100;
restaurant1.noOfGuests ||= 100;
restaurant2.noOfGuests ||= 50;
console.log(restaurant1.noOfGuests); // 20
// restaurant2.noOfGuests = restaurant2.noOfGuests || 50;
console.log(restaurant2.noOfGuests); // 50
// this above works perfectly well other than in the case of '0' value i.e,
restaurant1.noOfGuests = 0;
console.log('res1 guests: ', restaurant1.noOfGuests); // res1 guests:  0
// this gives wrong value of 100 instead of taking 0.
// to fix this we have 2. i.e., logical Nullish Assignment operator (NULL OR UNDEFINED)

restaurant1.noOfGuests ??= 100;
restaurant2.noOfGuests ??= 50;
console.log('res1 updated guests: ', restaurant1.noOfGuests); // res1 updated guests:  0
console.log('res2 updated guests: ', restaurant2.noOfGuests); // res2 updated guests:  50
//NOTE: Nullish Assignment Operator will assign a value to a variable if that exact variable is currently nullish.

//3. AND assignment operator: this operator assigns value to a variable if that variable is currently truthy.
// if we have a valid restaurant owner then replace that name with 'anonymous'

// restaurant1.owner = restaurant1.owner && 'ANONYMOUS';
restaurant1.owner &&= '<ANONYMOUS>';
console.log(restaurant1.owner); // undefined
console.log(restaurant1);

// restaurant2.owner = restaurant2.owner && 'ANONYMOUS';
restaurant2.owner &&= '<ANONYMOUS>';
console.log(restaurant2.owner); // <ANONYMOUS>
console.log(restaurant2);


//for-of loop
const menuNew = [...restaurantObjRest.starterMenu, ...restaurantObjRest.mainMenu];
console.log(menuNew);
// traditional for loop
for (let j = 0; j < menuNew.length; j++) {
    console.log('individual menu: ', menuNew[j]);
}
//for-of loop
for (const item of menuNew) {
    console.log('menu item: ', item); // to get current item
}
for (const elem of menuNew.entries()) {
    // console.log(elem);
    console.log(`${elem[0] + 1}: ${elem[1]}`);
}
console.log('-----------------------------');
for (const [index, value] of menuNew.entries()) {
    // console.log(elem);
    console.log(`${index + 1}: ${value}`);
}
console.log('-----------------------------');


// Enhanced Object Literals
const weekdaysNew = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//3. now we can compute (calculate) property names instead of writing them out manually
// if we can see below the sat is computed to day-6.
const openingHours = {
    // thu: {
    [weekdaysNew[3]]: {
        open: 12,
        close: 22,
    },
    // fri: {
    [weekdaysNew[4]]: {
        open: 11,
        close: 23,
    },
    [weekdaysNew[5]]: {
        // [`day-${5 + 1}`]: {
        open: 0,
        close: 24,
    },
};
const order = function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
};
const resNew = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours,
    //ES6 enhanced object literal syntax: this will take this 'openingHours' and put it into the resNew object
    //1.
    openingHours,
    order,
    //2. writing methods: In ES6 we no longer have to create a property and set it to a function expression like how we
    // have been doing it till now i.e, now we no longer have to mention function to the method name anymore.
    orderDelivery({mainIndex = 2, starterIndex = 1, address, time = '17:50'}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },
    orderPasta(ingredient1, ingredient2, ingredient3) {
        console.log(`Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}.`);
    },
    // atleast 1 ingredient is mandatory and remaining are optional.
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log('main: ', mainIngredient);
        console.log('others: ', otherIngredients);
    }

    //3. now we can compute (calculate) property names instead of writing them out manually (example is above).

};
console.log(resNew);


//Optional Chaining (?.)
console.log(resNew.openingHours);
console.log(resNew.openingHours?.fri); // {open: 11, close: 23}
console.log(resNew.openingHours?.fri?.open); // 11
console.log(resNew.openingHours?.fri?.close); // 23
//traditional way
if (resNew.openingHours && resNew.openingHours.mon) console.log(resNew.openingHours.mon.open);
// using optional chaining (ES2020)
// while Using optional chaining if certain property is not exists then it returns 'undefined'
console.log(resNew.openingHours?.mon); // undefined
console.log(resNew.openingHours?.mon?.open); // undefined
console.log(resNew.openingHours?.sat?.open); // undefined
console.log(resNew.openingHours?.sat?.close); // undefined

console.log(resNew.openingHours);
const daysNew = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//loop over the array 'daysNew' and log onto screen whether restaurant is open/closed on each of the days.
for (const day of daysNew) {
    // console.log(day);
    // console.log(`${day}`); // this and the above line both give the same result.
    //Very Imp Note: If we want to use variable name as property name then we need to use brackets notation:

    // const open = resNew.openingHours[day]?.open;
    // const close = resNew.openingHours[day]?.close;
    // (resNew.openingHours[day]?.open ?? 'close') && console.log(`On ${day},
    // we open at ${open} and close at ${close}.`);
    //opened && console.log(`On ${day}, we open at ${opened}.`);

    const opened = resNew.openingHours[day]?.open ?? 'closed';
    const close = resNew.openingHours[day]?.close ?? 'closed';
    console.log(`On ${day}, we open at ${opened} and close at ${close}.`);
}

//Methods: Optional chaining also work with methods
console.log(resNew.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']
console.log(resNew.mani?.(0, 1) ?? 'Method does not exist'); // Method does not exist
// as there's no method with the name 'mani' so it would print Method does not exist'.

//Optional chaining even works on arrays
// could be used to check if an array is empty.
const users = [{
    name: 'ManikantaG', email: 'test@gmail.com'
}];
const users1 = [{}];
console.log(users[0]?.name ?? 'User array is empty.'); // ManikantaG
console.log(users1[0]?.name ?? 'User array is empty.'); // User array is empty.

// the above lines without optional chaining should be done this way i.e,
if (users.length > 0) console.log(users[0]?.name);
else console.log('User array is empty.');
//Note: we can use this optional chaining operator in combination with the nullish Coalescing operator
// so that we can actually do something in case we don't get any result from the object or array from the left-hand side.


// Looping Objects: Object keys, values and entries:

// PROPERTY NAMES
console.log('openingHours keys: ', Object.keys(openingHours));
// to get the keys under openingHours object
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days i.e, `;
for (const day of properties) {
    // console.log(day); // ['thu', 'fri', 'sat']
    openStr += `${day}, `;
}
console.log(openStr);

// PROPERTY VALUES
let propertyValues = Object.values(openingHours);
console.log('openingHours values: ', Object.values(openingHours));
for (const time of propertyValues) console.log(time);
for (const {open: openTime, close: closeTime} of Object.values(openingHours)) {
    console.log(openTime);
    console.log(closeTime);
}

//Note: entries() is NAMES + VALUES together.
//ENTRIES
const objectEntries = Object.entries(openingHours);
console.log(objectEntries);
for (const [day, {open, close}] of objectEntries) {
    // console.log(day, open, close);
    console.log(`On ${day}, we are open at ${open} and close at ${close}.`);
}



// SETS
const testArr = [1, 3, 5, 3, 5, 1, 7, 7, 9, 'Mani', 'Mani',  'Mani', 9, 9, 1, 3];
const numbersSet = new Set(testArr);
console.log(numbersSet); // {1, 3, 5, 7, 9, 'Mani'};
const nameSet = new Set('ManiG'); // Set(5){'M', 'a', 'n', 'i', 'G'}
console.log(numbersSet.size); //6
console.log(nameSet.size); //5
//to check if a certain element is in a set:
//Note: this 'has()' method in sets is similar to the 'includes()' method in arrays
console.log(numbersSet.has(1)); //true
console.log(numbersSet.has(10)); //false
//adding new element to a set
numbersSet.add(11);
console.log(numbersSet); // {1, 3, 5, 7, 9, 'Mani', '11'};
numbersSet.add(11);
console.log(numbersSet); // {1, 3, 5, 7, 9, 'Mani', '11'}; // as set doesn't have duplicates
//deleting elements
numbersSet.delete(11);
console.log(numbersSet); // {1, 3, 5, 7, 9, "Mani"}
numbersSet.delete("Mani");
console.log(numbersSet); // {1, 3, 5, 7, 9}
// numbersSet.clear();
// console.log(numbersSet); // Set(0){size: 0}

// Sets are also iterables
for (const num of numbersSet) console.log(num);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter', 'Manager', 'Chef'];
// Now in order to find the various unique positions (staff's):
const uniqueStaff = new Set(staff);
console.log(uniqueStaff); // Set(3){'Waiter', 'Chef', 'Manager'}

// In order to keep a set into an array
const uniqueStaffArray = [...uniqueStaff]; // here the spread operator takes all the elements
// out of the iterables and writes them comma separated
console.log(uniqueStaffArray); // (3)['Waiter', 'Chef', 'Manager']


//MAPS Fundamentals (another JS Datastructure): used to map values to keys.
// In Objects, keys are always 'string' type whereas in maps the keys can be of any type.
const restMap  = new Map();
restMap.set('name', 'Bawarchi');
console.log(restMap); // Map(1){'name' => 'Bawarchi'}
// we can append and add multiple elements in the same go.
//Also, calling the set()  method creates  and returns the updated map.
restMap.set(1, 'Seattle, WA').set(2, 'Saint Charles, MO').set(3, 'Palo Alto, CA');
console.log(restMap); // Map(4){'name' => 'Bawarchi', 1 => 'Seattle, WA', 2 => 'Saint Charles, MO', 3 => 'Palo Alto, CA'}
restMap.set(true, 'We are open').set(false, 'we are closed')
       .set('open', 11).set('close', 23);
console.log(restMap.get('name')); //Bawarchi

const time = 21;
let newVariable = restMap.get(time > restMap.get('open') &&  time <restMap.get('close'));
console.log(newVariable);
// as the variable inside the get is true, so it would return the value corresponding to the true key in the map.

// to check if a map contains a certain key or not:
console.log(restMap.has(1)); // true
console.log(restMap.has(10)); // false
//deleting elements from a map i.e., by deleting key from a map.
console.log(restMap);
console.log(restMap.size); // 8
console.log(restMap.delete(2));
console.log(restMap);
console.log(restMap.size); // 7

// restMap.clear(); // this clears the whole map and make its size to 0.
 const tempArr = [1, 2, 3]; // we need to create a variable so that wherever it would be used it would be
// referred to the same place in memory.
 restMap.set(tempArr, 'test array with 3 elements.');
 restMap.set(document.querySelector('h1'), 'Main Heading');
 console.log(restMap.get(tempArr)); // test array with 3 elements.
 console.log(restMap);


//Maps: Iteration
// creating a new map in another approach
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉 🎉'],
    [false, 'Try Again 😟']
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
// this syntax is similar to the syntax of the question being outputted above.
const hours = new Map(Object.entries(openingHours));
console.log(hours);

//question app
console.log(question.get('question'));
for (const [key, value] of question) {
    // console.log(key);
    // console.log(value);
    // only want to print if the key is a number
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt('Your answer?'));
const answer = 3; // hardcoded temporarily to avoid entering prompt values for the timebeing.
console.log(answer);

answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));
console.log(question.get(question.get('correct') === answer));
// the above 2 lines would do the same thing.

//converting a map back to an array
console.log('map: ',question);
console.log('converted map to array: ',[...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


// which data structures to use?
// we have 4 Data Structures to choose for now on (built-in): Arrays, Objects, Sets and Maps


//Working with Strings - Part1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); //A
console.log('plane'[0]); //p
console.log(airline.length); //16
console.log('plane'.length); //5

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('gal')); //13

console.log(airline.slice(4)); //Air Portugal => meaning starting from index 4, take the whole string and return.
// note: this slice() operation doesn't change the actual underlying string but instead will create a new string whenever we perform a slice() operation.
console.log(airline.slice(4, 7)); // Air => the end value is not included in the string.
// Also, the length of the extracted string is always end - beg index i.e, (7 - 4) = 3 in this case.

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
console.log(airline.slice(-2)); //al => picks the last 2 characters

// Write a function that receives an airplane seat and logs to the console whether it's a middle seat or not
// B and E are the middle seats, and we need to check the last character
//  const seatSelected = seat.has('B') || seat.has('E') ? 'Its a middle seat': 'It\'s not a middle seat';
const checkMiddleSeat = function(seat) {
     const seatSelected = seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'Its a middle seat': 'It\'s not a middle seat';
    console.log(`${seatSelected}`);
}
checkMiddleSeat('11B')
checkMiddleSeat('15F')
checkMiddleSeat('17E')
checkMiddleSeat('33A')

// Whenever we call a method on a string, JavaScript will automatically (behind the scenes) convert that string primitive to a string object
// with the same content, and it's on that object where the methods are called and this process is called boxing.
console.log(new String('maniG')); // this conversion is what JS does behind the scenes when we call a method on a string and when the
// operation is done the object is converted back to a regular string primitive. All string methods return a primitive even if called on a string object
console.log(typeof new String('maniG')); // object
console.log(typeof new String('maniG').slice(1)); // string


//Working with Strings - Part2
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
console.log(airline.toLowerCase()); //tap air portugal

// fix capitalization in a name by only having the first word as capital by keeping rest all words as small.
const passenger = 'gAnApaThiRaJu';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Ganapathiraju

// function that takes in any name and returns the correct name.
const passengerCorrectName = function(name) {
    const lower = name.toLowerCase();
    // const correctName = lower[0].toUpperCase() + lower.slice(1);
    // console.log(correctName);
    return lower[0].toUpperCase() + lower.slice(1);
}
console.log(passengerCorrectName('gAnApaThiRaJu')); //Ganapathiraju

// Comparing user emails
const email = 'test@rajaryan.io';
const loginEmail = '  TEsT@RaJarYan.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail); //true

// replace parts of a string
const priceGB = '288,50P';
const changeToDollarSymbol = priceGB.replace('P', '$').replace(',', '.');
console.log(changeToDollarSymbol); //288.50$
//Note: 'replace()' replace only replaces the first occurrence of the given word but not all occurrences. (need to use 'replaceAll()' to make it work)
const announcement = 'All passengers come to boarding door 23, Boarding door 23 i.e, door 23!';
//Need to change the word 'door' to 'gate'
console.log(announcement.replace('door', 'gate')); //All passengers come to boarding gate 23, Boarding door 23 i.e, door 23!
console.log(announcement.replace(/door/g, 'gate')); //All passengers come to boarding gate 23 i.e, gate 23!
// this last one is using regular expression
console.log(announcement.replaceAll('door', 'gate')); //All passengers come to boarding gate 23 i.e, gate 23!

//Booleans i.e, 3 methods: 'includes()', 'startsWith()' and 'endsWith()'
const planeNew = 'A320neo';
console.log(planeNew.includes('A320')); //true
console.log(planeNew.includes('boeing')); //false
console.log(planeNew.startsWith('Air')); //false
console.log(planeNew.endsWith('neo')); //true

//Practice Exercise
const checkBaggage = function(items) {
    const baggageToLowerCase = items.toLowerCase();
    // check if baggage has knife or gun, then don't allow passenger onto flight
    baggageToLowerCase.includes('knife') || baggageToLowerCase.includes('gun') ? console.log(`You are not allowed to get onto flight.`) :
        console.log(`Welcome aboard.`);
}
checkBaggage(`I have a laptop, some food and a pocket Knife.`);
checkBaggage(`I have socks and camera.`);
checkBaggage(`Got some snacks and a Gun for protection`);


//Working with Strings - Part3
//split() and join()
// split() allows us to split a string into multiple parts based on a divider string.
console.log('a+very+pretty+looking+girl'.split('+')); //['a', 'very', 'pretty', 'looking', 'girl']
console.log('Manikanta Ganapathiraju'.split(' ')); //['Manikanta', 'Ganapathiraju']
// de-structuring
const [firstName, lastName] = 'Manikanta Ganapathiraju'.split(' ');
console.log(firstName, lastName); //Manikanta Ganapathiraju

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
//Note: we can only apply join() method on an array.
console.log(newName); //Mr. Manikanta GANAPATHIRAJU => (we got one entire string using join)

// capitalize the first letter of each word
const capitalizeName = function(name) {
    const updatedName = name.split(' ');
    const namesUpper = [];
    // for (const word of updatedName) namesUpper.push(word[0].toUpperCase() + word.slice(1));
    // for (const word of updatedName) namesUpper.push(word[0].toUpperCase() + word.substring(1));
    for (const word of updatedName) namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
    // all the above 3 above ways os doing would also do the same job, we can use whatever we could like
    const finalName = namesUpper.join(' ');
    console.log(finalName);
    return finalName;
}
capitalizeName('manikanta varahala venkatapathi raju ganapathiraju');
capitalizeName('raj aryan malhotra');

//padding a string:
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23!
console.log(message.padEnd(25, '-'));  //Go to gate 23!-----------

// implement a func. that does the masking of a credit card number by only showing the last 4 digits
const maskCreditCard = function(number) {
    // const numToStr = String(number);
    const numToStr = number + ''; // both this and the above line would do the same thing
    const lastFourDigits = numToStr.slice(-4);
    // const finalSecureCardNum = lastFourDigits.padStart(16, '*');
    // const finalSecureCardNum = lastFourDigits.padStart(numToStr.length, '*');
    // console.log(finalSecureCardNum);
    // return finalSecureCardNum;
    return lastFourDigits.padStart(numToStr.length, '*');
}
console.log(maskCreditCard(4722426389861804)); //************1804
console.log(maskCreditCard(5152448174093852)); //************3852
console.log(maskCreditCard(6011337017690108)); //************0108
console.log(maskCreditCard(343603293218902));  //***********8902

//Repeat
const message2 = 'Bad weather... All Departures Delayed...  ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

//String methods practice
//DESIRED OUTPUT
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
 _Delayed_Departure fao93766109 txl2133758440 11:25
 _Arrival bru0943384722 fao93766109 11:45
 _Delayed_Arrival hel7439299980 fao93766109 12:05
 _Departure fao93766109 lis2323639855 12:30
 */
const getCode = str => str.slice(0,3).toUpperCase();
for (const flight of flights.split('+')) {
    // using destructuring
    const [type, from, to, time] = flight.split(';');
    const updatedType = type.replaceAll('_', ' ');
    const updatedFrom = getCode(from);
    const updatedTo = getCode(to);
    const updatedTime = time.replace(':', 'h');
    const output = `${updatedType.includes('Delayed') ? '🔴': '       '}${updatedType} from ${updatedFrom} to ${updatedTo} (${updatedTime})`.padStart(35);
    console.log(output);
    // return output;
}










