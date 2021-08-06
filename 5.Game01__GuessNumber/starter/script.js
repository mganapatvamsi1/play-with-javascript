'use strict';
// DOM and dom methods are part of Web API's
// Web API's are like libraries that browser's implement
// and we can access from our JavaScript code

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent); // this means on an element we are finding the text property.
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.guess').value);

// console.log('--------------------------------------------');
// document.querySelector('.message').textContent = 'Correct Number Only :)';
// document.querySelector('.score').textContent = 90;
// document.querySelector('.number').textContent = 99;
// document.querySelector('.guess').value = 74;

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.guess').value);
// we are using 'let' here because 'const' is immutable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = document.querySelector('.score').textContent;
let highestscoreValue = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayNo = function(message) {
    document.querySelector('.number').textContent = message;
}

const displayScore = function(message) {
    document.querySelector('.score').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guessValue = Number(document.querySelector('.guess').value);
    // when player wins
    if(!guessValue) {
        displayMessage('⛔️⛔️ No Number.!');
        // document.querySelector('.message').textContent = '⛔️⛔️ No Number.!';
    } else if (guessValue === secretNumber) { // when player wins 
         displayMessage('🎉🎊 Correct number.!');
        // document.querySelector('.message').textContent = '🎉🎊 Correct number.!';

        // Below line happens when player guesses the correct number
        displayNo(secretNumber);
        if (scoreValue > highestscoreValue) {
            highestscoreValue = scoreValue;
            document.querySelector('.highscore').textContent = highestscoreValue;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guessValue !== secretNumber) { // when guess is not equal to secretNumber
        if (scoreValue > 1) {
            displayMessage(guessValue > secretNumber ? '📈📈 Too high.!' : '📉📉 Too low.!');
            // document.querySelector('.message').textContent = guessValue > secretNumber ? '📈📈 Too high.!' : '📉📉 Too low.!';
            scoreValue--;
            displayScore(scoreValue);
        } else {
            displayMessage('😭😩 You lost the game, good luck next time.!');
            // document.querySelector('.message').textContent = "😭😩 You lost the game, good luck next time.!"
            displayScore(0);
        }
    }
    // when score is less than or equal to '0'
    // if (scoreValue <= 0) {
    //     document.querySelector('.message').textContent = "😭😩 You lost the game, good luck next time.!"
    //     document.querySelector('.score').textContent = 0;
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    scoreValue = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage('Start guessing...');
    displayScore(scoreValue);
    document.querySelector('.number').value = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
