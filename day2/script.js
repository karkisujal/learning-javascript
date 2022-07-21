var location1 = 3,
    location2 = 4,
    location3 = 5,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

while(isSunk == false ){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if(guess < 0 || guess > 6){
        alert("Please enter a valid cell number");
    } else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship!")
            }
        }
    }
}

var stats = "You took " + guesses + " guesses to sin the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);