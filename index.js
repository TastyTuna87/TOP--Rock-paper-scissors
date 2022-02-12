
const tools = ["ROCK", "PAPER", "SCISSOR"];
const playerWin = "Congratz! You Win!";
const playerLose ="You lose!";
const draw = "It's TIE! Play again!";


let userScore = 1;
let npcScore = 1;
let drawScore = 1;



//NPC random rolls for rock, paper and scissors
function computerPlay(npcTool){
    npcTool = tools[Math.floor(Math.random()*tools.length)];
    return npcTool;
}

//NPC random variable from computerPlay() selected
function computerSelect(){
    document.getElementById("computerSelection").innerHTML = computerPlay();
}

//Player select: rock, paper, scissors. case-insensitive!!!! 
function playerSelect(){
    const select =  document.getElementById("userInput").value;
    const capSelect = select.toString().toUpperCase();

        if(capSelect != tools[0] && capSelect != tools[1] && capSelect != tools[2]) {
                const badTool = "Wrong tool! You can only chosoe from: rock, paper or scissors!";
                return document.getElementById("badTool").innerHTML = badTool;
        }else{
            switch(capSelect){
                case "ROCK":
                    document.getElementById("playerSelection").innerHTML = capSelect, document.getElementById("badTool").innerHTML = "";
                    break;
                case "PAPER":
                    document.getElementById("playerSelection").innerHTML = capSelect, document.getElementById("badTool").innerHTML = "";
                    break;
                case "SCISSOR": 
                    document.getElementById("playerSelection").innerHTML = capSelect, document.getElementById("badTool").innerHTML = "";
                    break;
    }
    return capSelect;
}
}

// 1 round of play
function playRound(){   
    const playerSelection = playerSelect();
    const computerSelection = computerPlay();
    const gameWinner = game();
    

    if(userScore === 5){
        document.getElementById("gameWinner").innerHTML = playerWin, reset();
    }else if(npcScore === 5) {
        document.getElementById("gameWinner").innerHTML = playerLose , reset();
    }

    if(playerSelection === computerSelection){
        return document.getElementById("winner").innerHTML = draw, document.getElementById("computerSelection").innerHTML = computerSelection,
         document.getElementById("draw").innerHTML = drawScore++;
    }else{
        if(playerSelection == tools[0] && computerSelection != tools[1]){
            return document.getElementById("winner").innerHTML = playerWin, document.getElementById("computerSelection").innerHTML = computerSelection,
             document.getElementById("userScore").innerHTML = userScore++, gameWinner;

        }else if(playerSelection == tools[1] && computerSelection != tools[2]){
            return document.getElementById("winner").innerHTML = playerWin, document.getElementById("computerSelection").innerHTML = computerSelection,
             document.getElementById("userScore").innerHTML = userScore++, gameWinner;

        }else if(playerSelection == tools[2] && computerSelection != tools[0]){
            return document.getElementById("winner").innerHTML = playerWin, document.getElementById("computerSelection").innerHTML = computerSelection,
             document.getElementById("userScore").innerHTML = userScore++, gameWinner;

        }else{
            return document.getElementById("winner").innerHTML = playerLose, document.getElementById("computerSelection").innerHTML = computerSelection,
             document.getElementById("npcScore").innerHTML = npcScore++, gameWinner;
        }
    }
}

//write a div for player choosed tool
function playerChoose(){
    document.getElementById("playerSelection").innerHTML = playerSelect();
}
function game() {
    switch(userScore, npcScore){
        case "Player wins!" :
            document.getElementById("gameWinner").innerHTML = userScore;
            break;
        case "NPC win!":
            document.getElementById("gameWinner").innerHTML = npcScore;
            break;
    }
    }

    function reset(){
        return document.location.reload(true);
    }
    

    
