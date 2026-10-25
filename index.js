
/* Create initial function that selects random choice from "Rock, Paper, Scissors" */
function getComputerChoice () {
    let choices = ["rock" , "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * choices.length) + 1;
    
    if (randomizeChoice === 1) 
        return  "rock"
    else if (randomizeChoice === 2) 
        return  "paper"
    else if (randomizeChoice === 3) 
        return  "scissors"
    
}
    

/* Create new function that plays a single round of RPS */

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") 
    return "You lose! Paper beats Rock."
    else if (playerSelection === "rock" && computerSelection === "scissors")
    return "You win! Rock beats Scissors."
    else if (playerSelection === "paper" && computerSelection === "rock")
    return "You win! Paper beats Rock."
    else if (playerSelection === "paper" && computerSelection === "scissors")
    return "You lose! Scissors beats Paper."
    else if (playerSelection === "scissors" && computerSelection === "paper")
    return "You win! Scissors beats Paper."
    else if (playerSelection === "scissors" && computerSelection === "rock")
    return "You lose! Rock beats Scissors"
    else if (playerSelection === computerSelection)
    return `It's a Draw! Both chose ${playerSelection}.`

}

let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0; 
/* Create new function that plays a game, keeps the score, and reports the winner at the end of a round */

function playGame(playerSelection) {
    if (roundsPlayed >= 5) {
        return;
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        document.querySelector("#result").textContent = result;
        return;
    }

    roundsPlayed++;

    if (result.startsWith("You win")) {
        playerScore++;
    } else if (result.startsWith("You lose")) {
        computerScore++;
    }

    document.querySelector("#result").textContent =
        `Round ${roundsPlayed}: You chose ${playerSelection}. ` +
        `Computer chose ${computerSelection}. ${result} ` +
        `Score: You ${playerScore} - ${computerScore} Computer.`;

    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            console.log("You won the game!");
        } else if (computerScore > playerScore) {
            console.log("You lost the game!");
        } else {
            console.log("The game is a tie!");
        }
    }
}

const chooseRock = document.querySelector("#rock");
const choosePaper = document.querySelector("#paper");
const chooseScissors = document.querySelector("#scissors");

if (chooseRock) {
    chooseRock.addEventListener("click", () => playGame("rock"));
}

if (choosePaper) {
    choosePaper.addEventListener("click", () => playGame("paper"));
}

if (chooseScissors) {
    chooseScissors.addEventListener("click", () => playGame("scissors"));
}