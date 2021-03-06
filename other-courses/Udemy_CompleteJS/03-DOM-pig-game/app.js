/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, rolledDice;

var maxScore, winningScore;

init();

// Prevent form from submitting on ENTER
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});

/******************************
 * ROLL DICE BUTTON
 ******************************/
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // Create random number
        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);

        // Display the dice result
        var dice1DOM = document.querySelector('.dice1');
        var dice2DOM = document.querySelector('.dice2');
        dice1DOM.style.display = 'inline-block';
        dice2DOM.style.display = 'inline-block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        dice2DOM.src = 'dice-' + dice2 + '.png';

        // save rolled number in array
        rolledDice.push(dice1 + dice2);

        // select last 2 rolled numbers from array
        var current = rolledDice.length - 1;
        var previous = rolledDice.length - 2;

        // Check IF 2x6 was rolled
        if (rolledDice[previous] === 6 && rolledDice[current] === 6) {

            // Player looses his entire GLOBAL score
            scores[activePlayer] = 0;
            // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            // Next player
            nextPlayer();

        } else if (dice1 !== 1 || dice2 !== 1) {
            // Update the round score IF the rolled number was NOT a 1
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next Player
            nextPlayer();
        }
    }

});


/******************************
 * HOLD BUTTON
 ******************************/
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check winningScore
        input = document.getElementById('maxScore').value;

        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
            document.getElementById('maxScore').value = '100';
        }

        // Check if player won the game else Next Player
        if (scores[activePlayer] >= winningScore) {

            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }

    }

});


/******************************
 * GAMEPLAY FUNCTIONS
 ******************************/
function nextPlayer() {

    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    rolledDice = [];

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    rolledDice = [];
    document.getElementById('maxScore').value = "";

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    /******************************
     * Set displayed scores to 0 in the DOM
     ******************************/
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/