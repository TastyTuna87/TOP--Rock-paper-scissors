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
                    console.log("It's a draw! Try again!");
        }else{  
            if(playerSelection =="Rock" && computerSelection == "Scissor" ||
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissor" && computerSelection == "Paper"){
                    userScore.textContent =  playerScore += 1; console.log("you win:", playerScore);   
                    result.textContent = "Player win the round!";            
            }else{
                    aiScore.textContent =  computerScore += 1; console.log("computer win", computerScore);
                    result.textContent = "Computer win the round!";
                }
            checkWinner();
            }
        }


buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value);
    })
})
function checkWinner(){
    if(playerScore == 5 || computerScore == 5){
        disableButtons();
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
