const playerOneName = prompt("Podaj imię pierwszego gracza:");
const playerTwoName = prompt("Podaj imię drugiego gracza:");

document.querySelector("p.playerOne").innerHTML = playerOneName;
document.querySelector("p.playerTwo").innerHTML = playerTwoName;

document.querySelector("button").style.display = "block";
document.querySelector("h1").style.display = "block";

let playerOneScore = 0;
let playerTwoScore = 0;


function rollAgain() {

    document.querySelector("button").innerHTML = 'Roll Again <img class="btn-img" src="images/dice.png">';
    document.querySelector("button.new-game-btn").style.display = "block";

    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    let addParagraph = document.createElement("span");
    let drawText = document.createTextNode("Did you know that the chance of getting same number on both dice is 2.78% 🤯");
    let player1Victory = document.createTextNode(`Congratulation ${playerOneName}, you've won!`);
    let player2Victory = document.createTextNode(`Congratulation ${playerTwoName}, you've won!`);


    document.querySelector("img.img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector("img.img2").setAttribute("src", `images/dice${randomNumber2}.png`);


    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
        addParagraph.appendChild(drawText);
        document.querySelector("h1").appendChild(addParagraph);
        document.querySelector("p.playerOneScore").innerHTML = playerOneScore;
        document.querySelector("p.playerTwoScore").innerHTML = playerTwoScore;
    }

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = `👑 ${playerOneName}`;
        addParagraph.appendChild(player1Victory);
        document.querySelector("h1").appendChild(addParagraph);
        playerOneScore++;
        document.querySelector("p.playerOneScore").innerHTML = playerOneScore;
        document.querySelector("p.playerTwoScore").innerHTML = playerTwoScore;
    }

    if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = `${playerTwoName} 👑`;
        addParagraph.appendChild(player2Victory);
        document.querySelector("h1").appendChild(addParagraph);
        playerTwoScore++;
        document.querySelector("p.playerOneScore").innerHTML = playerOneScore;
        document.querySelector("p.playerTwoScore").innerHTML = playerTwoScore;
    }

}

function restartGame() {
    window.location.reload();
}