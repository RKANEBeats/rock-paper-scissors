
/* Create initial function that selects random choice from "Rock, Paper, Scissors" */

function getComputerChoice () {
    let choices = ["Rock" , "Paper", "Scissors"]
    let randomizeChoice = Math.floor(Math.random() * choices.length)
    console.log(randomizeChoice)
}

getComputerChoice();