import Person from './character.js';

// Variables
let startBtn
let activePlayer = 0;
let player1;
let player2;
let p1Races, p1RaceResult, p1Items, p1ItemsResult, user1Race, user1Item, p1CurrentHealth, p1Log, p1Hit, p1Heal, p1Yield;
let p2Races, p2RaceResult, p2Items, p2ItemsResult, user2Race, user2Item, p2CurrentHealth, p2Log, p2Hit, p2Heal, p2Yield;
let unknownItemLog = 'Whooohooo! A new kind of item! But what does it do...';
let unknownRaceLog = "I don\'t know what I am... How can I fix this...";

// variables linked to id's in HTML
startBtn = document.getElementById("startBtn");
p1Hit = document.getElementById("p1Hit");
p2Hit = document.getElementById("p2Hit");
p1Heal = document.getElementById("p1Heal");
p2Heal = document.getElementById("p2Heal");
p1Yield = document.getElementById("p1Yield");
p2Yield = document.getElementById("p2Yield");
p1CurrentHealth = document.getElementById("p1CurrentHealth");
p2CurrentHealth = document.getElementById("p2CurrentHealth");
p1Log = document.getElementById("p1Log");
p2Log = document.getElementById("p2Log");

p1Log.innerHTML = "Choose your race and weapon" + '<br>';
p2Log.innerHTML = "Choose your race and weapon" + '<br>';

// Events on buttons
startBtn.addEventListener("click", initGame);
let initAttackBtn1, initHealBtn1, initYieldBtn1;
let initAttackBtn2, initHealBtn2, initYieldBtn2;

function getRaceAndItems() {
  // Select selected value from dropdown
  p1Races = document.getElementById("p1RaceDropdown");
  p2Races = document.getElementById("p2RaceDropdown");
  p1RaceResult = p1Races.options[p1Races.selectedIndex].text.toLowerCase();
  p2RaceResult = p2Races.options[p2Races.selectedIndex].text.toLowerCase();
  p1Items = document.getElementById("p1ItemsDropdown");
  p2Items = document.getElementById("p2ItemsDropdown");
  p1ItemsResult = p1Items.options[p1Items.selectedIndex].text.toLowerCase();
  p2ItemsResult = p2Items.options[p2Items.selectedIndex].text.toLowerCase();

  // link value to correct image
  document.getElementById("p1Img").src = "images/races/" + p1RaceResult + "1.png";
  document.getElementById("p2Img").src = "images/races/" + p2RaceResult + "2.png";
  document.getElementById("p1ItemImg").src = "images/items/" + p1ItemsResult + "1.png";
  document.getElementById("p2ItemImg").src = "images/items/" + p2ItemsResult + "2.png";

  // link race and item to battlefield -> gamelogic
  user1Race = p1RaceResult; // user input html
  user1Item = p1ItemsResult;
  user2Race = p2RaceResult;
  user2Item = p2ItemsResult;
}


// Creates new game, resets all characters - START-button
function initGame() {
  // p1Log.innerHTML = "";
  // p2Log.innerHTML = "";
  getRaceAndItems();
  // Create player objects
  player1 = new Person(user1Race, user1Item);
  player2 = new Person(user2Race, user2Item);

  // Initiate the players setup
  player1.initPlayer(player1);
  player2.initPlayer(player2);

  player1.initItems(player1);
  player2.initItems(player2);

  player1.currenthealth = 100;
  player2.currenthealth = 100;
  p1CurrentHealth.style.width = `${player1.currenthealth}%`;
  p2CurrentHealth.style.width = `${player2.currenthealth}%`;

  // txt in balloon if race or item is not selected yet
  if((player1.race === '--select--' || player1.race === '') && (player1.item === '--select--' || player1.item === '')) {
    p1Log.innerHTML = unknownRaceLog + '<br>' + unknownItemLog;
  } else if(player1.race === '--select--' || player1.race === '') {
    p1Log.innerHTML = unknownRaceLog + '<br>';
  } else if(player1.item === '--select--' || player1.item === '') {
    p1Log.innerHTML = unknownItemLog;
  } else {
    p1Log.innerHTML = "Player1 begins";
  };

  if((player2.race === '--select--' || player2.race === '') && (player2.item === '--select--' || player2.item === '')) {
    p2Log.innerHTML = unknownRaceLog + '<br>' + unknownItemLog;
  } else if(player2.race === '--select--' || player2.race === '') {
    p2Log.innerHTML = unknownRaceLog + '<br>';
  } else if(player2.item === '--select--' || player2.item === '') {
    p2Log.innerHTML = unknownItemLog;
  } else {
    p2Log.innerHTML = "Player 1 will take the first turn."
  };

  // Activat Attack button if race and item are selected
  if(
     player1.race !== '--select--' && player1.race !== '' &&
     player1.item !== '--select--' && player1.item !== '' &&
     player2.race !== '--select--' && player2.race !== '' &&
     player2.item !== '--select--' && player2.item !== '') {
       initAttackBtn1 = p1Hit.addEventListener("click", battle);
       initHealBtn1 = p1Heal.addEventListener("click", cure);
  } else {
    initAttackBtn1 = p1Hit.removeEventListener("click", battle);
    initAttackBtn2 = p2Hit.removeEventListener("click", battle);
    initHealBtn1 = p1Heal.removeEventListener("click", cure);
    initHealBtn2 = p2Heal.removeEventListener("click", cure);
  };

  activePlayer = 1;

  console.log(user1Race, user1Item, user2Race, user2Item);

  console.log(player1);
  console.log(player2);
}

