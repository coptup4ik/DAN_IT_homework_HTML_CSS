/*
* Я совместил продвинутое задание с основным и немного всё усложнил.
* Проверки входящих данных нет*/


function createInputButtons(callback) {
  let formElement = document.createElement('form');
  formElement.classList.add('form');
  formElement.innerHTML =
    `<input type="text" placeholder="Введите количество кругов" id="circleCount" class="form__input">
    <input type="submit" value="Нарисовать" class="form__btn" id="createCircle">`;

  document.body.appendChild(formElement);
  callback();
}

let createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', () => {
  createBtn.classList.add('inactive');
});

createBtn.addEventListener('animationend', () => {
  createInputButtons(getAmountOfCircles);
  createBtn.style.display = 'none';
});

function getAmountOfCircles() {
  let form = document.querySelector('.form');
  let amountInputElement = document.getElementById('circleCount');
  let button = document.getElementById('createCircle');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (generateCircles(+amountInputElement.value)) {
      form.classList.add('inactive');
      form.addEventListener('animationend', () => {
        form.remove();
      })
    }
  })
}

function generateCircles(value) {
  if (value > 300) {
    alert('Слишком много');
    return false
  } else if (value <= 0) {
    alert('Слишком мало');
    return false
  } else {
    for (let i = 0; i < value; i++) {
      setTimeout(() => {
        let circle = document.createElement('div');
        let colors = {
          red: randomInteger(0, 255),
          green: randomInteger(0, 255),
          blue: randomInteger(0, 255)
        };
        circle.classList.add('circle');
        circle.style.top = randomInteger(0, 100) + "%";
        circle.style.left = randomInteger(0, 100) + "%";
        circle.style.width = randomInteger(20, 100) + "px";
        circle.style.height = circle.style.width;
        circle.style.backgroundColor = `rgb(${colors.red},${colors.green},${colors.blue})`;
        document.body.appendChild(circle);

      }, i * 10)
    }
    makeCirclesMove();
    return true
  }
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

document.addEventListener('click', (e) => {
  if (e.target.className === 'circle') {
    e.target.remove();
  }
});

function makeCirclesMove() {
  let timer = setInterval(() => {
    let circles = document.querySelectorAll('.circle');
    circles.forEach((item) => {
      item.style.transform = `translate(-${randomInteger(0, 200)}%,-${randomInteger(0, 200)}%)`
    });
    clearInterval(timer);
    makeCirclesMove()
  }, 1000)
}
