const flipACoin = new Promise((resolve, reject) => {
// resolve();
reject();
}).then(() => {
    // to do something after resolve() has been called
    // console.log(`this is positive case: ${resolve}`);
    console.log(`this is positive case: `);
}).catch(() => {
    // to do something after reject() has been called
    // console.log(`this is negative: ${reject}`);
    console.log(`this is negative:`);
}).finally(() => {
    // to do something either way
    console.log(`this gets printed either way:`);
});

console.log(flipACoin);