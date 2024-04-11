
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
    else (playerSelection === !("rock","paper","scissors"))
    return "I'm pretty sure you're supposed to pick between Rock, Paper, or Scissors. Nice try though."
}
let playerSelection;
let computerSelection = getComputerChoice();

/* Create new function that plays a 5-round game, keeps the score, and reports the winner at the end of a round */

function playGame () {

    let playerSelection = prompt("What is your choice?").toLowerCase();
    let computerSelection = getComputerChoice();

    if (playRound(playerSelection,computerSelection).includes("win"))
        playerScore++
    else if (playRound(playerSelection,computerSelection).includes("lose"))
        computerScore++

    console.log(`Player chose: ${playerSelection}.`)
    console.log(`Computer chose: ${computerSelection}.`)
    console.log(playRound(playerSelection,computerSelection))
    console.log(`Current scores: Player has ${playerScore} points and computer has ${computerScore}.`)
}

let computerScore = 0;
let playerScore = 0;

playGame();
playGame();
playGame();
playGame();
playGame();

console.log ("GAME OVER!")

if (computerScore > playerScore)
    console.log(`You lost the game! Computer won by ${computerScore - playerScore} points.`)
else if (playerScore > computerScore)
    console.log(`You won the game by ${playerScore - computerScore} points.`)
else if (playerScore === computerScore)
    console.log (`It's a tie! Both got ${playerScore} points.`)