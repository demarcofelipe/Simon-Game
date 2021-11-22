var gamePattern = []
var userClickedPattern = []


var buttonColours = ["red","blue","green","yellow"]

var level = 0
var started = false

$("body").keypress ( function() {
  if(started===false) {
  nextSequence();
  started = true;
}
})

$(".btn").click (function() {

  makeSound (this.id);
  makePressed (this.id);

  userClickedPattern.push(this.id)
  var indexOflastAnswer = userClickedPattern.length - 1

if (userClickedPattern[indexOflastAnswer] === gamePattern [indexOflastAnswer]){
if (userClickedPattern.length === gamePattern.length) {
  setTimeout (function(){nextSequence()}, 1000)
  userClickedPattern = [];
}} else {

  $("h1").text("Game Over, Press Any Key to Restar")

  var gameOverSound = new Audio('sounds/wrong.mp3');
        gameOverSound.play();

  $("body").addClass("game-over")
  setTimeout (function () {$("body").removeClass("game-over")} , 200);

  startOver();

}

})

function startOver () {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;

  }


function nextSequence (){

  level ++;

  $("h1").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);

  makeSound (randomChoosenColour);
  makeflash(randomChoosenColour);
  makePressed(randomChoosenColour)

}



function makeSound (name) {
  switch (name) {

  case "green": var green = new Audio('sounds/green.mp3');
        green.play();

  break;

  case "red" : var red = new Audio('sounds/red.mp3');
        red.play();
  break;

  case "yellow" : var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
  break;

  case "blue" : var blue = new Audio('sounds/blue.mp3');
        blue.play();
  break;

// mas corto:
//   function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
//   }
}
}

function makeflash (colour) {
$("#"+colour).fadeOut(200).fadeIn(200); }

function makePressed (pressedButtonId) {
  $("#" + pressedButtonId).addClass("pressed");

  setTimeout (function () {$("#" + pressedButtonId).removeClass("pressed")} , 100)
}
