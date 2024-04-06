
/* Create initial function that selects random choice from "Rock, Paper, Scissors" */
function getComputerChoice () {
    let choices = ["Rock" , "Paper", "Scissors"]
    let randomizeChoice = Math.floor(Math.random() * choices.length) + 1
    
    if (randomizeChoice === 1) {
        return  "Rock"
    }  if (randomizeChoice === 2) {
        return  "Paper"
    } if (randomizeChoice === 3) {
        return  "Scissors"
    }
}
        
console.log (getComputerChoice());