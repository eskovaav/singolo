//Переключение меню
let menu = document.querySelector('.header-menu');

menu.addEventListener('click', function(evt) {
    const MENU_ACTIVE = 'menu-active';
    let menuItemList = menu.querySelectorAll('.header-list-item');
    let aElement;
    let itemClassList;
    for (let i = 0; i < menuItemList.length; i++) {
        aElement = menuItemList[i].firstElementChild;
        itemClassList = menuItemList[i].classList;
        if (evt.target == aElement && !itemClassList.contains(MENU_ACTIVE)) {
            itemClassList.add(MENU_ACTIVE);
        } else if (evt.target != aElement && itemClassList.contains(MENU_ACTIVE) ) {
            itemClassList.remove(MENU_ACTIVE);
        }
    }
    evt.stopPropagation();
});

//Всплывающее окно
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.popup-open');
let closePopupButton = popup.querySelector('.popup-close');

let showPopup = function () {
    openPopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.style.visibility = 'visible';

        let popupTheme = popup.querySelector('.popup-theme');
        let decriptionText = popup.querySelector('.popup-decription');
        let textSubject = document.querySelector('.subject').value;
        let textareaText = document.querySelector('.textarea').value;

        if (textSubject) {
            popupTheme.textContent = 'Тема: ' + textSubject
        } else {
            popupTheme.textContent = 'Без темы';
        }
    
        if (textareaText) {
            decriptionText.textContent = 'Описание: ' + textareaText
        } else {
            decriptionText.textContent = 'Без описания';
        }
    });
      
    closePopupButton.addEventListener('click', function () {
        popup.style.visibility = 'hidden';
        document.querySelector('#name').value = '';
        document.querySelector('#u-email').value = '';
        document.querySelector('.subject').value = '';
        document.querySelector('.textarea').value = '';
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            popup.style.visibility = 'hidden';
            document.querySelector('#name').value = '';
            document.querySelector('#u-email').value = '';
            document.querySelector('.subject').value = '';
            document.querySelector('.textarea').value = '';
        }
    });
};
showPopup();

//Перетасовка картинок в Portfolio

let portfolioMenu = document.querySelector('.menu-points')
let portfolioMenuItems = portfolioMenu.querySelectorAll('.portfolio-button');
let picsBlock = document.querySelector('.example-pic');
let pics = picsBlock.children;

portfolioMenu.addEventListener('click', function(evt) {
   
    for (let j = 0; j < portfolioMenuItems.length; j++) {
        portfolioMenuItems[j].classList.remove('portfolio-active');
        picsBlock.appendChild(pics[0]);
    }
    evt.target.classList.add('portfolio-active');
});

picsBlock.addEventListener('click', function(evt) {
    for (let k = 0; k < pics.length; k++) {
        pics[k].classList.remove('pic-active');
    }

    evt.target.classList.add('pic-active');
    if (evt.target == picsBlock) {
        picsBlock.classList.remove('pic-active');
    }
    evt.stopPropagation();
});

//Слайдер

let sliderWrapper = document.querySelector('.sliders');
console.log(sliderWrapper);

let arrowLeft = sliderWrapper.querySelector('.arrow-left');
console.log(arrowLeft);

let arrowRight = sliderWrapper.querySelector('.arrow-right');
console.log(arrowRight);

const TO_RIGHT = 'right';
const TO_LEFT = 'left';

arrowRight.addEventListener('click', function() {
    doSlide(TO_RIGHT);
});

arrowLeft.addEventListener('click', function() {
    doSlide(TO_LEFT);
});

let doSlide = function(direction) {
    let sliderItems = sliderWrapper.querySelectorAll('article');
    const OFFSET_ABSOLUTE = 1020;
    const OFFSET_RESET = 'translateX(0px)';
    const ANIMATION_INTERVAL = 500;
    const ANIMATION_TRANSITION_VALUE = new String(ANIMATION_INTERVAL) + 'ms ease-out';

    if (direction === TO_RIGHT) {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.transition = ANIMATION_TRANSITION_VALUE;
            sliderItems[i].style.transform = `translateX(-${OFFSET_ABSOLUTE}px)`;
        }
    } else if (direction === TO_LEFT) {
        const OFFSET_SECOND_SLIDE = OFFSET_ABSOLUTE * 2;
        sliderItems[1].style.transform = `translateX(-${OFFSET_SECOND_SLIDE}px)`;
        setTimeout(() => {
            sliderItems[0].style.transform = `translateX(${OFFSET_ABSOLUTE}px)`;
            sliderItems[0].style.transition = ANIMATION_TRANSITION_VALUE;
            sliderItems[1].style.transform = `translateX(-${OFFSET_ABSOLUTE}px)`;
            sliderItems[1].style.transition = ANIMATION_TRANSITION_VALUE;
        }, 0);

    }

    setTimeout(() => {
        sliderItems[0].style.transform = OFFSET_RESET;
        sliderItems[0].style.transition = '';
        sliderItems[1].style.transform = OFFSET_RESET;
        sliderItems[1].style.transition = '';
        sliderItems[1].after(sliderItems[0]);
    }, ANIMATION_INTERVAL);
}
