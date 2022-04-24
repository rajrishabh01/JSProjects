const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 120;
let timeToMove = null;

timeLeft.textContent = currentTime;

//use of classList, refers to <div class="mole">
function randomSquares(){
    squares.forEach(square => {
        square.classList.remove('mole');
    }
    )

    //Memorize randomizing - Math.floor for max, Math.ceil for min and * max for range
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id;
}

function moveMole(){
    //cant use randomSquare(), use only randomSquare, for parameters setInterval(function, delay, par1, par2)
    timeToMove = setInterval(randomSquares, 500)
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {

        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(timeToMove);
        clearInterval(timerCountDownInterval);
        alert("Time Over! You score was - " + result);
    }
}

let timerCountDownInterval = setInterval(countDown, 1000);