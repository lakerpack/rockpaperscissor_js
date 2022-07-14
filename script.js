function computerPlay(){
    let roll = Math.floor(Math.random()*3);
    if (roll === 1){
        return "Rock";
    }
    else if (roll === 2){
        return "Paper";
    }
    else if (roll === 3){
        return "Scissors";
    }
    else{
        console.log("Error in the code.");
    }
}

function playerPlay(choice){
    true_choice = choice.toLowerCase();
    while (true_choice != "rock" || true_choice != "paper" || true_choice != "scissors"){
        if (true_choice === "rock"){
            return "Rock";
        }
        else if (true_choice === "paper"){
            return "Paper";
        }
        else if (true_choice === "scissors"){
            return "Scissors";
        }
        else{
            console.log("Please try again.");
        }
    }

}

function checkWinner(player, computer){
    switch (player){
        case "Rock":
            return computer === "Rock" ? "Tie" : computer === "Paper" ? "Lose" : "Win";
        case "Paper":
            return computer === "Rock" ? "Win" : computer === "Paper" ? "Tie" : "Lose";
        case "Scissors":
            return computer === "Rock" ? "Lose" : computer === "Paper" ? "Win" : "Tie";
    }
}


function playRound(){
    let player = playerPlay(prompt("What do you use?"));
    let computer = computerPlay();
    let result = checkWinner(player, computer);
    switch (result){
        case "Win":
            console.log(`You win! ${player} beats ${computer}`);
            return "Win";
        case "Tie":
            console.log(`You tied! ${player} ties with ${computer}`);
            return "Tie";
        case "Lose":
            console.log(`You lose! ${player} loses to ${computer}`);
            return "Lose";
    }
}