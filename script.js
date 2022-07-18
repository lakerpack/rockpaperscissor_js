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

function updateGame(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        result = playRound();
        switch (result){
            case "Win":
                score += 1;
        }
    }
    console.log(`Congrats! You won ${score} out of 5 rounds!`)
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

do{
    let wins = 0;
    let losses = 0;
    let ties = 0;

    score.textContent = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;

} while (wins < 5 || losses < 5);

