let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

// document.querySelector('.js-result').innerHTML = (`${result}`);
//document.querySelector('.js-moves').innerHTML = (`You ${playerMove} - ${computerMove} Computer`);



// if (score === null) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0

//     }
// }



function playGame(playerMove) {
    const computerMove = pickingComputerMove();
    let result = '';

    if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissor') {
            result = 'Tie';
        }


    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissor') {
            result = 'You lose';
        }


    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissor') {
            result = 'You win';
        }

    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }



    localStorage.setItem('score', JSON.stringify(score));


    updateScoreElement();

    //             alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You 
            <img src="images/${playerMove}-emoji.png" class = "move-icon"> 
            <img src="images/${computerMove}-emoji.png" class = "move-icon"> 
            Computer`;






}




function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickingComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }

    return computerMove;

}


// function calculateTax(cost, taxPercent = 0.1) {
//     console.log(cost * taxPercent);
//}