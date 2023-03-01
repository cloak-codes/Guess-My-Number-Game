'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // No input
    if (!guess) {
        displayMessage('😢 No number entered!')

        // When player wins   
    } else if (guess == secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess != secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Number too big!' : '📉 Number too small!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "😒 You lost the game!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }

    //Reset game
    document.querySelector('.again').addEventListener('click', function () {
        score = 10;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ' ';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });
})
