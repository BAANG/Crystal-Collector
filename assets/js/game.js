// Define starting variables for game

var wins = 0;
var losses = 0;
var playerCount = 0; // variable for tracking player's current count
var cpuCount = (Math.floor(Math.random() * 41 + 10)); // variable for tracking cpu's random number (10-50)
    // console.log(cpuCount + " is the cpuCount")

var rollCount = function (){ //rerolls cpuCount value
    cpuCount = (Math.floor(Math.random() * 41 + 10));
}
    
var drink1 = 1; // one drink is always valued at 1
// console.log(drink1 + " is always 1");
var drink2
var drink3
var drink4
var drink5


// functions to reroll random values of drinks

var rollDrinks = function() { 
    drink2 = (Math.floor(Math.random() * 4 + 2 )); // one drink is always valued between 2-5
    // console.log(drink2 + " is 2-5");
    drink3 = (Math.floor(Math.random() * 5 + 6 )); // one drink is always 6-10
    // console.log(drink3 + " is 6-10")
    (Math.floor(Math.random() * 5 + 11)); // one drink is always 11-15
    // console.log(drink4 + " is 11-15")
    (Math.floor(Math.random() * 5 + 16)); // one drink is always 16-20
    // console.log(drink5 + " is 16-20")
 } 

var drinkArray = [drink2, drink3, drink4, drink5]; // array that stores the values of each of the four drinks

var customerText = [ //array of customer dialogues
    "'Gimme something that'll make me pass out yesterday! Here's $" + cpuCount + "'",
    "'I only have $" + cpuCount + " how many alcohols can I get with that?'",
    "'Gimme the works!' Your customer hands you a crumpled up wad of singles worth $" + cpuCount + " Better spit in his drink.",
    "'Can I have a water!?' This man clearly needs it because he handed you $" + cpuCount + " for something that's free. Make him something worth his money.",
    "'It's my 21st birthday! How much alcohol is this?' They hand you $" + cpuCount + ".",
    "'SHOTS ALL AROUND!' Your customer hands you their credit card and tells that they only have $" + cpuCount + "left until they overdraft..."
]

var setDrinkValues = function(){
    $("#drink2").attr("value", drinkArray[0])
    $("#drink3").attr("value", drinkArray[1])
    $("#drink4").attr("value", drinkArray[2])
    $("#drink5").attr("value", drinkArray[3])
}   

$(document).ready(function() { //on document load... [SET ALL VALUES FOR GAME START]
    var i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text

        $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
        $("#cpuCount").text("$" + cpuCount)


    

});


resetGame = function() { //on game reset...
    i = (Math.floor(Math.random() * (customerText.length))); //chooses random customer text
    rollCount(); //chooses random target number


    $("#customerText").text(customerText[i]) //prints the customertext prompt with embedded random number
}

