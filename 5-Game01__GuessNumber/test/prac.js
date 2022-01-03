'use strict';

// console.log(document.querySelector('.message').textContent);

//71. Making Js interact with the web page for the first time.

//72. Selecting and manipulating elements
// document.querySelector('.message').textContent = 'Correct Number.!';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 80;
// document.querySelector('.score').textContent =  50;

// document.querySelector('.guess').value = 77; // with the input field to get value we use this property.
// console.log(document.querySelector('.guess').value); 

//73. Handling Click Events
//Note: this piece of code would select the button element i.e, document.querySelector('.check')
// the first parameter of addEventListener() method is its type.
let secretNum = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

let displayMes = function(message) {
    document.querySelector('.message').textContent  = message;
}

document.querySelector('.check').addEventListener('click', function () {
     //Note: whenever we get something from the UI, examp: from an input field its always a string type.
     const guess = Number(document.querySelector('.guess').value);
    // each time we guess a wrong number the score should decrease
    console.log('highscore val: ', highScore, typeof highScore);

    // when there's no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number, try again';
        displayMes('No Number, try again');
    } else if (guess === secretNum) { // when player wins
        // document.querySelector('.message').textContent = 'Correct Number :)';
        displayMes('Correct Number :)');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; 
        }
        document.querySelector('.number').textContent = secretNum;
        // document.querySelector('.body').style.backgroundColor = "#60b347";
        document.body.style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
    } else if (guess !== secretNum) { // when guess is wrong
        if (score > 1) {   
            // document.querySelector('.message').textContent = (guess > secretNum) ? 'Too high.!': 'Too low.!';
            displayMes(guess > secretNum ? 'Too high.!': 'Too low.!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'Lost the game!';
            displayMes('Lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNum) { // when guess is too high
    //     if (score > 1) {   
    //         document.querySelector('.message').textContent = 'Too high.!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNum) { // when guess is too low 
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low.!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
 })
 //coding challenge-1:
document.querySelector('.again').addEventListener('click', function () {
    // restoring initial values of score and secretNumber variables.
    score = 20;
    secretNum = Number(Math.trunc(Math.random() * 20) + 1);
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMes('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // document.body.style.backgroundColor = "#222";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
})