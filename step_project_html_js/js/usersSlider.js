function userSlider() {
  let leftBtn = document.querySelector('.gallery-btn_left');
  let rightBtn = document.querySelector('.gallery-btn_right');
  let sliderWrapper = document.querySelector('.user-list');
  let transformXvalue = 0;

  const data = [
    {
      id: '1',
      src: './assets/img/user_profiles/user_1.png',
      name: 'Hasan',
      secondName: 'Ali',
      job: 'UX designer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tellus mauris a diam maecenas sed enim ut. Viverra orci sagittis eu volutpat. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Nisl vel pretium lectus quam id leo. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam quam nulla porttitor massa id neque aliquam vestibulum. Enim sed faucibus turpis in eu.'
    },
    {
      id: '2',
      src: './assets/img/user_profiles/user_2.png',
      name: 'Lkldsa',
      secondName: 'Kjkjasd',
      job: 'Blabla',
      review: 'Vitae justo eget magna fermentum. Congue mauris rhoncus aenean vel elit scelerisque mauris. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Lobortis scelerisque fermentum dui faucibus in. In mollis nunc sed id semper. Erat imperdiet sed euismod nisi porta lorem mollis. Ultrices neque ornare aenean euismod elementum nisi. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Quis eleifend quam adipiscing vitae proin sagittis nisl. Molestie ac feugiat sed lectus vestibulum mattis. Ut consequat semper viverra nam libero.'
    },
    {
      id: '3',
      src: './assets/img/user_profiles/user_3.png',
      name: 'User',
      secondName: 'Three',
      job: 'Job 3',
      review: 'Fringilla ut morbi tincidunt augue interdum velit euismod. Viverra justo nec ultrices dui sapien eget mi proin. Ullamcorper eget nulla facilisi etiam dignissim diam. Eget arcu dictum varius duis. Nunc consequat interdum varius sit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Non diam phasellus vestibulum lorem sed risus. Nunc eget lorem dolor sed. Felis donec et odio pellentesque. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Sodales neque sodales ut etiam sit amet nisl purus in. A lacus vestibulum sed arcu non. Habitant morbi tristique senectus et netus et malesuada fames. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. At tempor commodo ullamcorper a lacus vestibulum sed. Non curabitur gravida arcu ac tortor dignissim convallis aenean'
    },
    {
      id: '4',
      src: './assets/img/user_profiles/user_4.png',
      name: 'User',
      secondName: 'Four',
      job: 'Job 4',
      review: 'Tortor at auctor urna nunc id cursus metus aliquam eleifend. Lacinia at quis risus sed. Aliquam ultrices sagittis orci a scelerisque purus semper. Curabitur gravida arcu ac tortor. Volutpat est velit egestas dui id ornare arcu odio ut. Morbi tincidunt augue interdum velit euismod in pellentesque. Sodales ut etiam sit amet nisl. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Id cursus metus aliquam eleifend mi in nulla. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique'
    },
    {
      id: '5',
      src: './assets/img/user_profiles/user_5.png',
      name: 'User',
      secondName: 'Five',
      job: 'Job 5',
      review: 'Eget est lorem ipsum dolor sit amet consectetur. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Ipsum dolor sit amet consectetur. Viverra vitae congue eu consequat ac felis donec et. Nisl nunc mi ipsum faucibus vitae aliquet nec. A condimentum vitae sapien pellentesque habitant morbi tristique. Suspendisse in est ante in nibh. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. At erat pellentesque adipiscing commodo. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Bibendum at varius vel pharetra vel turpis nunc eget. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. In dictum non consectetur a erat. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Quis lectus nulla at volutpat diam ut venenatis. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget'
    },
    {
      id: '6',
      src: './assets/img/user_profiles/user_6.png',
      name: 'User',
      secondName: 'Six',
      job: 'Job 6',
      review: 'Sit amet nisl suscipit adipiscing bibendum est. Risus nec feugiat in fermentum posuere urna nec. At varius vel pharetra vel turpis nunc eget. Turpis massa sed elementum tempus egestas. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Consequat semper viverra nam libero justo laoreet sit amet cursus. Felis eget nunc lobortis mattis aliquam faucibus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Amet justo donec enim diam vulputate ut pharetra sit amet. Fringilla ut morbi tincidunt augue interdum. Dui sapien eget mi proin. Leo vel orci porta non pulvinar neque.'
    },
  ];

// Генерируем разметку одного элемента галлереи полльзователей
  function generateItem(src, id) {
    return `
    <li class="small-avatar" data-id=${id}>
        <div class="user-circle">
            <img src=${src} alt="users" class="list-img">
        </div>
    </li>
  `
  }

//генерируем галлерею на основе количества объектов в массиве
  function generateGallery() {
    data.forEach(item => {
      sliderWrapper.innerHTML += generateItem(item.src, item.id)
    })
  }


//добавляем данные из объектов на страницу
  function generateUserData(review, name, job, photo) {
    document.querySelector('.third-banner_text-2').innerHTML = review;
    document.querySelector('.username').innerHTML = name;
    document.querySelector('.user-job').innerHTML = job;
    document.querySelector('.user-avatar').src = photo
  }

// по-дефолту на странице генерируется первый элемент из массива данных
  generateUserData(data[0].review, data[0].name + ' ' + data[0].secondName, data[0].job, data[0].src);

  generateGallery();

// к каждому элементу галлереи добавляем трансформацию, чтобы разместить их в ряд
  for (let i = 0; i < document.querySelectorAll('.small-avatar').length; i++) {
    document.querySelectorAll('.small-avatar')[i].style.transform = `translateX(${transformXvalue}px)`;
    transformXvalue += 120;
  }

//получаем данные из transition-duration, чтобы использовать это время для установки таймера
  let galleryItemTransitionDuration = parseFloat(getComputedStyle(sliderWrapper.children[0])['transition-duration']) * 1000;

// При клике на кнопку перелистывания получаем первый элемент галлереи. Делаем клон этого элемента.
// Добавляем клон в конец списка.
// После окончания анимации удаляем первый элемент.

  rightBtn.addEventListener('click', () => {
    let item = sliderWrapper.children[0].cloneNode(true);
    item.style.transform = `translateX(${120 * sliderWrapper.children.length}px)`;
    sliderWrapper.appendChild(item);
    rightBtn.disabled = true;
    document.querySelectorAll('.small-avatar').forEach(item => {
      let matrix = new WebKitCSSMatrix(getComputedStyle(item).transform);
      item.style.transform = `translateX(${matrix.m41 - 120}px)`
    });

    setTimeout(() => {
      rightBtn.disabled = false;
      sliderWrapper.removeChild(sliderWrapper.children[0]);
    }, galleryItemTransitionDuration)
  });


  leftBtn.addEventListener('click', () => {
    let item = sliderWrapper.children[sliderWrapper.children.length - 1].cloneNode(true);
    item.style.transform = `translateX(${-120}px)`;
    sliderWrapper.insertBefore(item, sliderWrapper.children[0]);
    leftBtn.disabled = true;
    document.querySelectorAll('.small-avatar').forEach(item => {
      let matrix = new WebKitCSSMatrix(getComputedStyle(item).transform);
      item.style.transform = `translateX(${matrix.m41 + 120}px)`
    });

    setTimeout(() => {
      leftBtn.disabled = false;
      sliderWrapper.removeChild(sliderWrapper.children[sliderWrapper.children.length - 1]);
    }, galleryItemTransitionDuration)
  });

//добавляем обработчик на клик по элементу галлереи и изменяем данные на странице выполнив поиск по id в массиве данных
  let userInfoBlock = document.querySelector('.third-banner-user-info');
  let userInfoBlockTransitionDuration = parseFloat(getComputedStyle(userInfoBlock)['transition-duration']) * 1000;

  document.body.addEventListener('click', (e) => {
    if (e.target.className === 'list-img') {
      let id = e.target.closest('li').getAttribute('data-id');
      userInfoBlock.style.opacity = '0';
      setTimeout(() => {
        data.forEach(item => {
          if (item.id === `${id}`) {
            generateUserData(item.review, item.name + ' ' + item.secondName, item.job, item.src);
            userInfoBlock.style.opacity = '1';
          }
        })
      }, userInfoBlockTransitionDuration)
    }
  });

  //генерируем hover.
  document.body.addEventListener('mouseover',(e)=>{
    if (e.target.className === 'list-img') {
      let item = e.target.closest('li');
      item.style.transform += 'scale(1.1) translateY(-10px)'
    }
  });
  document.body.addEventListener('mouseout',(e)=>{
      if (e.target.className === 'list-img') {
        let item = e.target.closest('li');
        item.style.transform = `translateX(${new WebKitCSSMatrix(getComputedStyle(item).transform).m41}px) scale(1) translateY(0)`
      }
    })
}


userSlider();