
let choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let botScore = 0;

let playAgain = "yes";

while (playAgain === "yes") {

    let player = prompt("Choose rock, paper, or scissors:").toLowerCase();

    if (player !== "rock" && player !== "paper" && player !== "scissors") {
        alert("Invalid choice! Please try again.");
        continue;
    }

    let randomNumber = Math.floor(Math.random() * 3);

    let bot = choices[randomNumber];

    alert("You chose: " + player);
    alert("Bot chose: " + bot);

    if (player === bot) {
        alert("It's a tie!");

    } else if (
        (player === "rock" && bot === "scissors") ||
        (player === "paper" && bot === "rock") ||
        (player === "scissors" && bot === "paper")
    ) {
        alert("You win!");
        playerScore++;

    } else {
        alert("Bot wins!");
        botScore++;
    }

    alert("Your score: " + playerScore);
    alert("Bot score: " + botScore);

    playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
}

alert(
    "Game finished!\n" +
    "Your final score: " + playerScore + "\n" +
    "Bot final score: " + botScore
);