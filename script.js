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
  if (playerChoice !== null) {
    playerChoice = playerChoice.toLowerCase();
  } 
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
    ) {
      return playerChoice;
    } else {
      console.log("Invalid choice try again");
      getPlayerChoice();
    }
  }
  
  console.log("Player Choice = " + getPlayerChoice());
  console.log("Computer choice = " + getComputerChoice());
  