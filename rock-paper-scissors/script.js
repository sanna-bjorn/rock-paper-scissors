const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);
content.textContent = playRound();

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

//scores are global variables already. update playround to stop when score = 5. a

//dd if statement to check for score, and change console.logs to DOM methods.

function playRound(playerSelection, computerSelection) {
  if (playerScore <= 5 && computerScore <= 5) {
    if (playerSelection === computerSelection) {
      result = "It's a tie";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      result = "You win!";
      playerScore += 1;
      console.log("Playerscore is ", playerScore);
    } else {
      result = "You lose!";
      computerScore += 1;
      console.log("Computerscore is ", computerScore);
    }
    return result;
  }
  return console.log("Score: " + playerScore + " Computer: " + computerScore);
}
if (playerScore > computerScore) {
  console.log("Player wins!");
} else if (playerScore < computerScore) {
  console.log("Computer wins!");
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
