// Async - await
// make a function to handle error
/*
function handleError(fun) {
    return function (...params) {
      return fun(...params).catch(function (err) {
        console.error(`Oops`, err);
      });
    };
  }
  // re-writing the same above function using arrow functions
  const handleError2 =
    fun =>
    (...params) =>
      // fun(...params).catch(err => console.error(`Oops again!`, err));
      fun(...params).catch(console.error);
  
  const catchErrors1 = fn => {
    return function (req, res, next) {
      return fn(req, res, next).catch(next);
    };
  };
  
  //hot shot
  const catchErrors2 = fn => (req, res, next) => fn(req, res, next).catch(next);
*/

console.log(`-------------START OF PROMISES---------------`);
console.log(`person1: shows ticket`);
console.log(`person2: shows ticket`);

const promiseMyWifeBringTicket = new Promise((resolve, reject) => {
  setTimeout(() => resolve(`ticket`), 4000);
});

// promiseMyWifeBringTicket
//   .then(t => console.log(`person3: shows ${t}.`))
//   .catch(console.error);
// .catch(err => console.error(`oops error occurred: ${err}`));

const getPopCorn = promiseMyWifeBringTicket
  .then(t => {
    console.log(`------START OF POPCORN------`);
    console.log(`wife: I got the tickets`);
    console.log(`hus: we should walk in`);
    console.log(`wife: I am hungry so need some popcorn`);
    console.log(`------END OF POPCORN------`);
    return new Promise((resolve, reject) =>
      resolve(`we got ${t} and popcorn now.`)
    );
  })
  .catch(console.error);

const getButterAndDrink = getPopCorn
  .then(t => {
    console.log(`------START OF BUTTER AND DRINK------`);
    console.log(`hus: Popcorn's ready`);
    console.log(`hus: now shall we go inside`);
    console.log(`wife: I want some butter on my popcorn and a soda`);
    console.log(`------END OF BUTTER AND DRINK------`);
    return new Promise((resolve, reject) =>
      resolve(
        `ok wifu.. now we have ticket, popcorn with butter added and coke too.`
      )
    );
  })
  .catch(console.error);

getButterAndDrink.then(console.log).catch(console.error);

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);
console.log(`-------------END OF PROMISES---------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
