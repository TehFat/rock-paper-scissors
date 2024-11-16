const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updatedScoreElement();

function playGame(playerMove) {

const computerMove = pickComputerMove();


let result = '';
if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
        result = 'you loss';
    } else if (computerMove === 'paper') {
        result = 'you win';
    }
    else if (computerMove === 'scissors') {
        result = 'Tie';
    }

    // alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}`);

}
else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
        result = 'you win';
    } else if (computerMove === 'paper') {
        result = 'Tie';
    }
    else if (computerMove === 'scissors') {
        result = 'you loss';
    }

    

}
// Determine the result based on player and computer moves 
else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'Tie';
    } else if (computerMove === 'paper') {
        result = 'you loss';
    }
    else if (computerMove === 'scissors') {
        result = 'you win';
    }

}
// Update the score based on the result 
if (result === 'you win') {
    score.wins += 1;
} else if (result === 'you loss') {
    score.losses += 1;

} else if (result === 'Tie') {
    score.ties += 1;
}
// Store the updated score in local storage
localStorage.setItem('score', JSON.stringify(score));

updatedScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `you chose ${playerMove} and the computer chose  ${computerMove}. ${result} the game!`;


}

function updatedScoreElement(){
document.querySelector('.js-score').innerHTML = 
` wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}` ;
}


function pickComputerMove() {
const randomNumber = (Math.random());

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
}
return computerMove;

}