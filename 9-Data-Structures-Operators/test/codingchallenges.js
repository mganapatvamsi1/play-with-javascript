'use strict';
///////////////////////////////////////
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page).
 In this challenge we're going to work with that data.
Your tasks:
1. Create oneplayer array for each team(variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich(team1) used 3 substitute players. So create a new array ('players1Final')
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and
prints each of them to the console, along with the number of goals that were scored in total
(number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the
function again with players from game.scored
*/
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1. Create oneplayer array for each team(variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
//2. The first player in any player array is the goalkeeper and the others are field players.
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log('all players: ', allPlayers);

//4. During the game, Bayern Munich(team1) used 3 substitute players. So create a new array ('players1Final')
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players', players1Final);

//5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
// const {odds: {team1, x: draw,  team2} } = game; // this would give the same result as the above line
console.log(team1, draw, team2); //1.33 3.25 6.5

//6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and
// prints each of them to the console, along with the number of goals that were scored in total
// (number of player names passed in)
// const printGoals = function (...noOfPlayerNames) {
//     let count = 0;
//     for (let c = 0; c < noOfPlayerNames.length; c++) {
//         count++;
//         console.log('player name: ',noOfPlayerNames[c]);
//     }
//     console.log('total number of goals scored in total: ',count);
// }
const printGoals = function (...noOfPlayerNames) {
    let count = 0;
    for (let c = 0; c < noOfPlayerNames.length; c++) {
        count++;
        console.log('player name: ', noOfPlayerNames[c]);
    }
    console.log(`total number of goals scored in total: ${noOfPlayerNames.length}`);
}
//Test Data1: 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);
// const noOfGoals = function (...numbers) {
//     let count1 = 0;
//     for (let c = 0; c < numbers.length; c++) {
//         count1 += numbers[c];
//     }
//     console.log('total number of goals scored: ',count1);
//     return count1;
// }
// noOfGoals(1, 2, 3, 4);
// noOfGoals(5, 10, 15, 20);

//7. The team with the lower odd is more likely to win. Print to the console which team
//  is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log(`${game.team1} is more like to win.`);
team1 > team2 && console.log(`${game.team2} is more like to win.`);
// team2  team1 && console.log(`${game.team2} is more like to win.`);

///////////////////////////////////////
/*
Coding Challenge #2
  Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the
goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how
to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way,exactly like this:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Create an object called 'scorers' which contains the names of the players who
scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
*/

//1. Loop over the game.scored array and print each player name to the console, along with the
// goal number (Example: "Goal 1: Lewandowski")
const gameScoredArr = game.scored;
//console.log(gameScoredArr);
// for (const index in gameScoredArr) console.log(`Goal ${index[0] + 1}: ${gameScoredArr[index]}`);
//APPROACH-1
for (const index in gameScoredArr) console.log(`Goal ${Number(index) + Number(1)}: ${gameScoredArr[index]}`);
//APPROACH-2
for (const [i, player] of gameScoredArr.entries()) console.log(`Goal ${i + 1}: ${player}`);
// both of these above ways are correct

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how
// to calculate averages, you can go check if you don't remember)
//i.e, calculate the average of the elements in the object.
// console.log(game.odds); // Object {team1: 1.33, x: 3.25, team2: 6.5}
const objValues = Object.values(game.odds);
// console.log('obj values: ',objValues); //[1.33, 3.25, 6.5]
//APPROACH-1
let sum = 0;
for (const value in objValues) {
    sum += objValues[value];
}
// const averageOdds = sum/objValues.length;
// console.log(averageOdds);
sum /= objValues.length;
console.log(sum);

//APPROACH-2
let average = 0;
for (const odd of objValues) average += odd;
average /= objValues.length;
console.log(average);


//3. Print the 3 odds to the console, but in a nice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
// Hint: Note how the odds and the game objects have the same property names 😉

// console.log(`Odd of victory ${game.team1}: ${team1}`);
// console.log(`Odd of draw: ${draw}`);
// console.log(`Odd of victory ${game.team2}: ${team2}`);

// const oddNames = Object.keys(game.odds);
// console.log(oddNames); // ["team1", "x", "team2"]
console.log(`Odd of victory ${game.team1}: ${objValues[0]}`);
console.log(`Odd of draw: ${objValues[1]}`);
console.log(`Odd of victory ${game.team2}: ${objValues[2]}`);

//Approach-2
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4. Bonus:Create an object called 'scorers' which contains the names of the players who
// scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// console.log(game.scored); // ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
// So the solution is to loop over the array, and add the array elements
// as object properties, and then increase the count as we encounter a new occurrence of a certain element
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers); // {Lewandowski: 2, Gnarby: 1, Hummels: 1}

console.log('---------------------');
console.log(gameScoredArr); // ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
//Note: in 'of' for loop we would be getting the elements in the array whereas in the 'in' for loop
// we would be getting indexes of elements
for (const test1 in gameScoredArr) console.log(test1);
for (const test2 of gameScoredArr) console.log(test2);


///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished,it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
// const events = [...new Set(gameEvents.values())]; // this and the above line both are 2 different ways of doing.
console.log(events);

console.log(gameEvents);
gameEvents.delete(64)
console.log(gameEvents);

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

for (const [key, value] of gameEvents.entries()) {
    const half = key <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${key}: ${value}`);
    // key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
}

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_'); //TODO: to check on this result
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

