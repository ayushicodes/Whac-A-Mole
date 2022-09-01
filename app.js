let square = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let hitPosition;
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
// square.forEach(square => {
//     square.addEventListener('mousedown', () => {
//         if (square.id == hitPosition) {
//             result++
//             score.textContent = result
//             hitPosition = null
//         }
//     })
// })


function moveMole() {
    let timerId = null
    timerId = setInterval(randomNumber, 1000)

}

moveMole()