function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);
    return rps[n];
}

function getPlayerInput() {
    let player = prompt('Rock, Paper, Scissors. Pick');
    while (true) {
        if (player.toLowerCase() === 'rock' ||
            player.toLowerCase() === 'paper' ||
            player.toLowerCase() === 'scissors') return player;
        else { //to ensure only valid values are used
            alert("Enter a valid value."); 
            player = prompt('Rock, Paper, Scissors. Pick');
        }
    }
} //invalid value filter working.

function singleRound(playerSelection, computerSelection) {
    let player = playerSelection[0].toLowerCase();
    let computer = computerSelection[0]; //use first letters of selections to simplify code for switch 
    let result = null;
    switch (true) { //if-else would have been cumbersome here
        case (player === computer):
            result = 'It\'s a Draw!';
            break;
        case (player === 'r' && computer === 'p'):
            result = 'You Lose! Paper beats Rock';
            break;
        case (player === 'r' && computer === 's'):
            result = 'You Win! Rock beats Scissors';
            break;
        case (player === 'p' && computer === 'r'):
            result = 'You Win! Paper beats Rock';
            break;
        case (player === 'p' && computer === 's'):
            result = 'You Lose! Scissors beat Paper';
            break;
        case (player === 's' && computer === 'r'):
            result = 'You Lose! Rock beats Scissors';
            break;
        case (player === 's' && computer === 'p'):
            result = 'You Win! Scissors beat Paper';
            break;
    }
    console.log(result + '\n');
    return result;    
}

function play() {
    let player = getPlayerInput();
    let computer = computerPlay();
    result = singleRound(player, computer);
    console.log(result);
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let rounds = 0; rounds < 5; rounds++) {
        let result = singleRound(getPlayerInput(), computerPlay())[4]; //fourth character on return from singleRound should be W(win), L(Loss) or " "(draw)
        if (result === 'W') playerScore++;
        else if (result === 'L') computerScore++;
    }
    if (playerScore === computerScore) return `Draw - ${playerScore}-${computerScore}`; 
    else {
        return (playerScore > computerScore) ? `You Win - ${playerScore}-${computerScore}` : `Computer Wins ${computerScore}-${playerScore}`;
    } 
}

(function newGame() {
    console.log(game());
    let more = prompt("Another Game?");
    while (true) {
        if (more[0].toLowerCase() === 'y') {
            console.log(game());
            more = prompt("Another Game?"); // to reset value of more, otherwise previous yes will execute newgame twice
        }
        else if (more[0].toLowerCase() === 'n') break; // terminates function when no(anything starting with 'n') is entered in prompt
        else { // to ensure only valid inputs are accepted
            alert('Enter Yes or No');
            more = prompt("Another Game?");
        } 
    }
})(); // iife used so no globals are used and/or exposed
