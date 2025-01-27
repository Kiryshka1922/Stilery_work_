 let quetionnItem = document.querySelectorAll('.quetions__item');

        quetionnItem.forEach((item, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            item.style.setProperty('--item-number', '"' + number + '"');
        });
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const btns = document.getElementsByClassName('rules__checkbox');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Проверяем, есть ли у текущей кнопки класс 'active'
    if (this.classList.contains('active')) {
      // Если есть, удаляем его
      this.classList.remove('active');
    } else {
      // Если нет, добавляем его
      this.classList.add('active');
    }
  });
}
$(document).ready(function(){
  $(window).scroll(function() {
          if ($(this).scrollTop() > 1600) {
              $('.pageup').fadeIn();
          } else {
              $('.pageup').fadeOut();
          }
      });
  
      $("a[href='#up']").click(function(){
          const _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
      });
  
      new WOW().init();
});

let swiper = new Swiper (".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation:{
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2, 
      spaceBetween: 20,
    }, 
    
  }
})
// const swiper_1 = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();