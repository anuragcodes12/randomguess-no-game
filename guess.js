// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

// Guess button
guessButton.addEventListener("click", function () {

    const userGuess = Number(guessInput.value);

    // Check empty input
    if (userGuess === 0 || guessInput.value === "") {
        message.textContent = "⚠️ Please enter a number.";
        return;
    }

    // Check range
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100.";
        return;
    }

    attempts++;

    attemptsDisplay.textContent = attempts;

    // Correct guess
    if (userGuess === randomNumber) {

        message.textContent =
            `🎉 Correct! The number was ${randomNumber}.`;

        guessButton.disabled = true;

    }

    // Guess is too low
    else if (userGuess < randomNumber) {

        message.textContent =
            "📈 Too low! Try a higher number.";

    }

    // Guess is too high
    else {

        message.textContent =
            "📉 Too high! Try a lower number.";

    }

    guessInput.value = "";
    guessInput.focus();
});


// Restart game
restartButton.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsDisplay.textContent = "0";

    message.textContent = "Start guessing!";

    guessInput.value = "";

    guessButton.disabled = false;

    guessInput.focus();
});
