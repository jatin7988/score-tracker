let currentHomeScore = document.getElementById("scoreHome").textContent;
let scoreCardOne = document.getElementById("scoreHome")

function homeOne() {
    let score = Number(currentHomeScore) + 1;
    currentHomeScore = score;
    scoreCardOne.textContent = score;
}

function homeTwo() {
    let score = Number(currentHomeScore) + 2;
    currentHomeScore = score;
    scoreCardOne.textContent = score;
}

function homeThree() {
    let score = Number(currentHomeScore) + 3;
    currentScore = score;
    scoreCardOne.textContent = score;
}