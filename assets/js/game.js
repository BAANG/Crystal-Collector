// Define starting variables for game

var wins = 0;
var losses = 0;
var playerCount = 0; // variable for tracking player's current count
var cpuCount = (Math.floor(Math.random() * 41 + 10)); // variable for tracking cpu's random number (10-50)
    // console.log(cpuCount + " is the cpuCount")

var customerText = [ //array of customer dialogues
    "'Gimme something that'll make me pass out yesterday! Here's $" + cpuCount + "'",
    "'I only have $" + cpuCount + " how many alcohols can I get with that?'",
    "'Gimme the works!' Your customer hands you a crumpled up wad of singles worth $" + cpuCount + " Better spit in his drink.",
    "'Can I have a water!?' This man clearly needs it because he handed you $" + cpuCount + " for something that's free. Make him something worth his money."
]

$(document).ready(function() { //on document load...
var i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
    
    $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
});


resetGame = function() { //on game reset...
i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
cpuCount = (Math.floor(Math.random() * 41 + 10)); //chooses random target number

    $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
}


var drink1 = 1; // one drink is always valued at 1
    // console.log(drink1 + " is always 1");
var drink2 = (Math.floor(Math.random() * 4 + 2 )); // one drink is always valued between 2-5
    // console.log(drink2 + " is 2-5");
var drink3 = (Math.floor(Math.random() * 5 + 6 )); // one drink is always 6-10
    // console.log(drink3 + " is 6-10")
var drink4 = (Math.floor(Math.random() * 5 + 11)); // one drink is always 11-15
    // console.log(drink4 + " is 11-15")
var drinkArray = [drink1, drink2, drink3, drink4]; // array that stores the values of each of the four drinks
