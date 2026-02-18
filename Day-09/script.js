
// Fixed correct number as 76
let randomNumber = 76;

// Limit number of attempts
let maxAttempts = 7;
let currentAttempts = 0;

// Function to check user's guess
function checkGuess() {
    // Convert input from String to Number
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    // Increase attempt count
    currentAttempts++;

    // If attempts exceed limit
    if (currentAttempts > maxAttempts) {
        message.textContent = "❌ Game Over! The correct number was " + randomNumber;
        return;
    }

    // If/Else logic for checking
    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too High! Try Again.";
    } 
    else if (userGuess < randomNumber) {
        message.textContent = "📈 Too Low! Try Again.";
    } 
    else {
        message.textContent = "⚠ Please enter a valid number!";
    }

    attempts.textContent = "Attempts: " + currentAttempts + " / " + maxAttempts;
}
