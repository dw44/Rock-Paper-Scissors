function computerPlay() { //simulates a single turn played by the computer
    let rps = ['Rock', 'Paper', 'Scissors'];
    let n = Math.floor(Math.random() * 3);
    return rps[n];
}

function playRound(playerSelection, computerSelection) { // plays a single round. takes two values, both from "rock, paper, scissors", simulates a turn, and returns the outcome
    let player = playerSelection[0].toLowerCase(); // converted to lowercase at this stage to eliminate case sensitivity
    let computer = computerSelection[0].toLowerCase(); //use first letters of selections to simplify code for switch 
    let result = null;

    switch (true) { //if-else would have been cumbersome here
        case (player === computer):
            result = 'd';
            break;
        case (player === 'r' && computer === 'p'):
            result = 'l';
            break;
        case (player === 'r' && computer === 's'):
            result = 'w';
            break;
        case (player === 'p' && computer === 'r'):
            result = 'w';
            break;
        case (player === 'p' && computer === 's'):
            result = 'l';
            break;
        case (player === 's' && computer === 'r'):
            result = 'l';
            break;
        case (player === 's' && computer === 'p'):
            result = 'w';
            break;
    }       
    console.log(result + '\n');
    return result;    
}

(function main() {
    const rockButton = document.getElementById("Rock");
    const paperButton = document.getElementById("Paper");
    const scissorsButton = document.getElementById("Scissors");
    const playerChoice = document.getElementById("playerchoice");
    const computerChoice = document.getElementById("computerchoice");
    const playerRound = document.getElementById("playerRound");
    const computerRound = document.getElementById("computerRound");
    const playerGame = document.getElementById("playerGame");
    const computerGame = document.getElementById("computerGame");
    let scores = {roundPlayer: 0, roundComputer: 0, gamePlayer: 0, gameComputer: 0};

    function round(player) {
        let compC = computerPlay();
        let outcome = playRound(player, compC);
        playerChoice.textContent = player;
        computerChoice.textContent = compC;
        if (outcome === 'w') {
            scores.roundPlayer += 1;
        }
        else if (outcome ==='l') {
            scores.roundComputer += 1;
        }
        else {}
    }

    function display() {
        playerRound.textContent = scores.roundPlayer;
        computerRound.textContent = scores.roundComputer;
        playerGame.textContent = scores.gamePlayer;
        computerGame.textContent = scores.gameComputer;
    }

    function scoreUpdate() {
        display();
        if (scores.roundPlayer === 5) {
            scores.gamePlayer += 1;
            scores.roundComputer = 0;
            scores.roundPlayer = 0;
            display();
        }
        else if (scores.roundComputer === 5) {
            scores.gameComputer += 1;
            scores.roundComputer = 0;
            scores.roundPlayer = 0;
            display();
        }
    }

    rockButton.addEventListener('click', () => {
        round("Rock");
        scoreUpdate();
    });

    paperButton.addEventListener('click', () => {
        round("Paper");
        scoreUpdate();
    });

    scissorsButton.addEventListener('click', () => {
        round("Scissors");
        scoreUpdate();
    });
})();
