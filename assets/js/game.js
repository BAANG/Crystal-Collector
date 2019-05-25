$(document).ready(function() {
// Define starting variables for game

var wins = 0;
var losses = 0;
var playerCount = 0; // variable for tracking player's current count
var cpuCount = (Math.floor(Math.random() * 51 + 10)); // variable for tracking cpu's random number (10-60)
    // console.log(cpuCount + " is the cpuCount")

var rollCount = function (){ //rerolls cpuCount value
    cpuCount = (Math.floor(Math.random() * 51 + 10));
}
    
var drink1 = 1; // one drink is always valued at 1
// console.log(drink1 + " is always 1");
var drink2
var drink3
var drink4
var drink5
var drinkArray = [drink2, drink3, drink4, drink5]; // array that stores the values of each of the four drinks
var playerCount = 0;




var rollDrinks = function() {  // function to reroll random values of drinks 
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

        console.log(drinkArray[0], drinkArray[1], drinkArray[2], drinkArray[3])
 } // end reroll drinks functions


 var randomBtns = function(array){ //function to randomize index of drinkArray
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

resetGame = function() { //game reset function...
    i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
    rollCount(); //chooses random target number
    rollDrinks();


    $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
} // end function

var customerText = [ //array of customer dialogues
    "'Gimme something that'll make me pass out yesterday! Here's $" + cpuCount + "'",
    "'I only have $" + cpuCount + " how many alcohols can I get with that?'",
    "'Gimme the works!' Your customer hands you a crumpled up wad of singles worth $" + cpuCount + " Better spit in his drink.",
    "'Can I have a water!?' This man clearly needs it because he handed you $" + cpuCount + " for something that's free. Make him something worth his money.",
    "'It's my 21st birthday! How much alcohol is this?' They hand you $" + cpuCount + ".",
    "'SHOTS ALL AROUND!' Your customer hands you their credit card and tells that they only have $" + cpuCount + "left until they overdraft..."
]

//BEGINNING GAME STATE
var i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
rollCount();
rollDrinks();
$("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
$("#cpuCount").text("$" + cpuCount)

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

    

});



