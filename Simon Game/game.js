var gamePattern = [];
var userClickPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var beginOrNot = false;
var level = 0;

//Press keyboard, and begin the game.
  $("body").keypress(function() {
    if(!beginOrNot) {
      beginOrNot = true;
      nextSequence();
    }
  });

//Click answer, response, and check
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id"); //or this.id
  userClickPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickPattern.length - 1);
});

//Level up.
function nextSequence() {
  userClickPattern.length = 0;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#level-title").text("Level " + level);
  $("#" + randomChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);
  playSound(randomChosenColor);
  level++;
}

//Level up(nextSequence()) or Game-over.
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    console.log("success");
    if(userClickPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  setTimeout(function() {
    $("#" + currentColor).delay(1000).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern.length = 0;
  beginOrNot = false;
}
