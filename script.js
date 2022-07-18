function computerPlay(){
    let roll = Math.floor(Math.random()*3) + 1;
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


function playRound(choice){
    let computer = computerPlay();
    let result = checkWinner(choice, computer);
    switch (result){
        case "Win":
            console.log(`You win! ${choice} beats ${computer}`);
            updateGame("Win");
        case "Tie":
            console.log(`You tied! ${choice} ties with ${computer}`);
            updateGame("Tie");
        case "Lose":
            console.log(`You lose! ${choice} loses to ${computer}`);
            updateGame("Lose");
    }
}

function updateGame(result){
    switch(result){
        case "Win":
            wins += 1;
        case "Lose":
            losses += 1;
        case "Tie":
            ties += 1;
    }
}

/* const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors'); */

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('id')
        playRound(id);
    });
});

const score = document.querySelector("#result");
let wins = 0;
let losses = 0;
let ties = 0;

do{
    score.textContent = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;

    if (wins == 5 || losses == 5){
        const restart = document.createElement("button");
        restart.textContent = "Restart the game?";
        score.appendChild(restart);
        restart.addEventListener('click', () => {
            wins = 0;
            losses = 0;
            ties = 0;
        });
    }

} while (wins < 5 || losses < 5);

