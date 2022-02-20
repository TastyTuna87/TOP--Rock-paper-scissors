//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
//function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const tools = ["rock", "paper", "scissor"];

const button = document.querySelector("button");
const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissor = document.querySelector("#btn-scissor");

const playerScore = document.querySelector("userScore");
const computerScore = document.querySelector("aiScore");
const drawScore = document.querySelector("draw");

let userScore = 0;
let aiScore = 0;
let draw = 0;

function playerSelect(){
    button.addEventListener("click", () =>{
        if(button.id == "btn-rock"){
            return tools[0];
        }else if(button.id == "btn-paper"){
            return tools[1];
        }else if(button.id == "btn-scissor"){
            return tools[2];
        }
    });
    return  event.target.value;
    };

//NPC random select
function computerPlay(){
    const npcTool = tools[Math.floor(Math.random()*tools.length)];
    return console.log("Ai: ", npcTool), npcTool;
};


// start the game for 1 round
function playRound(){
    const aiResult = computerPlay();
    const playerResult = playerSelect();
    const match = `${playerResult} vs ${aiResult}`;
    
    if(playerResult === aiResult){
       return draw++, console.log(`${match} is a draw!`, draw)
    }else{
        if(playerResult === tools[0] && aiResult != tools[1]){
            return userScore++, console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`, userScore++)
        }else if(playerResult === tools[1] && aiResult != tools[2]) {
            return userScore++, console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`, userScore++)
        }else if(playerResult === tools[2] && aiResult != tools[0]){
            return userScore++, console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`,userScore++)
        }else{
            return aiScore++, console.log(`${match}: Ai win, ${aiResult} beat the ${playerResult}`, aiScore++)
        }
    }
};

//userScore++


 
