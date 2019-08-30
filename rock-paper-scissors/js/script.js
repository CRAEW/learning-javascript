// Select the play-button, call playGame function when clicked upon
let play = document.getElementById("play");
play.addEventListener("click", playGame);

//WVC: reset the score to 0 if new game or change players
let newGame = document.getElementById("newGame")
newGame.addEventListener("click", resetScore);
// console.log(play);

// If the value of dropdown players is changed, call changeGame function
let players = document.getElementById("players");
players.addEventListener("change", changeGame);

// Select the choice of player one and player two
let p1choice = document.getElementById("p1choice");
let p2choice = document.getElementById("p2choice");

// Possible choices-ARRAY to pick from
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

// WVC: Score count players
let score1 = 0;
let score2 = 0;

//WVC: select the scoreboard of the player
let p1score = document.getElementById("p1score");
let p2score = document.getElementById("p2score");

// Loops over every value (choice) in the array (choices)
for (choice of choices) {
  // Create an option-element
  let element = document.createElement("option");
  // Add all the posible choices to this element
  element.value = choice;
  // Add the choices to the HTML of your element
  element.innerHTML = choice;
  // Add the created element to player 1 choices menu
  p1choice.append(element);
}

for (choice of choices) {
  let element = document.createElement("option");
  element.value = choice;
  element.innerHTML = choice;
  p2choice.append(element);
}

// playGame function
function playGame(event) {
  let p1value = p1choice.value;
  let p2value;

  if (p2choice.disabled === false) {
    p2value = p2choice.value;
  } else {
    p2value = choices[Math.floor(Math.random() * choices.length)];
  };

  //WVC: print choice of players to screen
  result(p1value, p2value);
  document.getElementById("p1viewchoice").innerHTML = p1value;
  document.getElementById("p2viewchoice").innerHTML = p2value;

}

// How many players are active
function changeGame(event) {
  if (players.value === "1") {
    p2choice.disabled = true;
  } else {
    p2choice.disabled = false;
  };
  resetScore();
}

//WVC: Who won the draw ?
function result(p1value, p2value) {
  let result = document.getElementById("result");

  //WVC: calculate who won
  if (p1value === p2value) {
    result.innerHTML = "It's a tie!";
  } else if (
    (p1value === "rock" && p2value === "scissors") ||
    (p1value === "rock" && p2value === "lizard") ||
    (p1value === "paper" && p2value === "rock") ||
    (p1value === "paper" && p2value === "spock") ||
    (p1value === "scissors" && p2value === "paper") ||
    (p1value === "scissors" && p2value === "lizard") ||
    (p1value === "lizard" && p2value === "paper") ||
    (p1value === "lizard" && p2value === "spock") ||
    (p1value === "spock" && p2value === "scissors") ||
    (p1value === "spock" && p2value === "rock")
  ) {
    result.innerHTML = "Player 1 wins!";

    //WVC: add 1 to score of player 1
    score1++;
    p1score.innerHTML = score1;

  } else {
    result.innerHTML = "Player 2 wins!";

    //WVC: add 1 to score of player 2
    score2++;
    p2score.innerHTML = score2;

  }
}

//WVC: reset the scores to 0
function resetScore() {
  score1 = 0;
  score2 = 0;
  p1score.innerHTML = score1;
  p2score.innerHTML = score2;
}
