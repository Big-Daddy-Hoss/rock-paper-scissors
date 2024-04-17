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
  let computerChoice = getComputerChoice(); //Both of these are coming out to void gotta fix this!
  let playerChoice = getPlayerChoice();

  //console.log(computerChoice);
  //console.log(playerChoice);

  if (computerChoice === playerChoice) {
    alert("Tie!");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    alert("You Lose!");
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "scissors" && playerChoice === "rock") ||
    (computerChoice === "paper" && playerChoice === "scissors")
  ) {
    alert("You Win!");
  }
}
