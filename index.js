var randomNumber = (Math.floor(Math.random() * 4) + 1);
var randomColor = ""

  switch (randomNumber) {
    case 1 : randomColor = "green";
    break;

    case 2 : randomColor = "red";
    break;

    case 3 : randomColor = "yellow";
    break;

    case 4 : randomColor = "blue";
    break;
}


$("body").keypress(function () {
  $("h1").text("Level 1");
  makeSound (randomColor);
  makePressed(randomColor);

})

$(".btn").click (function () {

var computerArray = [];
var playerArray = [];

console.log(randomColor2);
console.log(randomColor);

  if(this.id === randomColor || this.id === randomColor2 ) {

makeSound(this.id);
makePressed(this.id);
playerArray.push(this.id);
computerArray.push(randomColor);

randomColor = "randomColor" +"no"

var randomNumber2 = (Math.floor(Math.random() * 4) + 1);
var randomColor2 = ""

  switch (randomNumber2) {
    case 1 : randomColor2 = "green";
    break;

    case 2 : randomColor2 = "red";
    break;

    case 3 : randomColor2 = "yellow";
    break;

    case 4 : randomColor2 = "blue";
    break;
  }


}

else {
  $("h1").text("Game Over, Press Any Key to Restar")

  var gameOverSound = new Audio('sounds/wrong.mp3');
        gameOverSound.play();

  $("body").addClass("game-over")
  setTimeout (function () {$("body").removeClass("game-over")} , 100)
}

  makeSound (randomColor2);
  makePressed(randomColor2);

})




function makeSound (rc) {
  switch (rc) {

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

}
}


function makePressed (pressedButtonId) {
  $("#" + pressedButtonId).addClass("pressed");

  setTimeout (function () {$("#" + pressedButtonId).removeClass("pressed")} , 100)
}
