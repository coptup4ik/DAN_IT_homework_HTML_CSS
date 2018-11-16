/*
* Реализация факториала с помощью рекурсии
* */


const
  FACTORIAL = document.querySelector('#factorial'),
  CHECK_BTN = document.querySelector('#factorialBtn'),
  MAIN_ELEMENT = document.querySelector('.form'),
  NUMBERS = document.querySelector('.numbers');


function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1)
  }
}

function checkInputs(value) {
  if (!Number.isInteger(+value) || isNaN(+value)) {
    MAIN_ELEMENT.classList.add('error');
    return false
  } else {
    MAIN_ELEMENT.classList.remove('error');
    NUMBERS.textContent = "";
    return true
  }
}

function generateFactorial(value) {

  if (checkInputs(value)) {
    NUMBERS.textContent = factorial(+value)
  }

}

CHECK_BTN.addEventListener('click', () => {
  generateFactorial(FACTORIAL.value);
});