// Battle function after ATTACK-button pushed
function battle() {
  // Check which players' turn it is and attack the other
  if(activePlayer === 1) {
    //player1 attacks player2
    player1.totalDamage = player1.damage();
    console.log(player1.totalDamage);
    player2.currenthealth -= player1.totalDamage;
    // player1.attack(player2);
    p2CurrentHealth.style.width = `${player2.currenthealth}%`;

    // Display logs in HTML
    p1Log.innerHTML = `Player1 attacks with the strenght of ${player1.totalDamage}.`
    p2Log.innerHTML = `Player2 receives ${player1.totalDamage} damage.`

  } else {
    player2.totalDamage = player2.damage();
    console.log(player2.totalDamage);
    player1.currenthealth -= player2.totalDamage;
    // player2.attack(player1);
    p1CurrentHealth.style.width = `${player1.currenthealth}%`;

    // Display logs in HTML
    p2Log.innerHTML = `Player1 attacks with the strenght of ${player2.totalDamage}.`
    p1Log.innerHTML = `Player1 receives ${player2.totalDamage} damage.`
  };
  // Next player's turn
  nextPlayerTurn();

  // Check for winner
  decideWinner();

  console.log(player1);
  console.log(player2);
  console.log('Next turn for player' + activePlayer);
}

function decideWinner() {
  if(player2.currenthealth <= 0) {
    p1Log.innerHTML = "YOU WIN!";
    p2Log.innerHTML = "YOU LOSE!";
    p2CurrentHealth.style.width = `100%`;
    p2CurrentHealth.style.background = `red`;

    // deactivate buttons PLAYER 1
    initAttackBtn1 = p1Hit.removeEventListener("click", battle);
    initHealBtn1 = p1Heal.removeEventListener("click", cure);
    initYieldBtn1 = p1Yield.removeEventListener("click", surrender);
    // deactivate buttons PLAYER 2
    initAttackBtn2 = p2Hit.removeEventListener("click", battle);
    initHealBtn2 = p2Heal.removeEventListener("click", cure);
    initYieldBtn2 = p2Yield.removeEventListener("click", surrender);

  } else if (player1.currenthealth <= 0) {
    p2Log.innerHTML = "YOU WIN!";
    p1Log.innerHTML = "YOU LOSE!";
    p1CurrentHealth.style.width = `100%`;
    p1CurrentHealth.style.background = `red`;

    // deactivate buttons PLAYER 1
    initAttackBtn1 = p1Hit.removeEventListener("click", battle);
    initHealBtn1 = p1Heal.removeEventListener("click", cure);
    initYieldBtn1 = p1Yield.removeEventListener("click", surrender);
    // deactivate buttons PLAYER 2
    initAttackBtn2 = p2Hit.removeEventListener("click", battle);
    initHealBtn2 = p2Heal.removeEventListener("click", cure);
    initYieldBtn2 = p2Yield.removeEventListener("click", surrender);
  };
}


// Battle function after ATTACK-button pushed
function cure() {
  // Check which players' turn it is and attack the other
  if(activePlayer === 1) {
    //player1 cures itself
    let potion = player1.heal();
    player1.currenthealth += potion;
    p1CurrentHealth.style.width = `${player1.currenthealth}%`;
    // Display logs in HTML
    p1Log.innerHTML = `Player 1 drank a potion and gets ${potion} extra health.`
  } else {
    //player2 cures itself
    let potion = player2.heal();
    player2.currenthealth += potion;
    p2CurrentHealth.style.width = `${player2.currenthealth}%`;
    // Display logs in HTML
    p2Log.innerHTML = `Player 2 drank a potion and gets ${potion} extra health.`
  };

  // Next player's turn
  nextPlayerTurn();

  console.log(player1);
  console.log(player2);
  console.log('Next turn for player' + activePlayer);
}

function nextPlayerTurn() {
  if (activePlayer === 1) {
    activePlayer = 2;
    //activate buttons PLAYER 2
    initAttackBtn2 = p2Hit.addEventListener("click", battle);
    initHealBtn2 = p2Heal.addEventListener("click", cure);
    initYieldBtn2 = p2Yield.addEventListener("click", surrender);

    // deactivate buttons PLAYER 1
    initAttackBtn1 = p1Hit.removeEventListener("click", battle);
    initHealBtn1 = p1Heal.removeEventListener("click", cure);
    initYieldBtn1 = p1Yield.removeEventListener("click", surrender);

  } else {
    activePlayer = 1;
    // activate buttons PLAYER 1
    initAttackBtn1 = p1Hit.addEventListener("click", battle);
    initHealBtn1 = p1Heal.addEventListener("click", cure);
    initYieldBtn1 = p1Yield.addEventListener("click", surrender);

    // deactivate buttons PLAYER 2
    initAttackBtn2 = p2Hit.removeEventListener("click", battle);
    initHealBtn2 = p2Heal.removeEventListener("click", cure);
    initYieldBtn2 = p2Yield.removeEventListener("click", surrender);
  }
}

function surrender() {
  if (activePlayer === 1) {
    p1Log.innerHTML = `I can\'t do this anymore. Let\'s be friends. Stop the fight, please. I\'ll buy you an icecream.`

    p2Log.innerHTML = `Well now... who can say no to that! Let\'s go get some icecream!`

  } else {
    p2Log.innerHTML = `I can\'t do this anymore. Let\'s be friends. Stop the fight, please. I\'ll buy you an icecream.`

    p1Log.innerHTML = `Well now... who can say no to that! Let\'s go get some icecream!`
  };

  // Next player's turn
  nextPlayerTurn();
}
