const submit = document.querySelector('#subt');
const user_input = document.querySelector('.GuessField');
const guess_opo = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhigh');
const start = document.querySelector('.resultParas');

let numbers = Math.round(Math.random() * 100 + 1);
console.log(numbers)

const p = document.createElement('p');
let previous_guess = [];
let numGuess = 1;
let Playgame = true;

if (Playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(user_input.value);
        validate(guess);
    });
}

function validate(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        previous_guess.push(guess);
        displayguess(guess);
        checknumber(guess);
        
        if (numGuess === 10) {
            displayMessage(`Game Over! The Random Number was ${numbers}`);
            endgame();
        }
    }
}

function checknumber(guess) {
    if (guess === numbers) {
        displayMessage(' You guessed it right!');
        endgame();
    } else if (guess > numbers) {
        displayMessage(' Number is too high');
    } else if (guess < numbers) {
        displayMessage('     Number is too low');
    }
}

function displayguess(guess) {
    user_input.value = '';
    guess_opo.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    user_input.value = '';
    user_input.setAttribute('disabled', 'true');
    p.classList.add('button');
    p.innerHTML = '<h3 id="newgame">Start New Game</h3>';
    start.appendChild(p);
    Playgame = false;
    newgame();
}

function newgame() {
    let button = document.querySelector('#newgame');
    button.addEventListener('click', function () {
        numbers = Math.round(Math.random() * 100 + 1);
        previous_guess = [];
        numGuess = 1;
        guess_opo.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        user_input.removeAttribute('disabled');
        start.removeChild(p);
        Playgame = true;
    });
}
