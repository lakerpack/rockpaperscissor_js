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
        console.log("Player error.");
    }
}