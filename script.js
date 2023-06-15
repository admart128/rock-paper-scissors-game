let playerScore = 0
let computerScore = 0
let playerChoice
let computerChoice
document.getElementById("scoreDisplay").innerHTML= playerScore + "..." + computerScore

function resetGame() {
    playerScore = 0
    computerScore = 0
    document.getElementById("playerChoiceDisplay").innerHTML = ""
    document.getElementById("computerChoiceDisplay").innerHTML = ""
    document.getElementById("resultDisplay").innerHTML = "" 
    document.getElementById("scoreDisplay").innerHTML = playerScore + "..." + computerScore    
}

function incrementPlayerScore() {
    playerScore++

}

function incrementComputerScore() {
    computerScore++
}

let playerChoosesRock = () => {
    playerChoice="rock"
    document.getElementById("playerChoiceDisplay").innerHTML="Rock!"
}

let playerChoosesPaper = () => {
    playerChoice="paper"
    document.getElementById("playerChoiceDisplay").innerHTML="Paper!"
}

let playerChoosesScissors = () => {
    playerChoice="scissors"
    document.getElementById("playerChoiceDisplay").innerHTML="Scissors!"
}

let computerChoosesRandom = () => {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) computerChoice="rock"
    else if (computerChoice == 1) computerChoice="paper"
    else if (computerChoice == 2) computerChoice="scissors"
    document.getElementById("computerChoiceDisplay").innerHTML=computerChoice;
}

let determineWinner = () => {
    if (playerChoice === computerChoice) {
        document.getElementById("resultDisplay").innerHTML="Draw!"
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") || 
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper"))
    {
        incrementPlayerScore()
        document.getElementById("resultDisplay").innerHTML="You Win!"
        document.getElementById("scoreDisplay").innerHTML= playerScore + "..." + computerScore
    }
    else {
        incrementComputerScore()
        document.getElementById("resultDisplay").innerHTML="You Lose!"
        document.getElementById("scoreDisplay").innerHTML= playerScore + "..." + computerScore
    }
}