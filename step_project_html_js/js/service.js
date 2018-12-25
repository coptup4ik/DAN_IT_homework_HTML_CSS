function service() {
  const info = [
    {
      id: 'webDesign',
      img: './assets/img/services/web.jpg',
      text: 'Some text for web design'
    },
    {
      id: 'graphicDesign',
      img: './assets/img/services/graphic.jpg',
      text: 'Some text for graphic design'
    },
    {
      id: 'onlineSupport',
      img: './assets/img/services/support.jpg',
      text: 'Some text for online support'
    },
    {
      id: 'appDesign',
      img: './assets/img/services/app.jpeg',
      text: 'Some text for app design'
    },
    {
      id: 'onlineMarketing',
      img: './assets/img/services/online.jpg',
      text: 'Some text for online marketing'
    },

    {
      id: 'seoService',
      img: './assets/img/services/seo.jpg',
      text: 'Some text for seo service'
    }
  ];

  let imgTag = document.querySelector('.first-content_img');
  let textTag = document.querySelector('.first-content_text');

  function setTextAndImage(id) {
    let array = info.filter((item)=>{
      return item.id === id;
    });

    imgTag.src = array[0].img;
    textTag.innerText = array[0].text
  }

  document.body.addEventListener('click',(e)=>{
    if (e.target.className === 'first-content_button'){
      setTextAndImage(e.target.id)
    }
  });

  setTextAndImage('webDesign');
}

service();