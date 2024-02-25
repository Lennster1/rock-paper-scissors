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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5) {
    results.textContent = "Congratulations! You won!";
  } else if (computerScore >= 5) {
    results.textContent = "Awwww, you lost dumbass :)";
  }
  
  if (playerSelection == computerSelection) {
    return "You Tied! Try again.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lost! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Rock beats Paper!.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors!.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lost! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper!.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lost! Rock beats Scissors.";
  }


}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");

rock.addEventListener("click", () => {
  results.textContent = `${playRound(
    "rock",
    getComputerChoice()
  )} Your score is ${playerScore}`;
});
paper.addEventListener("click", () => {
  results.textContent = `${playRound(
    "paper",
    getComputerChoice()
  )} Your score is ${playerScore}`;
});
scissors.addEventListener("click", () => {
  results.textContent = `${playRound(
    "scissors",
    getComputerChoice()
  )} Your score is ${playerScore}`;
});
