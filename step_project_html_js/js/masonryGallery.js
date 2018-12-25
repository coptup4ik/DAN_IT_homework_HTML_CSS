function masonryGallery() {
  let loadMoreBtn = $('#masonryBtn');


  loadMoreBtn.on('click', function () {
    generatePreloader(generateGallery);
  });


// Генерируем всю галлерею на основе элементов
  let container = $('.grid');

  function generateGallery() {
    for (let i = 1; i < 15; i++) {
      let item = $(`<div class="grid-item"><img src=./assets/img/masonry/item_${i}.jpg alt="img"></div>`);
      container.masonry().append(item).masonry('appended', item);
    }
  }


  container.imagesLoaded(function () {
    container.masonry({
      itemSelector: '.grid-item',
      percentPosition: true
    })
  })


  function generatePreloader(callback) {
    let preloader = $(`<img src=./assets/img/preloader.gif/>`)
    .css({

    'position'      : 'absolute',
    'width'         : '25px',
    'height'        : '25px',
    'top'           : '50%',
    'left'          : '50%',
    'transform'     : 'translate(-50%, -50%)',

    })
    ;

    loadMoreBtn.prop('disabled',true).css({
      opacity : '.5'
    });

    loadMoreBtn.append(preloader);

    setTimeout(() => {
      preloader.remove();
      loadMoreBtn.prop('disabled',false).css({
        opacity : '1'
      });
      callback();
    }, 1000);
  }
}

masonryGallery();
