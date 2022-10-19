const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

{
  /* // function that randomly returns Rock, Paper or Sciccors. This is the computer playing. */
}
function getComputerChoice() {
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  console.log(randomElement);
  return randomElement;
}

//* collect input and set it to lowercase letters
let playerSelection = prompt("Input your choice");
let computerSelection = getComputerChoice();
let result;

//create playRound function with parameters for playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  return result;
}
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    if (result == "You win!") {
      playerScore++;
    } else if (result == "You lose!") {
      computerScore++;
    }
    console.log("Score: " + playerScore + " Computer: " + computerScore);
  }
  return playRound();
}

game(computerScore, playerScore);
