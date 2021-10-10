'use strict';

let secretNumber;
let score;
let highScore = 0;

function newRandomNumber() {
    return Math.floor(Math.random() * 20 + 1)
}

function init() {
    resetGame()
    secretNumber = newRandomNumber()
    document.querySelector(".check").addEventListener("click", checkNumber, false)
    document.querySelector(".again").addEventListener("click", resetGame, false)
}

function checkNumber() {
    let number = +document.querySelector(".guess").value
    let win = false
    if(number == secretNumber) {
        win = true 
    } else {
        if(number > secretNumber) {
            document.querySelector(".message").innerHTML = "Troppo grande"
        } else {
            document.querySelector(".message").innerHTML = "Troppo piccolo"
        }
    }
    if(win) {
        document.querySelector(".message").innerHTML = "Esatto"
        document.querySelector(".number").style.backgroundColor = "green"
        document.querySelector("h1").innerHTML = "Guessed my number!"
        document.querySelector("h1").style.color = "green"

    } else {
        score--
    }
    updateScores()
    if(win) {
        setTimeout(2500, resetGame)
    }
}

function updateScores() {
    if(score > highScore) {
        highScore = score
    }
    document.querySelector(".score").innerHTML = score
    document.querySelector(".highscore").innerHTML = highScore

}

function resetGame() {
    score = 20
    document.querySelector(".number").style.backgroundColor = "white"
    document.querySelector("h1").innerHTML = "Guess my number!"
    document.querySelector("h1").style.color = "white"
}