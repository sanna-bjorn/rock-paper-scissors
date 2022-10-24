const choices = ["rock", "paper", "scissors"];
let playerScore = document.querySelector("#playerScore");
playerScore = 0;
let computerScore = document.querySelector("#computerScore");
computerScore = 0;
const container = document.querySelector("#container");
let content = document.createElement("div");
content.classList.add("content");
const roundResults = document.querySelector("#roundResults");
container.appendChild(content);

// function that randomly returns Rock, Paper or Sciccors. /

function getComputerChoice() {
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  console.log(randomElement);
  return randomElement;
}

// functions that return playerchoice based on the eventlistener clicks

function playerChoseRock() {
  let computerSelection = getComputerChoice();
  let result = playRound("rock", computerSelection);
  console.log(result);
}

function playerChosePaper() {
  let computerSelection = getComputerChoice();
  let result = playRound("paper", computerSelection);
  console.log(result);
}

function playerChoseScissors() {
  let computerSelection = getComputerChoice();
  let result = playRound("scissors", computerSelection);
  console.log(result);
}

function addButtonListener() {
  document.querySelector("#rock").onclick = playerChoseRock;
  document.querySelector("#paper").onclick = playerChosePaper;
  document.querySelector("#scissors").onclick = playerChoseScissors;
}
addButtonListener();

// playRound function to check which result wins and to update score
// modify playRound to update score instead of result.

//scores are global variables already. update playround to stop when score = 5. print result to content div and announce winner once score hits 5.

//add if statement to check for score, and change console.logs to DOM methods.

function playRound(playerSelection, computerSelection) {
  if (playerScore <= 4 && computerScore <= 4) {
    content.textContent =
      "Player's score: " + playerScore + " Computer's score: " + computerScore;
    if (playerSelection === computerSelection) {
      roundResults.textContent = "Tie!";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      roundResults.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore += 1;
    } else {
      computerScore += 1;
      roundResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    return;
  }
  if (playerScore > computerScore) {
    roundResults.textContent = `Player wins thegame `;
  } else if (playerScore < computerScore) {
    roundResults.textContent = `Computer wins the game`;
  }
}

//function for game that loops through five times and checks result from playRound every time, and updates the score. After five times, prints out the winner of the round.

// // function game() {
//   // for (let i = 0; i < 5; i++) {
//   let playerSelection;
//   let computerSelection = getComputerChoice();
//   let result = playRound(playerSelection, computerSelection);
//   if (result == "You win!") {
//     playerScore++;
//   } else if (result == "You lose!") {
//     computerScore++;
//   }
//   console.log(playRound(playerSelection, computerSelection));
//   console.log("Score: " + playerScore + " Computer: " + computerScore);
// }
// if (playerScore > computerScore) {
//   console.log("Player wins!");
// } else if (playerScore < computerScore) {
//   console.log("Computer wins!");
// }

// game();
