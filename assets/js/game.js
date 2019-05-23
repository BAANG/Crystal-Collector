// Define starting variables for game

var wins = 0;
var losses = 0;
var playerCount = 0; // variable for tracking player's current count
var cpuCount = (Math.floor(Math.random() * 41 + 10)); // variable for tracking cpu's random number (10-50)
    // console.log(cpuCount + " is the cpuCount")
var crystal1 = 1; // one crystal is always valued at 1
    // console.log(crystal1 + " is always 1");
var crystal2 = (Math.floor(Math.random() * 4 + 2 )); // one crystal is always valued between 2-5
    // console.log(crystal2 + " is 2-5");
var crystal3 = (Math.floor(Math.random() * 5 + 6 )); // one crystal is always 6-10
    // console.log(crystal3 + " is 6-10")
var crystal4 = (Math.floor(Math.random() * 5 + 11)); // one crystal is always 11-15
    // console.log(crystal4 + " is 11-15")
