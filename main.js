function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You Tied! Try again.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lost! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Rock beats Paper!.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lost! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper!.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lost! Rock beats Scissors.";
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");

rock.addEventListener("click", () => {
  results.textContent = playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  results.textContent = playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  results.textContent = playRound("scissors", getComputerChoice());
});