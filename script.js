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
let portfolioMenu = document.querySelector('.portfolio__tags')
let portfolioMenuItems = portfolioMenu.querySelectorAll('.tag');
let picsBlock = document.querySelectorAll('.portfolio__columns');
let pics = picsBlock.children;

portfolioMenu.addEventListener('click', function(evt) {
   
    for (let j = 0; j < portfolioMenuItems.length; j++) {
        portfolioMenuItems[j].classList.remove('tag_active');
        picsBlock.appendChild(pics[0]);
    }
    evt.target.classList.add('tag_active');
});

picsBlock.addEventListener('click', function(evt) {
    for (let k = 0; k < pics.length; k++) {
        pics[k].classList.remove('columns_item-pic_active');
    }

    evt.target.classList.add('columns_item-pic_active');
    if (evt.target == picsBlock) {
        picsBlock.classList.remove('columns_item-pic_active');
    }
    evt.stopPropagation();
});