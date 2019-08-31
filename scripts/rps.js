
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
        else {
            alert("Enter a valid value.");
            player = prompt('Rock, Paper, Scissors. Pick');
        }
    }
} //invalid value filter working.

function singleRound(playerSelection, computerSelection) {
    let player = playerSelection[0].toLowerCase();
    let computer = computerSelection[0]; //use first letters of selections to simplify code for switch 
    let result = null;
    switch (true) { 
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
    return result;    
}

function play() {
    let player = getPlayerInput();
    let computer = computerPlay();
    result = singleRound(player, computer);
    console.log(result);
    return result;
}

for (let i = 0; i < 20; i++) {
    console.log(`${i} - ${play()}`);
}