var bankroll = 100

console.log("Your starting bankroll is " + bankroll);

function getRandomNumber() {
	var number = Math.floor((Math.random() * 10) + 1);
	console.log("The number is " + number)
  return number;
}

var number = getRandomNumber();

function getUserGuess() {
	var guess = prompt("Guess a number between 1 and 10.");
	switch(guess) {
		case (guess < 1):
			console.log("Guess higher!");
			var guess = prompt("Guess a number between 1 and 10.");
			break;
		case (guess > 10):
			console.log("Guess lower!");
			var guess = prompt("Guess a number between 1 and 10.");
			break;
		default:
			console.log("You guessed " + guess);
			return guess;
			break;
	}
}

var guess = getUserGuess();

function getUserBet() {
	var bet = prompt("Bet an amount between 5 and 10 dollars.");
	switch(bet) {
		case (bet < 5):
			console.log("Bet higher!");
			var bet = prompt("Bet an amount between 5 and 10 dollars.");
			break;
		case (bet > 10):
			console.log("Bet lower!");
			var bet = prompt("Bet an amount between 5 and 10 dollars.");
			break;
		default:
			console.log("You are betting $" + bet);
			return bet;
			break;
    }
}

var bet = getUserBet();

function verifyGuess() {
	if (bet == number) {
		var verify = true;
    	console.log("You guessed correctly!");
	} else if (Math.abs(bet - number) <= 1) {
		var verify = 0;
    	console.log("You were close! No penalty.");
	} else {
		var verify = false;
    	console.log("You guessed wrong.");
    	return verify;
	}
}

var verify = verifyGuess();

function updateBankroll() {
	if (verify == true) {
		console.log("Congratulations! You win " + bet + " dollars.");
		bankroll = bankroll + bet;
		console.log("Your bankroll is now $" + bankroll);
	} else if (verify === 0) {
		console.log("Your bankroll is still $" + bankroll);
	} else {
		console.log("Sorry. You lose " + bet + " dollars.");
		bankroll = bankroll - bet;
		console.log("Your bankroll is now $" + bankroll);
	}
	return bankroll;
}

var final_bankroll = updateBankroll();


