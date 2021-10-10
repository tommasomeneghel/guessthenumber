'use strict';

let secretNumber = 0;
let highScore = 0;
let score = 0;

function init() {
    secretNumber = newSecretNumber()
    document.querySelector(".check").addEventListener("click", checkNumber, false)
    resetGame()
}

function checkNumber() {
    let number = +document.querySelector(".guess").value
    if(secretNumber > number) {
        document.querySelector(".message").innerHTML = "Troppo piccolo"
        score--
        updateScore()
    } else if(secretNumber < number) {
        document.querySelector(".message").innerHTML = "Troppo grande"
        score--
        updateScore()
    } else {
        win()
    }
}

function resetGame() {
    score = 20
    updateScore()
    secretNumber = newSecretNumber()
    document.querySelector("div.number").style.backgroundColor = "white"
    document.querySelector(".message").innerHTML = "Start guessing..."
}

function win() {
    document.querySelector(".message").innerHTML = "Esatto"
    document.querySelector("div.number").style.backgroundColor = "green"
    if(score > highScore) {
        updateHighScore()
    }
    setTimeout(1500)
    resetGame()
}

function updateScore() {
    document.querySelector(".score").innerHTML = score
}

function updateHighScore() {
    highScore = score
    document.querySelector(".score").innerHTML = highScore
}

function newSecretNumber() {
    return Math.floor(Math.random() * 20) + 1
}

init()