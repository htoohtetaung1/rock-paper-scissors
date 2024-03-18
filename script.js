let playerWins = 0;
let computerWins = 0;
let buttons = document.querySelectorAll(".playerChoice");
let playerChoice, computerChoice;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

resultsText = document.querySelector(".results");
function playRound(pChoice, cChoice) {
  resultsText.innerText =
    "Your choice = " + pChoice + "\n" + "Computer choice = " + cChoice;
  let text = document.createElement("div");
  if (
    (pChoice == "rock" && cChoice == "rock") ||
    (pChoice == "paper" && cChoice == "paper") ||
    (pChoice == "scissors" && cChoice == "scissors")
  ) {
    text.innerText = "It's a draw. Game is not counted.";
  } else if (
    (pChoice == "rock" && cChoice == "paper") ||
    (pChoice == "paper" && cChoice == "scissors") ||
    (pChoice == "scissors" && cChoice == "rock")
  ) {
    computerWins++;
    text.innerText =
      "You lose this round.\nYour Wins = " +
      playerWins +
      ". Computer Wins = " +
      computerWins;
  } else if (
    (pChoice == "rock" && cChoice == "scissors") ||
    (pChoice == "paper" && cChoice == "rock") ||
    (pChoice == "scissors" && cChoice == "paper")
  ) {
    playerWins++;
    text.innerText =
      "You win this round.\nYour Wins = " +
      playerWins +
      ". Computer Wins = " +
      computerWins;
  }
  text.style.color = "red";
  text.style.fontWeight = "bold"

  resultsText.appendChild(text);
  if (computerWins == 3) {
    text.innerText += "\nGame Over!! You lose!!";
    resetGame(resultsText);
  }
  if (playerWins == 3) {
    text.innerText += "\nGame Over!! You Win!!";
    resetGame(resultsText);
  }
}

function resetGame(resultsText) {
  playerWins = 0;
  computerWins = 0;
  let resetButton = document.createElement("button")
  resetButton.textContent = "reset"
  resultsText.appendChild(resetButton);
  buttons.disabled = true;
}
