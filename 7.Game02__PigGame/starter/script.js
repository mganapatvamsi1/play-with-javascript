'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScore, activePlayer, playing, scores;

// Starting conditions
const init = function () {
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    diceElement.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();

const displayScores = function (message) {
    document.getElementById(`score--${activePlayer}`).textContent = message;
}
const displayCurrents = function (message) {
    document.getElementById(`current--${activePlayer}`).textContent = message;
}
function switchPlayer() {
    displayCurrents(0);
    activePlayer = (activePlayer === 0) ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// Rolling dice functionality
buttonRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generating a random dice roll
        let randomDiceRoll = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${randomDiceRoll}.png`;

        //3. checked the rolled 1: if true, 
        if (randomDiceRoll !== 1) {
            // score0Element.textContent = randomDiceRoll;
            // document.getElementById(`score--${activePlayer}`).textContent = randomDiceRoll;
            // displayScores(randomDiceRoll);
            currentScore += randomDiceRoll;
            // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            displayCurrents(currentScore);
        } else { // switch to next player
            switchPlayer();
        }
    }
})

// button hold functionality
buttonHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] =scores[1] + currentScore;
        displayScores(scores[activePlayer]);

        //2. Check if player's score is >= 100 (if so finish the game)
        if (scores[activePlayer] >= 50) {
            playing = false;
            // console.log(`Player ${activePlayer} won.!`);
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            //Removing dice
            diceElement.classList.add('hidden');
        } else {
            //3. If not.. Switch to the next player
            switchPlayer();
        }
    }
})

// buttonNew.addEventListener('click', function () { init(); })
buttonNew.addEventListener('click', init);
