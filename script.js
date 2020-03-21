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

        // document.querySelector('#name').checkValidity();
        // document.querySelector('#u-email').checkValidity();
        // document.querySelector('.subject').checkValidity();
        // document.querySelector('.textarea').checkValidity();
        
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
//console.log(portfolioMenu);
let portfolioMenuItems = portfolioMenu.querySelectorAll('.portfolio-button');
//console.log(portfolioMenuItems);
let picsBlock = document.querySelector('.example-pic');
//console.log(picsBlock);
let pics = picsBlock.children;
//console.log(pics);

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
