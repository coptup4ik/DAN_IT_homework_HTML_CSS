let timer = document.createElement('div');
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
timer.innerText =
  `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds}`;

let startButton = document.createElement('button');
startButton.innerText = 'START';
startButton.className = 'btn';

let clearButton = document.createElement('button');
clearButton.innerText = 'CLEAR';
clearButton.className = 'btn';

let started = false;

document.querySelector('.wrapper').append(timer, startButton, clearButton);

function setValues() {
  timer.innerText =
    `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds}`;

}

startButton.addEventListener('click', () => {
  started = !started;
  let date = new Date();

  function timer() {
    let timerFunction = setInterval(() => {

      if (started) {
        clearButton.setAttribute('disabled', 'disabled')
        startButton.innerText = 'PAUSE';

        milliseconds += 50;

        if (milliseconds >= 1000) {
          seconds++;
          milliseconds = 0;
        }

        if (seconds === 59) {
          seconds = 0;
          minutes++
        }

        if (minutes === 59) {
          minutes = 0;
          hours++
        }

        setValues();
        clearInterval(timerFunction);
        timer();

      } else {
        milliseconds = new Date().getMilliseconds();
        setValues();
        startButton.innerText = 'START';
        clearButton.removeAttribute('disabled');
        clearInterval(timerFunction)
      }

    }, 50);

  }

  timer();


});

clearButton.addEventListener('click', () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  setValues()
});