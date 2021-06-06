'use strict';
// DOM and dom methods are part of Web API's
// Web API's are like libraries that browser implement
// and we can access from our JavaScript code

// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'🥳 Correct Number.!'
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = '88'
// console.log(document.querySelector('.score').textContent);

// console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = '99'
// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = '66'
// console.log(document.querySelector('.guess').value);

//creates a button
var button = document.createElement('button');
button.innerHTML = 'Do Something';

// append somewhere
var body = document.getElementsByTagName('body')[0];
body.appendChild(button);

// add event handler
button.addEventListener('click', function() {
  alert('Just try again, I am busy now.!');
});

document.querySelector('number').addEventListener(function() {

});
 