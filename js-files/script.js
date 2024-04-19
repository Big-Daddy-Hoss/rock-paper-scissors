const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[random];
  computerChoice = computerChoice.toLowerCase();
  console.log(computerChoice);

  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Please choose rock, paper, or scissors");

  playerChoice = playerChoice.toLowerCase();
  //console.log(typeof playerChoice);
  console.log(playerChoice);

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    alert("Selection Invalid. Choose again");
    getPlayerChoice();
  }
}

function playRPS() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  //console.log(computerChoice);
  //console.log(playerChoice);

  if (computerChoice === playerChoice) {
    return "Tie!";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    return "You Lose!";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "scissors" && playerChoice === "rock") ||
    (computerChoice === "paper" && playerChoice === "scissors")
  ) {
    return "You Win!";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    result = playRPS();
    console.log(result);

       // While loop won't stop. Do I need to define scores within while loop?
    if (result === "You Win!") {
      playerScore = playerScore + 1;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
    } else if (result === "You Lose!") {
      computerScore = computerScore + 1;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
    } else {
    }
  }

  if (playerScore == 3) {
    alert( "You Win!");
  } else {
    alert ("You Lose!");
  }
}
