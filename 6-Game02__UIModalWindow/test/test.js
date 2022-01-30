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

/*
Note: let and const are block-scoped whereas var is function scoped
variables in the global scope can be used from anywhere else in the class
scope chain vs call stack:
scope chain is the order in which functions are written in the code, but it has nothing to do with the order in which the functions are called.
there are 3 types of scopes in JS: 1) global scope 2) scopes defined by functions and 3) scopes defined by blocks.
In JS, we've lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
Every scope always has access to all the variables from all its outer scopes. this is the scope chain.
when a variable is not in the current scope then it looks up in the scope chain until it finds the variable its looking for, this is called variable lookup.
The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope, but instead it will only have access to the
variables of outer scope.
The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.
the scope chain has nothing to do with the order in which functions were called. The order of function calls doesn't affect the scope chain at all.

 Execution context has 3 parts:
 1. Variable environment
 2. Scope chain in the current context
 3. 'this' keyword
Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. i.e, "Variables are lifted to the top of their scope."
Behind the scenes, before execution code is scanned for variable declarations and for each variable, a new property is created in the variable environment object.

Note: why Temporal Dead Zone (TDZ) is introduced in the javascript ?
because it makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
Also, it makes const variables actually work.
Note: why hoisting? because we can use functions before actual declaration (using function declaration syntax). && var hoisting is just a byproduct.
Note: 'window' is the global object of javascript in the browser.

Note: 'this' keyword/variable is a special variable that is created for every execution context (every function). Takes the value of (points to)
the owner of the function in which the 'this' keyword is used.
inside a regular method call 'this' keyword results into undefined value
'this' keyword always points to the object that is calling the method.
'this' is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.
Note: Arrow functions do not get their own this but instead get the surrounding this or lexical thing (i.e, arrow functions would only return the this of their parent function)
Note: in the case of event handler, this refers to the DOM element that the handler is attached to.
Note: this doesn't point to the function itself, and also not to its variable environment.!
Note: the 'arguments' keyword is also only available only for normal functions (function expression and function declaration) but not available for arrow functions.
Note: now we have a more modern way of dealing with multiple parameters in modern javascript ??
but otherwise 'arguments' keyword will do that job.

// how primitive types and objects are stored in memory:
Primitives in JS: Number, String, Boolean, Undefined, Null, Symbol, BigInt
Objects: Object Literal, Arrays, Functions etc.
because of the way they are stored in memory we can call primitives as primitive types and objects and reference types.
JS engine has 2 components: call stack and heap.
call stack is where functions are executed and heap is where objects (reference types) are stored in memory.
primitive types are stored in call stack i.e, primitive types are stored in the execution context in which they are declared.
Note: execution context is run in the call stack.
Note: each primitive value be stored in its own piece of memory in stack.
 */

const mani1 = {
  firstName: 'Manikanta',
    lastName: 'Ganapathiraju',
  year: 1992,
  greetArrow: () => console.log(`Hey ${this.firstName}.`),
  greetExpr: function() {
      console.log(`Hey ${this.firstName}.`)
  },
    family: ['tuyen', 'tu']
};
mani1.greetArrow(); // Hey undefined
mani1.greetExpr(); // Hey Manikanta

// Object.freeze()
const maniCopy = Object.assign({}, mani1); // this will help in creating a new object to the heap. (this will only work for the shallow copy)
maniCopy.lastName = 'Le';
maniCopy.family.push('Thao');
maniCopy.family.push('Vy'); // a deep clone is what we need in this case, and we need to use some external library to leverage that.
console.log('before marriage: ', mani1);
console.log('after marriage: ', maniCopy);

