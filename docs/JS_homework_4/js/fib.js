/*
* Здесь нет проверки входящих данных что-бы не усложнять код и не писать лишнего.
* Код позволяет вывести последовательность Фибоначчи любых чисел
* */

const
  FIRST = document.getElementById('fib'),
  SECOND = document.getElementById('fib2'),
  THIRD = document.getElementById('fib3'),
  BUTTON = document.getElementById('fib4'),
  NUMBERS = document.querySelector('.numbers');


function fib(first, second, count) {
  let array = [];
  array.push(first);
  if (count < 0){
    count *= -1
  }
  function f(first, second) {
    array.push(second);
    if (array.length === count) {
      return array
    } else {
      f(second, first + second)
    }
  }
  f(first, second);
  return array
}

function generateFib(first, second, third) {
  NUMBERS.innerText = fib(+first, +second, +third);
}

BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  generateFib(FIRST.value, SECOND.value, THIRD.value);
});



