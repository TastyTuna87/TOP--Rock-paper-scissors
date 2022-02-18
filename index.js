//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
//function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const buttons = document.querySelector("#buttons");

const tools = ["rock", "paper", "scissor"];

const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissor = document.querySelector("#btn-scissor");


let playerResult = null;
console.log(playerResult);
let userScore = 1;
let aiScore = 1;
let draw = 1;


rock.addEventListener("click", function onclick(){
    playerResult = tools[0], console.log("Player: ", playerResult);
});
paper.addEventListener("click", function onclick(){
    return playerResult = tools[1], console.log("Player: ", playerResult);
});
scissor.addEventListener("click", function onclick(){
    return playerResult = tools[2], console.log("Player: ", playerResult);
});

//NPC random select
function computerPlay(){
    const npcTool = tools[Math.floor(Math.random()*tools.length)];
    return console.log("Ai: ", npcTool), npcTool;
};


// start the game for 1 round
function playRound(){
    let aiResult = computerPlay();
    const match = `${playerResult} vs ${aiResult}`;

    if(playerResult === aiResult){
        return console.log(`${match} is a draw!`)
    }else{
        if(playerResult === tools[0] && aiResult != tools[1]){
            return console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`)
        }else if(playerResult === tools[1] && aiResult != tools[2]) {
            return console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`)
        }else if(playerResult === tools[2] && aiResult != tools[0]){
            return console.log(`${match}: You win, ${playerResult} beat the ${aiResult}`)
        }else{
            return console.log(`${match}: Ai win, ${aiResult} beat the ${playerResult}`)
        }
    }

    
};



 
