//setTimeout(wakeUpUser, 5000);
function wakeUpUser(){
    alert("Are you going to stare at this boring page forever?")
}


var price = 28.99,
    discount = 10,
    total = price - (price * (discount / 100));
if(total > 25 ){
    freeShipping();
}

function freeShipping(){
    alert("Free Shipping");
}

var count = 10;
while (count > 0){
    //juggle();
    count = count - 1;
}
function juggle(){
    //alert("loop count")
}
var dog = {name: "Rover", weight: 35 };
if(dog.weight > 30){
    alert("WOOF WOOF");
} else {
    alert("woof woof")
}

var circleRadius = 20,
    circleArea = Math.PI * (circleRadius * circleRadius);
console.log(circleArea);

function tempCalculator(temp){
    var output = (9 / 5) * temp + 32;
    console.log(output)
}
tempCalculator(10);

function colorCheck(col){
    var result = (col != "orange");
    console.log(result);
  /*  if(col != "orange"){
        console.log('color is true')
    } else {
        console.log('color is false')
    }*/
}
colorCheck("pink")

function compareNumber(yourLevel, secondLevel){
    if(yourLevel > secondLevel){
        console.log(yourLevel + "here")
    } else {
        console.log(secondLevel + "there")
    }
}
compareNumber(7, 5);

function calculateBonus(level, points, bonus){
    var result = (level * points) + bonus;
    console.log("Your total bonus is " + result);
}

calculateBonus(5, 30000, 3300);

var scoops = 5;
while(scoops > 0) {
    document.write("Another scoop! <br>");
    scoops = scoops - 1;
}
document.write("life without isc cream isn't the same<br>");

var i = 0,
    name = "Joe";
while(i < 2){
    document.write("Happy birthday to you.<br>");
    i = i + 1;
}
document.write("Happy Birthday dear " + name + ", <br>")
document.write("Happy Birthday to you. <br>");



var word = "bottles";
var counter = 99;
while (counter > 0) {
    console.log(counter + " " + word + " of beer on the wall");
    console.log(counter + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    counter = counter - 1;
    if (counter > 0) {
        console.log(counter + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    } }