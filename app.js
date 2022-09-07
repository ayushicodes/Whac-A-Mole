let square = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let hitPosition;
let currentTime = 60
let timerId = null

function randomNumber() {

    square.forEach(square => {
        square.classList.remove('mole')
    });
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}

square.forEach(function (square) {
    square.addEventListener('mousedown', function () {
        if (square.id == hitPosition) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })

})

function moveMole() {
    timerId = setInterval(randomNumber, 500)

}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over!')
    }
}
let countDownTimerId = setInterval(countDown, 1000)