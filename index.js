var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice6.png

var randomDiceImgSource = "./images/" + randomDiceImg; //./images/dice6.png

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomDiceImgSource);
// Dice 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

var randomDiceImg = "dice" + randomNumber2 + ".png"; //dice6.png

var randomDiceImgSource = "./images/" + randomDiceImg; //./images/dice6.png

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomDiceImgSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerText = "Player 1 Wins🥳 ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerText = "Player 2 Wins 🥳";
} else {
  document.querySelector("h2").innerText = "Draw 😭";
}

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    // If the pressed key is the space bar, reload the page
    location.reload();
  }
});

setTimeout(function () {
  resultMessage.classList.add("entrance");
}, 500);
