var location1 = 3,
    location2 = 4,
    location3 = 5,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

/*while(isSunk == false ){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if(guess < 0 || guess > 6){
        alert("Please enter a valid cell number");
    } else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){
            alert("HIT!")
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else {
            alert("MISS");
        }
    }
}

var stats = "You took " + guesses + " guesses to sin the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);*/


//test1
var temp = 81,
    willRain = true,
    humid = (temp > 80 && willRain == true);
document.write("What's the value of <strong>humid? </strong><u>" + humid + "</u><br>");

//test2
var guess1 = 6,
    isValid = (guess1 >= 0 && guess1 <=6);
document.write("What's the value of <strong>isValid? </strong><u>" + isValid + "</u><br>");

//test3
var kB = 1287,
    tooBig = (kB > 1000),
    urgent = true,
    sendFile = (urgent == true || tooBig == false);
document.write("What's the value of <strong>sendFile? </strong><u>" + sendFile + "</u><br>");

//test4
var keyPresses = "N",
    points = 142,
    level;
if(keyPresses == "Y" || (points > 100 && points < 200)){
    level = 2;
} else {
    level = 1;
}
document.write("What's the value of <strong>level? </strong><u>" + level + "</u><br>");

var randomLoc = Math.random();
document.write(randomLoc);

var num = Math.floor(Math.random() * 11);
document.write(num);