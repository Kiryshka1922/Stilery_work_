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
let swiper_2 = new Swiper (".swiper_2", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation:{
    nextEl: ".next_2",
    prevEl: ".prev_2",
  },
  breakpoints: {
    550: {
      slidesPerView: 2, 
      spaceBetween: 20,
    }, 
    
  }
})
const inputs = document.querySelectorAll('input'); // Получаем все input элементы
const addedClasses = new WeakSet(); // Создаем WeakSet для отслеживания добавленных классов

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        const nameDiv = this.nextElementSibling; // Находим следующий элемент, div.name

        if (nameDiv && nameDiv.classList.contains('name')) { // Если это div.name
          if (!addedClasses.has(nameDiv)){ // Проверяем, добавляли ли мы уже класс
              nameDiv.classList.add('active-placeholder'); // Добавляем класс
              addedClasses.add(nameDiv);  // Помечаем, что класс добавлен
          }
        }
    });
});
import { animate } from "motion"
const count = document.getElementById("count")

  animate(0, 800, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => (count.innerHTML = Math.round(latest)),
  })