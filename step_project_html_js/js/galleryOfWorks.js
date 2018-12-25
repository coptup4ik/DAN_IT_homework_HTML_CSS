function galleryOfWorks() {
  let loadMoreBtn = document.getElementById('galleryBtn');
  let clickCounter = 0;
  let initialItemsCount = 12;
  let selectedCategory = 'all';
  const galleryOfWork = [
    {
      src: './assets/img/work/work_1.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_2.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_3.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_4.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_5.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_6.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_7.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_8.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_9.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_10.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_11.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_12.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_13.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_14.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_15.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_16.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_17.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_18.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_19.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_20.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_21.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_22.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_23.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_24.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_25.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_26.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_27.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_28.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_29.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_30.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_31.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_32.png',
      category: 'wordpress',
    },
    {
      src: './assets/img/work/work_33.png',
      category: 'graphic design',
    },
    {
      src: './assets/img/work/work_34.png',
      category: 'web design',
    },
    {
      src: './assets/img/work/work_35.png',
      category: 'landing pages',
    },
    {
      src: './assets/img/work/work_36.png',
      category: 'wordpress',
    },
  ];

//Генерируем один элемент галлереи
  function generateItemOfGallery(src, dataAttribute) {
    let element = document.createElement('div');
    element.classList.add('gallery-item');
    element.setAttribute('data-category', JSON.parse(dataAttribute));
    element.innerHTML = `
    <img src=${src} alt="gallery" class="gallery-photo">
        <div class="gallery-info">
            <a href="#" class="info-icon base_color"><i class="fas fa-link "></i></a>
            <a href="#" class=" info-icon base_bg_color"><i class="fas fa-search "></i></a>
            <p class="info-header base_color">creative design</p>
            <p class="info-category">${JSON.parse(dataAttribute)}</p>
        </div>
  `
    return element
  }


// Генерируем всю галлерею на основе элементов
  let amount = 0;

  function generateGallery() {
    for (let i = amount; i < initialItemsCount; i++) {
      document.querySelector('.second-content_gallery').appendChild(generateItemOfGallery(galleryOfWork[i].src, JSON.stringify(galleryOfWork[i].category)));
    }
    amount += 12;
  }

//Добавляаем addEventListener на кнопку Load More, изменяем счетчик нажатий для этой кнопки и изменяем счетчик загруженных изображений
  loadMoreBtn.addEventListener('click', () => {
    generatePreloader(generateGallery);

    clickCounter++;
    initialItemsCount += 12;
  });


//Генерируем колесико прелоадера
  function generatePreloader(callback) {
    let preloader = document.createElement('img');
    preloader.style = `
    position      : absolute;
    width         : 25px;
    height        : 25px;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%, -50%);
    `
    ;

    preloader.src = './assets/img/preloader.gif';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = '.5';

    loadMoreBtn.append(preloader);

    setTimeout(() => {

      loadMoreBtn.removeChild(preloader);
      loadMoreBtn.disabled = false;
      loadMoreBtn.style.opacity = '1';
      callback();
      sortItemsByCategory(selectedCategory); // если мы находимся в какой-либо вкладке, то сразу отсортировуем полученные изображения после нажатия
      if (clickCounter === 2) {
        loadMoreBtn.style.display = 'none';
      }
    }, 1000);
  }


// Функция сортировки картинок галлереи
  function sortItemsByCategory(category) {
    let itemsOfCategory = document.querySelectorAll('.gallery-item');
    itemsOfCategory.forEach(item => {
      if (item.getAttribute('data-category') !== category) {
        item.style.display = 'none'
      } else {
        item.style.display = 'block'
      }
    });
    if (category === 'all') {
      itemsOfCategory.forEach(item => {
        item.style.display = 'block'
      })
    }
  }


// Добавляем addEventListener на весь бодик и отслеживаем нажатие на кнопки, отвечающие за галлерею.

  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'second-content_button') {
      setTopBorderOfActiveButton(event.target);
      selectedCategory = event.target.getAttribute('data-category');
      sortItemsByCategory(selectedCategory);
    }
    if (event.target.getAttribute('data-category') === 'all') {
      selectedCategory = 'all';
      sortItemsByCategory(selectedCategory)
    }
  });

  function setTopBorderOfActiveButton(target) {
    document.querySelectorAll('.second-content_button').forEach(item =>{
      item.style.borderTop = '1px solid #c3c3c3';
    });
    target.style.borderTop = '2px solid #18cfab';
  }

//Эта функция генерит 12 элементов при запуске страницы
  generateGallery();

}

galleryOfWorks();