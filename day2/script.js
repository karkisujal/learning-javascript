/*var randomLoc = Math.random();
document.write(randomLoc);

var num = Math.floor(Math.random() * 11);
document.write(num);*/

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

/*console.log(location1);
console.log(location2);
console.log(location3);

while(isSunk == false ){
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



//Javascript Functions

function bark(dogName, dogWeight, comparision){
    if(dogWeight > comparision){
        console.log(dogName + " says WOOF WOOF");
    } else {
        console.log(dogName + " says woof woof");
    }
}

bark("spike", "20", '20');


function whatShallIWear(temp){
    if(temp < 60) {
        console.log("Wear a jacket");
    } else if(temp < 70){
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);


function doIt(param) {
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);



function bake(degrees){
    var message;
    if(degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if(degrees < 100){
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
       // setMode("bake");
       // setTemp("degrees");
    }
    return message;
}

var status = bake(350);

console.log(status);


function calculateArea(r){
    var area;
    if(r <= 0){
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2,
    theArea = calculateArea(radius);
console.log("The ares is: " + theArea);



function clunk(times){
    var num = times;
    while(num > 0){
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size){
    var facky = 1;
    clunkCounter = 0;
    if(size == 0){
        display("clank");
    } else if(size == 1){
        display("thunk");
    } else {
        while(size > 1){
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output){
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);


var balance = 10500,
    cameraOn = true;

function steal(balance, amount){
    cameraOn = false;
    if(amount < balance){
        balance = balance - amount;
    }
    return amount;
    cameraOn = true;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");


function makePhrases(){
    var words1 = ["24/7", "multi-tier", "30,3000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-pont", "strategy", "vision"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
makePhrases();


var scores = [60, 50, 60, 58, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var output,
    i = 0;
/*while(i < (scores.length - 1) ){
    output = "Bubble solution 3" + i + " scores:" + scores[i];
    console.log(output);
    i = i + 1;
}*/

/*var highScore = 0;
for( var l = 0; l < scores.length; l++){
    output = "Bubble solution 3" + l + " scores:" + scores[l];
    console.log(output);
    if(scores[l] > highScore){
        highScore = scores[l];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);*/


/*var bestSolutions = [];
for (var l = 0; l < scores.length; l++) {
    if (scores[l] == highScore) {
        bestSolutions.push(l);
    } }
console.log("Solutions with the highest score: " + bestSolutions);*/


function printAndGetHighScore(scores){
    var highScore = 0,
        output;
    for( var l = 0; l < scores.length; l++){
        output = "Bubble solution 3" + l + " scores:" + scores[l];
        console.log(output);
        if(scores[l] > highScore){
            highScore = scores[l];
        }
    }
    return highScore;
}
var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getBestResults(scores, highScore){
    var bestSolutions = [];
    for (var i = 0; i<scores.length; i++){
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var product = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var j = 0;

while(j < hasBubbleGum.length){
    if(hasBubbleGum[j]){
        console.log(product[j] + " contains bubble gum");
    }
    j= j +1;
}


for( var k = 0; k<hasBubbleGum.length; k++){
    if(hasBubbleGum[k]){
        console.log(product[k] + " contains bubble gum");
    }
}


var genres = [];
genres.push("Rockabilly");
genres.push("Ambient");

var size = genres.length;
console.log(size);