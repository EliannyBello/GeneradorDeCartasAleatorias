/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
};

function generateCard() {
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const palos = ["heart", "spade", "club", "diamond"];
  const simbolos = { heart: "♥", spade: "♠", club: "♣", diamond: "♦" };

  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  const card = document.getElementById("card");
  const cardValueTop = document.getElementById("cardValueTop");
  const cardSuit = document.getElementById("cardSuit");
  const cardValueBottom = document.getElementById("cardValueBottom");

  card.className = "card " + paloAleatorio;

  cardValueTop.textContent = simbolos[paloAleatorio];
  cardSuit.textContent = valorAleatorio;
  cardValueBottom.textContent = simbolos[paloAleatorio];
}
