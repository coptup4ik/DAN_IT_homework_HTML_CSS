/*
* Проверки входящих данных нет*/


function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

$('#createBtn').on('click', function () {
  $(this).addClass('inactive').on('animationend webkitAnimationEnd oAnimationEnd', () => {
    $(this).remove();
    createInputs();
  });
});

function createInputs() {
  let form = $('<form/>', {
    'class': 'form',
  })
    .append($('<input type="text" name="diameter" class="form__input" id="firstInputSize" placeholder="Введите диаметр" value="">'))
    .append($('<input type="text" name="color" class="form__input" id="secondInputColor" placeholder="Введите цвет">'))
    .append($('<input type="submit" class="form__btn" placeholder="Введите цвет">')).on('submit', (e) => {
      e.preventDefault();
      if ($('#firstInputSize').val() !== "" && $('#secondInputColor').val() !== "") {
        form.fadeOut(1000, () => {
          createCircle($('#firstInputSize').val(), $('#secondInputColor').val());
          form.remove();
          createRandomCircles();
        })
      }
    });
  $('body').append(form)
}

function createCircle(diameter, color) {
  let circle = $('<div class="circle">СОЗДАННЫЙ КРУГ</div>').css({
    background: color,
    width: diameter,
    height: diameter,
    color : 'white',
    zIndex : 100
  });
  $('body').append(circle);
  circle.fadeIn(500)
}

function createRandomCircles() {
  for (let i = 0; i < 100; i++) {
    let size = randomInteger(20,150)+"px";
    let circle = $('<div class="circle"></div>').css({
      left : randomInteger(0,100)+"%",
      top : randomInteger(0,100)+"%",
      backgroundColor : `rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`,
      width: size,
      height: size,
      borderRadius : '50%',
      position : 'absolute',
      display : 'none',

    });
    setTimeout(()=>{
      $('body').append(circle);
      circle.fadeIn(i*10)
    },i*10)
  }
}

$('body').on('click','.circle',function () {
  $(this).remove()
});
