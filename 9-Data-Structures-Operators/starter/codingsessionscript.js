'use strict';
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create oneplayer array for each team(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
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
        ], [
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
        ],],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 10.33,
        x: 3.25,
        team2: 6.5,
    },
};

const fieldPlayers1 =
    ['Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski'];
const fieldPlayers2 =
    ['Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'];
// const players1 = ['Pavard', ...fieldPlayers1]; // 'BayernMunich'
// const players2 = ['Schulz', ...fieldPlayers2];
// console.log(players1);
// console.log(players2);
const [players1, players2] = game.players;
console.log(players1, players2);


const [gk, ...firstPlayers] = players1;
console.log(gk, firstPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Finals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Finals);

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
    // console.log(playerNames);
    console.log(`${playerNames} have scored ${playerNames.length} goals.`);
}
console.log(printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'));
console.log(printGoals(...game.scored));

// Using logical operators
const oddsOfTeam1 = game.odds.team1;
const oddsOfTeam2 = game.odds.team2;
game.odds.team1 < game.odds.team2 && console.log('Team1 is more likely to win.');
game.odds.team1 > game.odds.team2 && console.log('Team2 is more likely to win.');