const buttons = document.querySelectorAll("input");
let result = document.getElementById("result");

let playerScore = 0
let computerScore = 0
let drawScore = 0

// computer random select
function computerPlay(){
    const tools = ["Rock", "Paper", "Scissor"];
    return tools[Math.floor(Math.random()*tools.length)];
    
}
// play
// try to build-in playerWin(), aiWin() and drawScoreBoard

function playRound(playerSelection){
    let computerSelection =computerPlay();
    const aiScore = document.getElementById("aiScore");
    const userScore = document.getElementById("userScore");

        if(computerSelection === playerSelection){
            const draw = document.getElementById("draw");
            draw.textContent =  drawScore +=1;

        }else{  
            if(playerSelection =="Rock" && computerSelection == "Scissor" ||
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissor" && computerSelection == "Paper"){
                userScore.textContent =  playerScore += 1;  
                result.textContent = "Player win the round!";            
            }else{
                aiScore.textContent =  computerScore += 1;
                result.textContent = "Computer win the round!";
            }
            if(playerScore == 5 || computerScore == 5){
                disableButtons();
                result.textContent = checkWinner();
            }
        }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value);
    })
})
function checkWinner (){
    const playerWin = "Congratz! You are the winner!";
    const computerWin ="Computer win the game! Try again!";
        if(playerScore == 5){
            return playerWin;
        }else{
            return computerWin;
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
