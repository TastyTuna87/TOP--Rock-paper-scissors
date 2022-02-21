//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
//function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const tools = ["rock", "paper", "scissor"];

const button = document.querySelector("button");

const rock = document.querySelector("btn-rock");
const postRock = document.getElementById("postRock");

const paper = document.querySelector("btn-paper");
const postPaper = document.getElementById("postPaper");

const scissor = document.querySelector("btn-scissor");
const postScissor = document.getElementById("postScissor");

const playerScore = document.querySelector("userScore");
const computerScore = document.querySelector("aiScore");

const drawScore = document.querySelector("draw");

let userScore = 1;
let aiScore = 1;
let draw = 1;



    button.addEventListener("click", () =>{
        if(button.id == "btn-rock"){
            return postRock.value;
        }else if(button.id == "btn-paper"){
            return postPaper.value;
        }else if(button.id == "btn-scissor"){
            return postScissor.value;
        }
    });
    

//NPC random select
function computerPlay(){
    tools[Math.floor(Math.random()*tools.length)];
    
}


// start the game for 1 round
function playRound(){
    const npcTool = computerPlay();
    //const playerResult = playerSelect();
    //const match = `${playerResult} vs ${aiResult}`;
    if(postRock === npcTool || postPaper === npcTool || postScissor === npcTool){
        return drawScoreBoard(), console.log("It's a tie!");       
    }else{
        if(postRock != tools[0] && npcTool != tools[1]){
            return playerWin(), console.log("You win! Rock beat the Scissor! ", userScore, postRock.value);
        }else if(postPaper != tools[1] && npcTool != tools[2]){
            return playerWin(), console.log("You win! Paper beat the Rock! ", userScore, postPaper,value);
        }else if(postScissor != tools[2]&& npcTool != tools[0]){
            return playerWin(), console.log("You win! Scissor beat the Paper! ", userScore, postScissor.value);
        }else{
            return aiWin(), console.log("Ai win!");
        }
    }
    
    // if(playerResult === aiResult){
    //    return drawScoreBoard(), console.log(`${match} is a draw!`, draw)
    // }else{
    //     if(playerResult === tools[0] && aiResult != tools[1]){
    //         return playerWin(), console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`, userScore)
    //     }else if(playerResult === tools[1] && aiResult != tools[2]) {
    //         return playerWin(), console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`, userScore)
    //     }else if(playerResult === tools[2] && aiResult != tools[0]){
    //         return playerWin(), console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`,userScore)
    //     }else{
    //         return aiWin(), console.log(`${match}: Ai win, ${aiResult} beat the ${playerResult}`, aiScore)
    //     }
    // }
}

function playerWin(){
    const playerScore = document.getElementById("userScore");
        if(userScore == 6){
            console.log("Congratz! You are the winner!") //button.removeEventListener("click", playerSelect);
        }else{
            return playerScore.textContent =  userScore++, console.log(userScore);    
    }     
}
function aiWin(){
    const computerScore = document.getElementById("aiScore");
        if(aiScore == 6){
            return console.log("Computer win the game! Try again") //button.removeEventListener("click", playerSelect);
        }else{
            return computerScore.textContent =  aiScore++, console.log(aiScore);
        }
    }   

function drawScoreBoard(){
    const drawScore = document.getElementById("draw")
    drawScore.textContent =  draw++;
}