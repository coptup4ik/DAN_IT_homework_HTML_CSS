/*
* Без проверки введенных данных.
* */

function showDateOfBirth() {
  let dateOfBirth = document.querySelector('.form__input');

  dateOfBirth.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateAge(dateOfBirth.value);
      generateZodiac(dateOfBirth.value);
      generateChineseZodiac(dateOfBirth.value)
    }
  })
}

function generateAge(value) {
  let ageElement = document.getElementById('age');
  ageElement.innerText = `Вам ${new Date().getFullYear() - value.split('.')[2]} лет!`
}

function generateZodiac(value) {
  let zodiacElement = document.getElementById('zodiac');

  let zod_signs = ["Козерог", "Водолей", "Рыбы", "Овен",
    "Телец", "Близнецы", "Рак", "Лев", "Девы", "Весы", "Скорпион",
    "Стрелец"];
  let day = +value.split('.')[0]-1;
  let month = +value.split('.')[1]-1;
  let zodiacSign = "";
  switch (month) {
    case 0: {//January
      if (day < 20)
        zodiacSign = zod_signs[0];
      else
        zodiacSign = zod_signs[1];
    }
      break;
    case 1: {//February
      if (day < 19)
        zodiacSign = zod_signs[1];
      else
        zodiacSign = zod_signs[2];
    }
      break;
    case 2: {//March
      if (day < 21)
        zodiacSign = zod_signs[2];
      else
        zodiacSign = zod_signs[3];
    }
      break;
    case 3: {//April
      if (day < 20)
        zodiacSign = zod_signs[3];
      else
        zodiacSign = zod_signs[4];
    }
      break;
    case 4: {//May
      if (day < 21)
        zodiacSign = zod_signs[4];
      else
        zodiacSign = zod_signs[5];
    }
      break;
    case 5: {//June
      if (day < 21)
        zodiacSign = zod_signs[5];
      else
        zodiacSign = zod_signs[6];
    }
      break;
    case 6: {//July
      if (day < 23)
        zodiacSign = zod_signs[6];
      else
        zodiacSign = zod_signs[7];
    }
      break;
    case 7: {//August
      if (day < 23)
        zodiacSign = zod_signs[7];
      else
        zodiacSign = zod_signs[8];
    }
      break;
    case 8: {//September
      if (day < 23)
        zodiacSign = zod_signs[8];
      else
        zodiacSign = zod_signs[9];
    }
      break;
    case 9: {//October
      if (day < 23)
        zodiacSign = zod_signs[9];
      else
        zodiacSign = zod_signs[10];
    }
      break;
    case 10: {//November
      if (day < 22)
        zodiacSign = zod_signs[10];
      else
        zodiacSign = zod_signs[11];
    }
      break;
    case 11: {//December
      if (day < 22)
        zodiacSign = zod_signs[11];
      else
        zodiacSign = zod_signs[0];
    }
      break;
  }
  zodiacElement.innerText = `Ваш знак зодиака "${zodiacSign}"`;
}

function generateChineseZodiac(value) {
  let year = value.split('.')[2];
  let elementChineseZodiac = document.querySelector('.picture');
  let picture = '';

  let zodiacs = {
    'Rat' : './assets/img/rat.jpg',
    'Ox' : './assets/img/ox.jpg',
    'Tiger' : './assets/img/tiger.jpg',
    'Rabbit' : './assets/img/rabbit.jpg',
    'Dragon' : './assets/img/dragon.jpg',
    'Snake' : './assets/img/snake.jpg',
    'Horse' : './assets/img/horse.jpg',
    'Goat' : './assets/img/goat.jpg',
    'Monkey' : './assets/img/monkey.jpg',
    'Rooster' : './assets/img/rooster.jpg',
    'Dog' : './assets/img/dog.jpg',
    'Pig' : './assets/img/pig.jpg',
  };

  switch ((year - 4) % 12) {
    case 0:
      picture =  zodiacs['Rat'];
      break;

    case 1:
      picture =  zodiacs['Ox'];
      break;

    case 2:
      picture =  zodiacs['Tiger'];
      break;

    case 3:
      picture =  zodiacs['Rabbit'];
      break;

    case 4:
      picture =  zodiacs['Dragon'];
      break;

    case 5:
      picture =  zodiacs['Snake'];
      break;

    case 6:
      picture =  zodiacs['Horse'];
      break;

    case 7:
      picture =  zodiacs['Goat'];
      break;

    case 8:
      picture =  zodiacs['Monkey'];
      break;

    case 9:
      picture =  zodiacs['Rooster'];
      break;

    case 10:
      picture =  zodiacs['Dog'];
      break;

    case 11:
      picture =  zodiacs['Pig'];
      break;
  }
  elementChineseZodiac.src = picture;
}

showDateOfBirth();