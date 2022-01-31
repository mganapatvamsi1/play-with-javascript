// now doing in async-await way
//Note: async func() returns a promise back.
//IMP: option 1: To run a file locally install `Code Runner Installation` in VSCode and
// use command `control option n` to run a file
//option 2: Use command `node (fileRelativePath)` in terminal
console.log(`-------------START OF ASYNC/AWAIT---------------`);
// console.log(`p1: ticket`);
// console.log(`p2: ticket`);

// const preMovie = async () => {
//   const promiseMyWifeBringTicket = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`ticket`), 4000);
//   }).catch(reject => console.error(reject));
//   const getPopCorn = new Promise((resolve, reject) => resolve(`popcorn`)).catch(
//     reject => console.error(reject)
//   );
//   const getButterAndDrink = new Promise((resolve, reject) =>
//     resolve(`ok wifu.. now we have ticket, popcorn with butter and coke too.`)
//   ).catch(reject => console.error(reject));

//   let ticket = await promiseMyWifeBringTicket;
//   console.log(`------START OF POPCORN------`);
//   console.log(`wife: I got the ${ticket}`);
//   console.log(`hus: we should walk in`);
//   console.log(`wife: I am hungry so need some popcorn`);
//   console.log(`------END OF POPCORN------`);

//   let popcorn = await getPopCorn;
//   console.log(`------START OF BUTTER AND DRINK------`);
//   console.log(`hus: i got ${popcorn}`);
//   console.log(`hus: now shall we go inside`);
//   console.log(`wife: I want some butter on my popcorn and a soda`);
//   console.log(`------END OF BUTTER AND DRINK------`);

//   let bufferAndDrink = await getButterAndDrink;
//   console.log(`hus: ${bufferAndDrink}`);

//   return ticket;
// };

// preMovie()
//   .then(message => console.log(`p3: ${message}`))
//   .catch(console.error);

// console.log(`p4: ticket`);
// console.log(`p5: ticket`);

// if we want to tweak this a bit by resolving all promises at once then we can do as below:
console.log(`p1: ticket`);
console.log(`p2: ticket`);

const preMovie = async () => {
  const promiseMyWifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`ticket`), 4000);
  }).catch(reject => console.error(reject));
  const getPopCorn = new Promise((resolve, reject) => resolve(`popcorn`)).catch(
    reject => console.error(reject)
  );
  const getButter = new Promise((resolve, reject) => resolve(`butter`)).catch(
    reject => console.error(reject)
  );
  const getCoke = new Promise((resolve, reject) => resolve(`coke`)).catch(
    reject => console.error(reject)
  );
  const getCandy = new Promise((resolve, reject) => resolve(`candy`)).catch(
    reject => console.error(reject)
  );
  const getPizza = new Promise((resolve, reject) => resolve(`pizza`)).catch(
    reject => console.error(reject)
  );

  let ticket = await promiseMyWifeBringTicket;

  let [popcorn, butter, coke, candy, pizza] = await Promise.all([
    getPopCorn,
    getButter,
    getCoke,
    getCandy,
    getPizza,
  ]);

  console.log(`${popcorn}--${butter}--${coke}--${candy}--${pizza}`);

  return ticket;
};

preMovie()
  .then(message => console.log(`p3: ${message}`))
  .catch(console.error);

console.log(`p4: ticket`);
console.log(`p5: ticket`);
