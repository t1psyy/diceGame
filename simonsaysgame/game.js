let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []
let userClickedPattern = []
let level = 0
var started = false;



// function handleClick(event.target.id) {
//     let userChoosenColor = event.target.id;
//     userChoosenColor.push(userClickedPattern)
// }

function nextSequence() {
    $("body").removeClass("game-over-background")
    var randomNumber = Math.floor(Math.random() * 4)
    let randomlyChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomlyChoosenColor)
    $(`div#${randomlyChoosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomlyChoosenColor)
    level++;
    $("#level-title").text(`Level ${level}`)


}


$(document).keypress(function () {

    if (!started) {
        $("#level-title").text(`Level ${level}`)
        nextSequence()
        started = true;
        $("#smaller-title").addClass("hidden")
    }
})




function playSound(randomlyChoosenColor) {
    let audio = new Audio(`sounds/${randomlyChoosenColor}.mp3`)
    audio.play();
}

$(".btn").click(function (event) {
    userClickedPattern.push(event.target.id)
    playSound(event.target.id)
    $(`div#${event.target.id}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    if (gamePattern.length > 0 && userClickedPattern.toString() == gamePattern.toString()) {
        setTimeout(function () {
            nextSequence()
            userClickedPattern = [];
        }, 500)
    }
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {


    } else {

        $("body").addClass("game-over")
        $("#level-title").text("💀 GAME OVER 💀")
        $("#smaller-title").removeClass("hidden")
        let wrongAnswerSound = new Audio("sounds/wrong.mp3")
        wrongAnswerSound.play();
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)
        setTimeout(function () {
            $("body").addClass("game-over-background");
        }, 200)
        startOver();

    }
}

function startOver() {
    level = 0;
    gamePattern = []
    userClickedPattern = []
    started = false;
}