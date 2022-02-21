const buttons = document.querySelectorAll("input");

let playerScore = 1;
let computerScore = 1;
let drawScore = 1;


// computer random select
function computerPlay(){
    const tools = ["rock", "paper", "scissor"];
    return tools[Math.floor(Math.random()*tools.length)];
    
}
// play
function playRound(playerSelection){
    let computerSelection =computerPlay();
    
    if(computerSelection === playerSelection){
        return drawScoreBoard(), console.log("It's a draw! Try again!", drawScore += 1);
    }else{
    if(playerSelection =="rock" && computerSelection == "scissor"){
        return playerWin(), console.log("You win! Rock beat the scissor!", playerScore += 1);
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return playerWin(), console.log("You win! Paper beat the rock!", playerScore += 1);
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return playerWin(), console.log("You win! Scissor beat the paper!", playerScore += 1)
    }else{
        return aiWin(), console.log("Computer win!", computerScore += 1)
    }
}
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value);
    })
})

function playerWin(){
    const userScore = document.getElementById("userScore");
        if(playerScore == 6){
            return console.log("Congratz! You are the winner!"), disableButtons();
        }else{
            return userScore.textContent =  playerScore, console.log(playerScore);    
    }     
}
function aiWin(){
    const aiScore = document.getElementById("aiScore");
        if(computerScore == 6){
            return console.log("Computer win the game! Try again"), disableButtons();
        }else{
            return aiScore.textContent =  computerScore, console.log(computerScore);
        }
    }   

function drawScoreBoard(){
    const draw = document.getElementById("draw")
    draw.textContent =  drawScore;
}

function disableButtons(){
    buttons.forEach(element => {
            element.disabled = true;
        })
    }

function resetGame() {
    
    location.reload();
}

function test(){
    console.log(playRound())
}