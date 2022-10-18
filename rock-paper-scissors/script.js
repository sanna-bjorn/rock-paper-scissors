const choices = ["rock", "paper", "scissors"];
const playerScore = 0;
const computerScore = 0;
const inputs = document.querySelectorAll("input");

{
  /* // function that randomly returns Rock, Paper or Sciccors. This is the computer playing. */
}
function getComputerChoice() {
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  console.log(randomElement);
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore + 1;
    result = "You win!";
  } else if (playerSelection === computerSelection) {
    result = "It's a tie";
  } else {
    computerScore + 1;
    result = "You lose!";
  }
}

const playerSelection = "rock";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// inputs.forEach((input) => {
//   input.addEventListener("click", function () {
//     playRound(input.value);
//   });
// });
