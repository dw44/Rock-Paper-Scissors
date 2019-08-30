function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);
    return rps[n];
}

for (let i = 0; i < 50; i++) {
    console.log(`${i} - ${computerPlay()}`);
}

