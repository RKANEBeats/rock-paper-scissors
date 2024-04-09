
/* Create initial function that selects random choice from "Rock, Paper, Scissors" */
function getComputerChoice () {
    let choices = ["rock" , "paper", "scissors"]
    let randomizeChoice = Math.floor(Math.random() * choices.length) + 1
    
    if (randomizeChoice === 1) {
        return  "rock"
    }  if (randomizeChoice === 2) {
        return  "paper"
    } if (randomizeChoice === 3) {
        return  "scissors"
    }
}
    

/* Create new function that plays a single round of RPS */

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") 
    return "You lose! Paper beats Rock."
    else if (playerSelection === "rock" && computerSelection === "scissors")
    return "You win! Rock beats Scissors."
    else if (playerSelection === computerSelection)
    return "It's a Draw! Both chose Rock."

}
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
