'use strict';

// Selecting elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Ele = document.querySelector('#current--0');
const current1Ele = document.querySelector('#current--1');
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
//Note: these below 2 lines with 'getElementById' are not working, need to check later why??
// const player0Ele = document.getElementById('player--0');
// const player1Ele = document.getElementById('player--1');

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0 , 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEle.classList.add('hidden');
    player0Ele.classList.add('player--active');
    player1Ele.classList.remove('player--active');
    player0Ele.classList.remove('player--winner');
    player1Ele.classList.remove('player--winner');
    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    current0Ele.textContent = 0;
    current1Ele.textContent = 0;
}

init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // here toggling on both of these elements will ensure that only 1 element is active at a time.
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
}

// whenever we roll a dice, the diceElement should show up again, so we have to remove the hidden dice.
btnRoll.addEventListener('click', function() {
    if (playing) {
        const diceRoll = Math.trunc(Math.random() * 6) + 1;
        diceEle.classList.remove('hidden');
        diceEle.src = `dice-${diceRoll}.png`;
        // console.log(diceRoll);
        // console.log(diceEle.src);

        if(diceRoll === 1) { // switch to next player
            switchPlayer();
        } else { // add dice to the current score
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // add current score to a active players score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 50) {
            // finish the game
            playing = false;
            diceEle.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // switch to the next player
            switchPlayer();
        }
    }
});

// btnNew.addEventListener('click', function() {init();}); // keep all values to default (resetting the game)
btnNew.addEventListener('click', init); // this is same as the above commented line
