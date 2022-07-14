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
    return;
}

function playRound(){
    let player = playerPlay(prompt("What do you use?"));
    let computer = computerPlay();
    checkWinner(player, computer);
}