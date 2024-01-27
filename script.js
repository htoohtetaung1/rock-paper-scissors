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
function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?", "rock");
  while (!playerChoiceIsCorrect(playerChoice)) {
    playerChoice = prompt("Rock, Paper or Scissors?", "rock");
  }
  return playerChoice.toLowerCase();
}
function playerChoiceIsCorrect(choice) {
  if (choice !== null) {
    choice = choice.toLowerCase();
  }
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return true;
  } else {
    console.log("Invalid choice try again");
    return false;
  }
}
let playerWins = 0;
let computerWins = 0;

function playRound(pChoice, cChoice) {
  if (
    (pChoice == "rock" && cChoice == "rock") ||
    (pChoice == "paper" && cChoice == "paper") ||
    (pChoice == "scissors" && cChoice == "scissors")
  ) {
    console.log("It's a draw. Game is not counted.");
  } else if (
    (pChoice == "rock" && cChoice == "paper") ||
    (pChoice == "paper" && cChoice == "scissors") ||
    (pChoice == "scissors" && cChoice == "rock")
  ) {
    console.log("You Lose!");
    computerWins++;
    console.log(
      "Your Wins = " + playerWins + ". Computer Wins = " + computerWins + "\n "
    );
  } else if (
    (pChoice == "rock" && cChoice == "scissors") ||
    (pChoice == "paper" && cChoice == "rock") ||
    (pChoice == "scissors" && cChoice == "paper")
  ) {
    console.log("You Win!");
    playerWins++;
    console.log(
      "Your Wins = " + playerWins + ". Computer Wins = " + computerWins + "\n "
    );
  }
}
gameOver = false;
console.log("Best of 5!");
while (!gameOver) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  console.log(
    "Player Choice = " + playerChoice + ". Computer Choice = " + computerChoice
  );
  playRound(playerChoice, computerChoice);
  if(computerWins == 3) {
    console.log("Game over, you lost.");
    gameOver = true;
  }
  if (playerWins == 3) {
    console.log("Congrats! You won the game!")
    gameOver = true;
  }
}
