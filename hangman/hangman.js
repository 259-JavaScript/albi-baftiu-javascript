
let word = "technology";
let attempts = 6;
let guessedLetters = [];

let hiddenWord = Array(word.length).fill("_");

while (attempts > 0 && hiddenWord.includes("_")) {

    alert("Word: " + hiddenWord.join(" "));
    alert("Letters used: " + guessedLetters.join(", "));
    alert("Attempts left: " + attempts);

    let guess = prompt("Guess a letter:").toLowerCase();

    if (guess === null || guess === "") {
        alert("Please enter a letter!");
        continue;
    }

    if (guessedLetters.includes(guess)) {
        alert("You already guessed that letter!");
        continue;
    }

    guessedLetters.push(guess);

    let correct = false;

    for (let i = 0; i < word.length; i++) {

        if (word[i] === guess) {
            hiddenWord[i] = guess;
            correct = true;
        }

    }

    if (correct) {
        alert("Correct guess!");
    } else {
        attempts--;
        alert("Wrong guess!");
    }
}

if (hiddenWord.includes("_")) {
    alert("Game Over! The word was: " + word);
} else {
    alert("Congratulations! You guessed the word: " + word);
}
