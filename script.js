game();


function game() {
    let computerWins = 0;
    let playerWins = 0;
    
}


function playRound(playerChoice,computerChoice) {
    
    if (playerChoice == "rock" && computerChoice == "rock") {
        alert("It's a tie! Play again.");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        alert("You lose!");
        computerWins++;
        alert("Your wins: " + playerWins + "\nComputer wins: " + computerWins);
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        alert("You win!");
        playerWins++;
        alert("Your wins: " + playerWins + "\nComputer wins: " + computerWins);
    }
}

function getPlayerChoice() {
    let playerChoice = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    alert(playerChoice);
    if (checkPlayerChoice(playerChoice)) {
        return playerChoice;
    }else {
        getPlayerChoice();
    }
}

function checkPlayerChoice(choice) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    } else {
        alert("Incorrect choice. Try again.")
        return false;
    }
}

function getComputerChoice() {
    let computerChoiceInt = Math.floor(Math.random()*3 +1);
    let computerChoice;
    switch (computerChoiceInt) {
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

