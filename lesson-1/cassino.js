let firstCart = 6;
let secondCart = 1;
let myCards=[firstCart,secondCart]
let resut = firstCart + secondCart;
let messege = "";
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let response = document.getElementById("response");
let startgame = document.getElementById("startgame");
let newCard = document.getElementById("newCard");
let randomNumber = Math.floor(Math.random() * 21);

function renderGame() {
  //render out first card and second card.
  cards.textContent = myCards[0] + " + " + myCards[1];
  if (resut < 21) {
    messege = "Do you want to play a game?";
  } else if (resut === 21) {
    messege = "you have got the Blackjack";
  } else {
    messege = "you are out of the game";
  }
  response.textContent = messege;
  sum.textContent = resut;
}
startgame.addEventListener("click", renderGame);

newCard.addEventListener("click", () => {
  let card = 17;
  resut += card;
  renderGame();
});
