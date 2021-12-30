'use strict';

// using let and const
const foo = function() {
    let local1 = 2;
    {
        const local2 = 3;
        console.log(local2);
    }
    console.log(local1);
    // console.log(local2);
}

foo();
//Note: use 'const' whenever possible and only use 'let' when 'const' is not possible

const factor = 2;
const printIt = (e) => console.log(e * factor);
// Note: using 'const' in JS is similar to using 'final' in java: meaning it's going to protect the reference but not gonna
// protect the object that's been referred to.

printIt(4); // 8

const mani = {name: 'Mani', age: 30};
mani.age = 31; // this works as 'const' can only protect the reference but not the object.
// in order to protect the object, I should use "Object.freeze({})" i.e,
const mani2 = Object.freeze({name: 'Mani', age: 30}); // this is a shallow freeze but not deep freeze.
// mani2.age = 31;  // (this gives a compilation error)

const max = function (a, b) {
    if (a > b) return a;
    return b;
}
console.log(max(1, 7));
// Note: every function in JS is a var-arg function.

// stop using arguments and start using rest
