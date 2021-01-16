// Create the Randomness to specifications
// Then Attach that randomness to your image
// Link Randomimage to source folder
// Create variables for the images using querySelectorAll and Array Structure
// Set our new Random Image using setAttribute format

var randomNumber1 = Math.floor((Math.random() * 6) + 1);  //Random Number Generator 1-6
var randomNumber2 = Math.floor((Math.random() * 6) + 1);  //Random Number Generator 1-6


var randomDiceImage = "dice" + randomNumber1 + ".png";  // Generate a Random Image using randomNumber1 and source;

var randomImageSource = "images/" + randomDiceImage; // Our source for Image1

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // Generate a Random Image using randomNumber 2 and source;

var randomImageSource2 = "images/" + randomDiceImage2; // Our source for image2



var image1 = document.querySelectorAll("img")[0];  // Assign Variables to our selectors
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource)  //Sets our attribute using our randomness
image2.setAttribute("src", randomImageSource2)

var winner = document.querySelector("h1");  // Assign variable to our H1

// Logic to Assign a Winnner
if (randomNumber1 > randomNumber2){
    winner.innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1){
    winner.innerHTML = "Player 2 Wins";
} else {
    winner.innerHTML = "Draw";
}