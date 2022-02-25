const buttons = document.querySelectorAll("input");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// computer random select
function computerPlay(){
    const tools = ["rock", "paper", "scissor"];
        return tools[Math.floor(Math.random()*tools.length)];
    
}
// play
// try to build-in playerWin(), aiWin() and drawScoreBoard

function playRound(playerSelection){
    let computerSelection =computerPlay();
    
        if(computerSelection === playerSelection){
            const draw = document.getElementById("draw")
                draw.textContent =  drawScore += 1;
                    console.log("It's a draw! Try again!");
            
        }else{
        if(playerSelection =="Rock" && computerSelection == "scissor"){
            playerWin(), console.log("You win! Rock beat the scissor!");
            
        }else if(playerSelection == "Paper" && computerSelection == "rock"){
            playerWin(), console.log("You win! Paper beat the rock!");
            
        }else if(playerSelection == "Scissor" && computerSelection == "paper"){
            playerWin(), console.log("You win! Scissor beat the paper!");
            
        }else{
            aiWin(), console.log("Computer win!");
            
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
        if(playerScore == 5){
            disableButtons(), console.log("Congratz! You are the winner!");
        }else{
            userScore.textContent =  playerScore += 1, console.log(playerScore);    
    }     
}
function aiWin(){
    const aiScore = document.getElementById("aiScore");
        if(computerScore == 5){
            disableButtons(),console.log("Computer win the game! Try again");
        }else{
            aiScore.textContent =  computerScore += 1 , console.log(computerScore);
        }
    }   

function disableButtons(){
    buttons.forEach(element => {
            element.disabled = true;
        })
    }
//relaod page hide the button before we knwo who win
function resetGame(){
    location.reload();
}

