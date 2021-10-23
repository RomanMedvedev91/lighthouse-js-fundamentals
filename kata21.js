let prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * 100);
let countAttempt = 0;
let tempLastNumber = 0;

const guessNumberResponse = function (randomNumber) {
  while (tempLastNumber !== randomNumber) {
    let guessNumber = parseInt(prompt("Guess a number: "));

    if (typeof guessNumber !== "number" || isNaN(guessNumber)) {
      console.log("Type Error: answer is non a number, please try again");
    }

    if (guessNumber === randomNumber) {
      countAttempt++;
      tempLastNumber = guessNumber;
      return "You win! with " + countAttempt + " attempts";
    }

    if (guessNumber > randomNumber) {
      if (guessNumber === tempLastNumber) console.log("Already Guessed!");
      else {
        countAttempt++;
        tempLastNumber = guessNumber;
        console.log("Too High!");
      }
    }
    if (guessNumber < randomNumber) {
      if (guessNumber === tempLastNumber) {
        console.log("Already Guessed!");
      } else {
        countAttempt++;
        tempLastNumber = guessNumber;
        console.log("Too Low!");
      }
    }
  }
};

console.log(guessNumberResponse(randomNumber));
