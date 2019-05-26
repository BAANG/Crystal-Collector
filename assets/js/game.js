$(document).ready(function() {
// Define starting variables for game

var wins = 0;
var losses = 0;
var playerCount = 0; // variable for tracking player's current count
var cpuCount = (Math.floor(Math.random() * 51 + 20)); // variable for tracking cpu's random number (20-70) | also sets the first count when starting game.
    // console.log(cpuCount + " is the cpuCount")

var rollCount = function (){ //rerolls cpuCount value
    cpuCount = (Math.floor(Math.random() * 51 + 20)); // variable for tracking cpu's random number (20-70)
    $("#cpuCount").text("$" + cpuCount)
    $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
}
    
var drink1 = 1; // one drink is always valued at 1
// console.log(drink1 + " is always 1");
var drink2
var drink3
var drink4
var drink5
var drinkArray = [drink2, drink3, drink4, drink5]; // array that stores the values of each of the four drinks



var rollDrinks = function() {  // function to reroll random values of drinks and shuffle array
    drink2 = (Math.floor(Math.random() * 4 + 2 )); // one drink is always valued between 2-5
    // console.log(drink2 + " is 2-5");
    drink3 = (Math.floor(Math.random() * 5 + 6 )); // one drink is always 6-10
    // console.log(drink3 + " is 6-10")
    drink4 = (Math.floor(Math.random() * 5 + 11)); // one drink is always 11-15
    // console.log(drink4 + " is 11-15")
    drink5 = (Math.floor(Math.random() * 5 + 16)); // one drink is always 16-20
    // console.log(drink5 + " is 16-20")

    drinkArray = [drink2, drink3, drink4, drink5];

    randomBtns(drinkArray);

        $("#drink2").attr("value", drinkArray[0])
        $("#drink3").attr("value", drinkArray[1])
        $("#drink4").attr("value", drinkArray[2])
        $("#drink5").attr("value", drinkArray[3])

        playerCount = 0;

        console.log(drinkArray[0], drinkArray[1], drinkArray[2], drinkArray[3])
 } // end reroll drinks functions


var randomBtns = function(array) { //function to randomize index of drinkArray
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    } // end function
    
    var customerText = [ //array of customer dialogues
        "Gimme something that'll make me pass out yesterday!",
        "How many alcohols can I get with that?'",
        "'Gimme the works!' Your customer hands you a crumpled up wad of singles...",
        "'Can I have a water!?' This man clearly needs it because he paid you for water. Make him something worth his money.",
        "It's my 21st birthday! How much alcohol is this?",
        "SHOTS FOR THE WHOLE BAR!",
        "First round's on me.",
        "Do you know how to make an Jameson & ginger ale?",
        "Make me your best drink!",
        "Can I get AMFs for me and all of my friends?!",
        "Can you make me something pretty for my Instagram page?",
        "Can I have your special?"
    ]

resetGame = function() { //game reset function...
    i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
    rollCount(); //chooses random target number & prints new count
    rollDrinks();
    $("#playerCount").text("$0")

    console.log(cpuCount)


} // end function


//BEGINNING GAME STATE
var i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
rollDrinks();
$("#cpuCount").text("$" + cpuCount)
$("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
console.log(cpuCount + " is correct")


//ON CLICK EVENT LISTENERS
var audio = $("#sfx")[0];
$(".button").on("click", function() {
    audio.play();
});

$("#drink1").on("click", function(){
    playerCount += 1
    $("#playerCount").text("$" + playerCount)
})
$("#drink2").on("click", function(){
    playerCount += drinkArray[0]
    $("#playerCount").text("$" + playerCount)
})
$("#drink3").on("click", function(){
    playerCount += drinkArray[1]
    $("#playerCount").text("$" + playerCount)
})
$("#drink4").on("click", function(){
    playerCount += drinkArray[2]
    $("#playerCount").text("$" + playerCount)
})
$("#drink5").on("click", function(){
    playerCount += drinkArray[3]
    $("#playerCount").text("$" + playerCount)
})

$(".button").on("click", function() {
    if (playerCount === cpuCount) {
        resetGame();
        wins++;
        $("#wins").text(wins)
    } else if (playerCount > cpuCount)  {
        resetGame();
        losses++;
        $("#losses").text(losses)
        }
    })
});

//TO-DO: Check and fix reset game functionality. (Reprint correct values, mostly)


