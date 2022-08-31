let square = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let timeLeft = document.querySelector('time-left')
let score = document.querySelector('score')
let result = 0

function randomNumber() {

    square.forEach(square => {
        square.classList.remove('mole')
    });
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
}



function moveMole() {
    let timerId = null
    timerId = setInterval(randomNumber, 500)
}

moveMole()