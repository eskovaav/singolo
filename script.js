/* ----------SLIDER---------- */

let sliderWrapper = document.querySelector('.slider__content');
console.log(sliderWrapper);

let arrowLeft = sliderWrapper.querySelector('.arrow_left-pic');
console.log(arrowLeft);

let arrowRight = sliderWrapper.querySelector('.arrow_right-pic');
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
    let sliderItems = sliderWrapper.querySelectorAll('.slider__item');
    const OFFSET_ABSOLUTE = 100;
    const OFFSET_RESET = 'translateX(0px)';
    const ANIMATION_INTERVAL = 500;
    const ANIMATION_TRANSITION_VALUE = new String(ANIMATION_INTERVAL) + 'ms ease-out';

    if (direction === TO_RIGHT) {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.transition = ANIMATION_TRANSITION_VALUE;
            sliderItems[i].style.transform = `translateX(-${OFFSET_ABSOLUTE}%)`;
        }
    } else if (direction === TO_LEFT) {
        const OFFSET_SECOND_SLIDE = OFFSET_ABSOLUTE * 2;
        sliderItems[1].style.transform = `translateX(-${OFFSET_SECOND_SLIDE}%)`;
        setTimeout(() => {
            sliderItems[0].style.transform = `translateX(${OFFSET_ABSOLUTE}%)`;
            sliderItems[0].style.transition = ANIMATION_TRANSITION_VALUE;
            sliderItems[1].style.transform = `translateX(-${OFFSET_ABSOLUTE}%)`;
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

/* ----------PORTFOLIO---------- */

let addBorderPortfolioTags = function() {
    let tagContainer = document.querySelector('.portfolio__tags');
    let tags = tagContainer.querySelectorAll('.tag');
    let portfolioBlock = document.querySelector('.portfolio__columns');
    let columnsItems = portfolioBlock.children;
    console.log(columnsItems);
    
    tagContainer.addEventListener('click', function(event) {
        for (i = 0; i < tags.length; i++) {
            tags[i].classList.remove('tag_active');
            portfolioBlock.appendChild(columnsItems[0]);;
        }
        event.target.classList.add('tag_active');
    });
};
addBorderPortfolioTags();

let addBorderPortfolio = function() {
    let portfolioBlock = document.querySelector('.portfolio__columns');
    let columnsItems = portfolioBlock.querySelectorAll('.columns_item-pic');
    
    portfolioBlock.addEventListener('click', function(event) {
        for (let i = 0; i < columnsItems.length; i++) {
            columnsItems[i].classList.remove('columns_item_active');
        }
        event.target.classList.add('columns_item_active');
        if (event.target == portfolioBlock) {
            portfolioBlock.classList.remove('columns_item_active');
        }   
    });
};
addBorderPortfolio();

let showPopup = function () {
    let popup = document.querySelector('.popup');
    let openPopupButton = document.querySelector('.popup-open');
    let closePopupButton = popup.querySelector('.popup-close');
    openPopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.style.visibility = 'visible';

        let popupTheme = popup.querySelector('.popup__theme');
        let decriptionText = popup.querySelector('.popup__decription');
        let textSubject = document.querySelector('#subject').value;
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
        document.querySelector('#email').value = '';
        document.querySelector('#subject').value = '';
        document.querySelector('.textarea').value = '';
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            popup.style.visibility = 'hidden';
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#subject').value = '';
            document.querySelector('.textarea').value = '';
        }
    });
};
showPopup();
