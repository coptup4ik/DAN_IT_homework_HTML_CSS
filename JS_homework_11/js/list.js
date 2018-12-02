let generateBtn = document.getElementById('generateBtn');
let formToAppend = document.getElementById('fields');
let list = document.getElementById('list');
let clearBtn = document.getElementById('btn');

function generateFields(amount) {
  for (let i = 0; i < amount; i++) {
    let elem = document.createElement('input');
    elem.classList.add('fields__item');
    elem.type = 'text';
    elem.placeholder = 'Введите данные и нажмите Enter'
    formToAppend.appendChild(elem)
  }
}


generateBtn.addEventListener('click', (e) => {
  let amountToCreate = parseInt(document.getElementById('amount').value);
  e.preventDefault();
  if (amountToCreate > 0) {
    generateBtn.style.display = 'none';
    generateFields(amountToCreate);
    assignEventListener();
    clearBtn.style.display = 'block'
  } else {
    alert('Enter number')
  }
});

function createListItem(text) {
  let listItem = document.createElement('li');
  listItem.innerText += text;
  list.appendChild(listItem);
}

function assignEventListener() {
  let listOfInputs = document.querySelectorAll('.fields__item');
  listOfInputs.forEach((item) => {
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createListItem(e.target.value);
        item.remove()
      }
    })
  })
}

clearBtn.addEventListener('click', () => {
  clearBtn.setAttribute('disabled', 'disabled');
  timerInButton();
  setTimeout(() => {
    list.innerText = '';
    generateBtn.style.display = 'block';
    let listOfInputs = document.querySelectorAll('.fields__item');
    listOfInputs.forEach(item => item.remove());
    clearBtn.style.display = 'none';
  }, 4000)
});


let increment = 3;

function timerInButton() {
  let timer = setInterval(() => {
    clearBtn.innerText = `00:0${increment}`;
    increment--;
    clearInterval(timer);
    if (increment < 0) {
      clearInterval(timer);
      clearBtn.innerText = 'Очистить поле';
      clearBtn.removeAttribute('disabled');
      increment = 3;
    } else {
      timerInButton();
    }

  }, 1000);
}