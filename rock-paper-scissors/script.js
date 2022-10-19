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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Input your choice");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "You win!") {
      playerScore++;
    } else if (result == "You lose!") {
      computerScore++;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log("Score: " + playerScore + " Computer: " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  }
}

game();
